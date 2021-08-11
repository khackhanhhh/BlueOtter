import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const UserDetails = (props) => {
    const [user, setUser] = useState({});
    const [todo, setTodo] = useState([]);
    const [album, setAlbum] = useState([]);
    const [countPhoto, setCountPhoto] = useState(0);
    const [post, setPost] = useState([]);
    const [countComment, setCountComment] = useState(0);

    const proId = props.match.params.id;

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + props.match.params.id)
            .then(response => {
                setUser(response.data);
            })
        axios.get('https://jsonplaceholder.typicode.com/users/' + props.match.params.id + '/todos')
            .then(response => {
                setTodo(response.data);
            })
        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${props.match.params.id}`)
            .then((response) => {
                setAlbum(response.data);
            })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${props.match.params.id}`)
            .then((response) => {
                setPost(response.data);
            })
    }, []);

    album.map((curAlbum) => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${curAlbum.id}`)
            .then((response) => {
                setCountPhoto(response.data.length);
            })
    });

    post.map((curPost) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${curPost.id}`)
            .then((response) => {
                setCountComment(response.data.length);
            })
    });




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
                        <td>{countPhoto * album.length}</td>
                        <td><button type="button" class="btn btn-dark"><Link to={"/photos/" + user.id} className="text-light">Details</Link></button></td>
                    </tr>
                    <tr>
                        <td>Todo</td>
                        <td>{todo.length}</td>
                        <td><button type="button" class="btn btn-dark"><Link to={"/todos/" + user.id} className="text-light">Details</Link></button></td>
                    </tr>
                    <tr>
                        <td>Comment</td>
                        <td>{countComment * post.length}</td>
                        <td><button type="button" class="btn btn-dark"><Link to={"/comments/" + user.id} className="text-light">Details</Link></button></td>
                    </tr>
                </thead>
            </table>
        </div>

    );
}
export default UserDetails;



