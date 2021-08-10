import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Photo = props => {
    return (
        <div className="card text-center text-white" >
            <img height="200px" src={props.photos.url} className="card-img-top" alt="..." />
            <div className="card-body bg-dark">
                <h5 className="card-title">Album id: {props.photos.albumId}</h5>
                <p className="card-text"><s>{props.photos.title}</s></p>
            </div>
        </div>
    )
}

const UserPhoto = (props) => {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/albums/'+ props.match.params.id + '/photos')
            .then((response) => {
                setAlbum(response.data);
                console.log(response.data);
            })
            
    }, []);
    

    

    const photoList = () => {
        return album.map(currentPhoto => {
            return (
                <div className="mt-3">
                    <Photo photos={currentPhoto} key={currentPhoto.id} />;
                </div>
            ) 
    
        })
      } 


    return (

        <>
        <tbody>
          <div className="container"></div>
          <div className="d-flex flex-wrap justify-content-around">
            {photoList()}
          </div>
        </tbody>
  
      </>
    );
}
export default UserPhoto;
