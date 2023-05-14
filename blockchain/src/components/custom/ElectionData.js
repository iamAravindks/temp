import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ElectionData = () => {
  const [electionList, setElectionList] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/electionName", {})
      .then((response) => {
        const data = response.data;
        setElectionList(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleInputChange = (e) => {
    const name = e.target.innerHTML;
    const index = electionList.findIndex(
      (election) => election.election_name === name
    );
    setId(electionList[index].election_id);
  };

  return (
    <div className="container">
      <ul className="collection">
        <li className="collection-item avatar">
          <h3>Elections</h3>
        </li>
        {electionList.map((election) => (
          <div className="contact" key={election.election_id}>
            <li className="collection-item avatar">
              <i className="material-icons circle blue darken-2">ballot</i>
              <p>
                <b>{election.election_name}</b>
              </p>
              <br></br>
              <Link
                to={`/candidates/${election.election_id}`}
                className="title"
                onClick={handleInputChange}
              >
                <button
                  id={election.election_id}
                  className="waves-effect waves-light btn yellow darken-3"
                >
                  Add candidate
                </button>
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link
                to={`/voteCount/${election.election_id}`}
                className="title"
                onClick={handleInputChange}
              >
                <button
                  id={election.election_id}
                  className="waves-effect waves-light btn red darken-3"
                >
                  View vote Count
                </button>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ElectionData;
