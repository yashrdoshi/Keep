import DeleteIcon from "@material-ui/icons/Delete";

const Note = ({note,deleteNote,id}) => {

  const handleClick = (e) => {
    deleteNote(id)
  }


  return (
  <div className="note" >
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={handleClick}><DeleteIcon/></button>
  </div>);
}

export default Note;