import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Photo = props => {
    return (
        <div className="card text-center text-white" >
            <img height="300px" src={props.photos.url} className="card-img-top" alt="..." />
            <div className="card-body bg-dark">
                <h5 className="card-title">Album id: {props.photos.albumId}</h5>
                <p className="card-text">Title: {props.photos.title}</p>
            </div>
        </div>
    )
}

const PhotoList = (props) => {
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
                <div className="mt-3 col-12 col-sm-6 col-md-4">
                    <Photo photos={currentPhoto} key={currentPhoto.id} />
                </div>
            ) 
    
        })
      } 


    return (

        <>
        <tbody>
          <div className="container"></div>
          <div className="d-flex flex-wrap justify-content-around row">
            {photoList()}
          </div>
        </tbody>
  
      </>
    );
}
export default PhotoList;
