import React, { useState, useEffect } from 'react';
import axios from 'axios';



const UserDetails = (props) => {
    const [user, setUser] = useState({});
    const [todo, setTodo] = useState([]);
    const [album, setAlbum] = useState([]);
    const [countPhoto,setCountPhoto]=useState(0);

    const proId = props.match.params.id;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + props.match.params.id)
            .then(response => {
                setUser(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + props.match.params.id+'/todos')
            .then(response => {
                setTodo(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + props.match.params.id+'/albums')
            .then(response => {
                setAlbum(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const photo = album.map((curAlbum)=>{
        axios.get('https://jsonplaceholder.typicode.com/albums/'+ curAlbum.id + '/photos')
            .then(response => {
                setCountPhoto(response.data.length);
                console.log(curAlbum.id+countPhoto);
            })
            .catch(function (error) {
                console.log(error);
            })
    })


    return (

        <div className=" mt-3">
            <div className="d-flex justify-content-between ">
                <h3>{user.name}</h3>
            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Property</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>{user.website}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{user.address?.suite}, {user.address?.street} street, {user.address?.city} city</td>
                    </tr>

                    <tr>
                        <td>Company</td>
                        <td>{user.company?.name}</td>
                    </tr>

                    <tr>
                        <td>Photo</td>
                        <td>{countPhoto}</td>
                    </tr>
                    <tr>
                        <td>Todo</td>
                        <td>{todo.length}</td>
                    </tr>
                    <tr>
                        <td>Comment</td>
                        <td>{user.company?.name}</td>
                    </tr>
                </thead>
            </table>
        </div>

        // <div className="d-flex">
        //   <div className="ml-5">
        //     <h2 className="font-weight-bold">{user.name}</h2>
        //     <div className="d-flex flex-row">
        //       <p className="font-weight-bold">Username : </p>
        //       <p>{user.username}</p>
        //     </div>
        //     <div className="d-flex flex-row">
        //       <p className="font-weight-bold">Email : </p>
        //       <p>{user.email}</p>
        //     </div>
        //     <div className="d-flex flex-row">
        //       <p className="font-weight-bold">Phone : </p>
        //       <p>{user.phone}</p>
        //     </div>
        //     <div className=" d-flex flex-row text-primary">
        //       <h4 className="font-weight-bold">Website : </h4>
        //       <h4>{user.website} </h4>
        //     </div>
        //   </div>
        // </div>

    );
}
export default UserDetails;



