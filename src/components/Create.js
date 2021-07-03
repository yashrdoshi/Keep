import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const Create = ({addNote}) => {

    const [isExpanded,setIsExpanded] = useState(false)

    const [note,setNote] = useState({
        title:'',
        content:''
    })

    const handleChange = (e) => {
        const {name,value} = e.target;

        setNote(prev => {
            return{
                ...prev,
                [name] : value
            }
        })
    }

    const submitNote = (e) => {
        e.preventDefault()
        addNote(note)
        setNote({
            title:'',
            content:''
        })
    }

    const expand = () => {
        setIsExpanded(true)
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded &&  <input onChange={handleChange} name='title' value={note.title} type="text" placeholder='Title'/>}
                <textarea onClick={expand} onChange={handleChange} name='content' value={note.content} name="content" placeholder="Take a note..." rows={isExpanded?3:1}></textarea>
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}><AddIcon></AddIcon></Fab>
                </Zoom>
            </form>
        </div>
    );
}
 
export default Create;