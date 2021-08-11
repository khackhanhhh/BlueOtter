import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Comment = props => {
    return (
        <div className="card text-center text-white" style={{width: "30rem"}} >
            <div className="card-body bg-secondary">
                <h5 className="card-title text-dark">Name: {props.comment.name}</h5>
                <p className="card-text">Title: {props.comment.body}</p>
            </div>
        </div>
    )
}

const CommentList = (props) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts/'+ props.match.params.id + '/comments')
            .then((response) => {
                setComment(response.data);
                console.log(response.data);
            })
            
    }, []);
    

    

    const commentList = () => {
        return comment.map(currentComment => {
            return (
                <div className="mt-3">
                    <Comment comment={currentComment} key={currentComment.id} />
                </div>
            ) 
    
        })
      } 


    return (

        <>
        <tbody>
          <div className="container"></div>
          <div className="d-flex flex-column row">
            {commentList()}
          </div>
        </tbody>
  
      </>
    );
}
export default CommentList;
