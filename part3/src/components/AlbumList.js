import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Album = props => (
    <tr>
      <td>{props.album.title}</td>

      <td>
      <button type="button" class="btn btn-dark"><Link to={"/album/" + props.album.id} className="text-light">Details</Link></button>
      </td>
    </tr>
  )

const AlbumList = (props) => {
    const [user, setUser] = useState({});
    const [album, setAlbum] = useState([]);
    const [photo, setPhoto] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + props.match.params.id)
            .then(response => {
                setUser(response.data);
            })

        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${props.match.params.id}`)
            .then((response) => {
                setAlbum(response.data);
            })
    }, []);
    

    const albumList = () => {
        return album.map(currentAlbum => {
            return <Album album={currentAlbum} key={currentAlbum.id} />;
    
        })
      } 


    return (

        <div className=" mt-3">
        <div className="d-flex justify-content-between ">
          <h3>List Album Of User {user.name}</h3>
        </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Album</th>
              <th>Actions</th>
            </tr>
  
          </thead>
          <tbody>
            {albumList()}
          </tbody>
        </table>
      </div>
    );
}
export default AlbumList;
