import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Todo = props => (
    <tr>
      <td>{props.todo.title}</td>
      <td>{props.todo.completed}</td>
    </tr>
  )

const UserTodo = (props) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + props.match.params.id + '/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    
    const ListUser = () => {
        return todos.map(currentTodo => { 
          return <Todo todo={currentTodo} key={currentTodo.id} />;
        })
      }
      return (
        <div className=" mt-3">
          <div className="d-flex justify-content-between ">
            <h3>List Todo</h3>
          </div>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Completed</th>
              </tr>
    
            </thead>
            <tbody>
              {ListUser()}
            </tbody>
          </table>
        </div>
      );
}
export default UserTodo;



