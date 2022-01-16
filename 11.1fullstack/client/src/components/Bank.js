import React, { useState, useEffect } from "react";
import axios from "axios";

const Bank = () => {
  const [data, setData] = useState([]);
  const [userDelete, setUserDelete] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const { data } = await //axios.get("/bank-api/users");
        axios({
          method: "get",
          url: "/bank-api/users",
          // data: {
          //   firstName: 'Finn',
          //   lastName: 'Williams'
          // }
        });
        setData(data);
      } catch (error) {
        console.log("Got Error");
      }
    };
    getAllUsers();
  }, [userDelete]);

  const onDelete = async (id) => {
    try {
      const { data } = await //axios.get("/bank-api/users");
      axios({
        method: "delete",
        url: `/bank-api/${id}`,
        // data: {
        //   firstName: 'Finn',
        //   lastName: 'Williams'
        // }
      });
      setUserDelete(data);
    } catch (error) {
      console.log("Got Error");
    }
  };
  const renderedResults = data.map((user) => {
    return (
      <div key={user.id} className="item">
        <div className="content">
          <div className="header">ID {user.id}</div>
          <div className="header">Cash {user.cash}</div>
          <div className="header">Credit {user.credit}</div>
          <div>
            {" "}
            <button onClick={() => onDelete(user.id)}>delete</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h1>I'm officially became a full stack developer</h1>
        <h1>Clients in my Bank</h1>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Bank;
