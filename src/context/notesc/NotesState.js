import React from 'react';
import NoteContext from './NoteContext';

const NotesState = (props) => {
  const state = {
    "name": "saumya",
    "class": "8a"
  };

  return (
    <NoteContext.Provider value={state}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NotesState;
