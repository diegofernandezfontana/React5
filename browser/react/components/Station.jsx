// Station.js
import React from 'react';
import Songs from './Songs';
const DUMMY_GENRE_NAME = 'Jazz';
const DUMMY_SONGS = [{
  id: 1,
  name: "A Love Supreme",
  genre: "Jazz",
  artists: [{ name: "John Coltrane" }]
}];
const DUMMY_CURRENT_SONG = {};
const DUMMY_START = function () {};
export default function (props) {
    console.log(props);
    
  return (
    <div>
      <h3>{ props.genre } Station</h3>
      <Songs 
        songs={props.cancionesFiltradas} 
        currentSong={props.currentSong} 
        start={props.start}
      />
    </div>
  );
}