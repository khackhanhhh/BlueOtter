import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Post = props => (
    <tr>
        <td>{props.post.title}</td>

        <td>
            <button type="button" class="btn btn-dark"><Link to={"/post/" + props.post.id} className="text-light">Details</Link></button>
        </td>
    </tr>
)

const PostList = (props) => {
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);
    const [photo, setPhoto] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + props.match.params.id)
            .then(response => {
                setUser(response.data);
            })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${props.match.params.id}`)
            .then((response) => {
                setPost(response.data);
            })
    }, []);


    const postList = () => {
        return post.map(currentPost => {
            return <Post post={currentPost} key={currentPost.id} />;
        })
    }


    return (

        <div className=" mt-3">
            <div className="d-flex justify-content-between ">
                <h3>List Post Of User {user.name}</h3>
            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Post</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {postList()}
                </tbody>
            </table>
        </div>
    );
}
export default PostList;
