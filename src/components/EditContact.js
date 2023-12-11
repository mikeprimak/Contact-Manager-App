import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';


const EditContact = (props) => {


    let { state } = useLocation();

 
    // const id = props.data.id

    const [name, setName] = useState(state.data.name);
    const [email, setEmail] = useState(state.data.email);
    const [phone, setPhone] = useState(state.data.phone);
    const [contactPic, setContactPic] = useState(state.data.contactPic);
    
    const navigate = useNavigate();

    const handleSubmit= (e) => {
        e.preventDefault();
        
       
        if(name === ""){
            alert("Name is mandatory.")
            return
        }
        props.editContactHandler({name: name, email: email, phone: phone, contactPic: contactPic, id: state.data.id})

        
        navigate("/"); 
      }


    return (
        
           
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={e => {handleSubmit(e)}}>
                <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" autoFocus
                        value={name}
                        onChange={e => setName(e.target.value)}

                        />
                     </div>
                     <div className="field">
                        <label>Phone</label>
                        <input type="text" name="phone" placeholder="phone" 
                        value={phone}
                        onChange={e => setPhone( e.target.value )}
                        />
                     </div>


                     <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" 
                        value={email}
                        onChange={e => setEmail( e.target.value )}
                        />
                     </div>


                     <div className="field">
                        <label>Contact Picture</label>
                        <input type="text" name="contactPic" placeholder="URL of Contact Picture" 
                        value={contactPic}
                        onChange={e => setContactPic( e.target.value )}
                        />
                     </div>
                     <button className="ui button blue">Update</button>
                </form>
            </div>
            
            
                      )
        }

    


export default EditContact
