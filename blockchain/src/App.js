import React, { useState, useEffect } from "react";
import NewElection from "./components/custom/NewElection";
import NavBar from "./components/custom/Navbar";
import Home from "./components/custom/Home";
import Vote from "./components/custom/Vote";
import VoteCount from "./components/custom/VoteCount";
import ElectionData from "./components/custom/ElectionData";
import Choose from "./components/custom/Choose";
import { BrowserRouter, Route } from "react-router-dom";
import NewCandidate from "./components/custom/NewCandidate";
import Login from "./components/custom/Login";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="min-h-screen flex justify-center bg-gray-50 py-12 px-16 sm:px-6 lg:px-8">
        <Route exact path="/" component={Home} />
        <Route exact path="/newelection" component={NewElection} />
        <Route exact path="/elections" component={ElectionData} />
        <Route exact path="/candidates/:id" component={NewCandidate} />
        <Route exact path="/vote/:id" component={Vote} />
        <Route exact path="/choose" component={Choose} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/voteCount/:id" component={VoteCount} />
      </div>
    </BrowserRouter>
  );
};

export default App;
