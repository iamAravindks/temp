import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Choose = () => {
  const [election_name, setElectionName] = useState([]);
  const [election_organizer, setElectionOrganizer] = useState([]);
  const [election_id, setElectionId] = useState([]);
  const [final, setFinal] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/electionName", {})
      .then(function (response) {
        var data = response.data;
        setFinal(data);
      })
      .catch(function (err) {
        console.error(err);
      });
  }, []);

  const handleInputChange = (e) => {
    // console.log(e.target.innerHTML);
    var name = e.target.innerHTML;
    var index = 0;
    for (let i = 0; i < election_name.length; i++) {
      if (name === election_name[i]) {
        index = i;
        break;
      }
    }
    var id = election_id[index];
    setId(id);
  };

  const electionList = final.map((election) => {
    return (
      <div className="contact" key={election.election_id}>
        <li className="collection-item avatar">
          <i className="material-icons circle blue darken-2">ballot</i>
          <Link
            to={"/vote/" + election.election_id}
            className="title"
            onClick={handleInputChange}
          >
            {election.election_name}
          </Link>
        </li>
      </div>
    );
  });
  return (
    <div className="container">
      <ul className="collection">
        <li className="collection-item avatar">
          <h3>Elections</h3>
        </li>
        {electionList}
      </ul>
    </div>
  );
};

export default Choose;
