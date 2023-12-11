import React, { useEffect, useRef } from 'react'
import './App.css';


const Modal = (props) => {


const refOne = useRef(null);

const cleanUpClickListener = () => {
document.removeEventListener("click", handleClick, true)
document.removeEventListener("keydown", handleKeyPress, true)
}

const cancelModal = () => {

    cleanUpClickListener()
    props.hideModal()

}

const affirmModal = () => {
    cleanUpClickListener()
    props.removeContactFunction(props.idToDelete.id)
}



useEffect(() => {
    document.addEventListener("click", handleClick, true)
    document.addEventListener("keydown", handleKeyPress, true)
}, [])

const handleClick = (e) => {

if(!refOne.current.contains(e.target)){
    cancelModal()
    
}
}

const handleKeyPress = (e) => {

    if(e.key === 'Escape'){
        cancelModal()
    }
    
    }

    

    return (
        
<div className="modalContainer">
<div className="modal" ref={refOne}>
    <h2>Delete Contact?</h2>
<p>Are you sure you want to delete contact <b>{props.idToDelete.name}</b>?</p>

<div className="buttonContainer">
<button className="modalYesButton ui button blue" onClick={() => affirmModal()}>Yes</button>

<button className="modalCancelButton ui button red" onClick={() => cancelModal()}>Cancel</button>
</div>
</div>
</div>





    )
}

export default Modal
