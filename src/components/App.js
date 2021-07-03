import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Create from "./Create";
import Note from "./Note";


function App() {

  const [notes,setNotes] = useState([]) 

  const addNote = (note) => {
    setNotes(prev => {
      return[...prev,note]
    })
  }

  const deleteNote = (id) => {
    setNotes(prev => {
      return prev.filter((item,index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      {/* {notes.map(note => <Note note={note} key={note.key}/>)} */}
      <Create addNote={addNote}/>
      {notes.map((note,index) => {
        return <Note note={note} key={index} id={index} deleteNote={deleteNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
