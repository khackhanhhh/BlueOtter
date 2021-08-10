import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const User = props => (
  <tr>
    <td>{props.user.name}</td>
    <td>
      <Link to={"/" + props.user.id}>Details</Link>
    </td>
  </tr>
)

const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState();
 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },[]);
  const ListUser = () => {
    return users.map(currentUser => {
      return <User user={currentUser} key={currentUser.id} />;
    })
  }
  return (
    <div className=" mt-3">
      <div className="d-flex justify-content-between ">
        <h3>List User</h3>
      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Category</th>
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>
          {ListUser()}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;
