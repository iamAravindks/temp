import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import sendEmail from "../utils/sendEmail.js";
import User from "../models/userModel.js";

const userRouter = Router();

userRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        res.status(400);
        throw new Error("Email and name field are required");
      }

      const user = await User.findOne({
        email,
      });

      if (!user) {
        res.status(400);
        throw new Error(`No user with ${email} found`);
      }

      const otpToken = await user.createOtpToken();
      await user.save({ validateBeforeSave: false });
      const message = `Use the OTP to login\n OTP : ${otpToken}`;

      try {
        await sendEmail({
          email,
          subject: "OTP for login",
          message,
        });

        res.status(200).json({
          message: "Check your mail for the otp",
        });
      } catch (error) {
        user.otp = undefined;
        user.otpExpires = undefined;
        console.log(error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error);

      throw new Error(error.message || "Internal server error");
    }
  })
);

userRouter.post(
  "/verify-otp",
  expressAsyncHandler(async (req, res) => {
    // Get the token from the user
    const { otp } = req.body;

    const user = await User.findOne({
      otp,
      otpExpires: { $gt: Date.now() },
    });

    if (!user) {
      res.status(400);
      throw new Error("otp is invalid or expired ");
    }

    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save();

    res.status(200).json({
      message: "Welcome to votem",
      data: await user.toJSON(),
    });
  })
);
export default userRouter;
