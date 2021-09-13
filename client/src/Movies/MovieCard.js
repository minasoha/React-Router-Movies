import React from 'react';
import {  useParams} from 'react-router-dom';

export default function MovieCard (props) {
  
  const { movies } = props;

    const { movieID } = useParams;

  const movie = movies.find(movie => movie.id === parseInt(movieID));

  return(
    <div>hello</div>
  )
}
