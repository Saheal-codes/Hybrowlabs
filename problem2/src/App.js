import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [userlist, setuserlist] = useState([]);
  const addrecord = async (e) => {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber < 1) {
      return addrecord(e);
    }
    const url = `https://swapi.dev/api/people/${randomNumber}`;
    const response = await axios.get(url);
    let newuserlist = [...userlist];
    newuserlist.push(response.data.name);
    setuserlist(newuserlist);
  };
  const deleterecord = (i) => {
    let newuserlist = [...userlist];
    newuserlist.splice(i, 1); //delete the element at index i
    setuserlist(newuserlist);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={addrecord} className="btn">
            Add Record
          </button>
        </div>
        <div>
          {!userlist.length ? (
            <div>No Records...click on Add Record</div>
          ) : (
            <table
              style={{
                width: "100%",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              <tbody>
                {userlist.map((user, i) => (
                  <tr key={i}>
                    <td>Name : </td>
                    <td>{user}</td>
                    <td>
                      <button onClick={() => deleterecord(i)} className="btn">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
