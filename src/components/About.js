import React from 'react'
import { useContext } from 'react';
import NoteContext from '../context/notesc/NotesState';

const About = (props) => {
  const varia= useContext(NoteContext);
  return (
    <div>
      this is about {varia.name};
    </div>
  )
}

export default About;
