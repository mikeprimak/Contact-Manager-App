import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const AddContact = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [contactPic, setContactPic] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit= (e) => {
        e.preventDefault();
        
    
        if(name === ""){
            alert("Name is mandatory.")
            return
        }
        props.addContactHandler({name: name, email: email, phone: phone, contactPic: contactPic})


        
        navigate("/"); 
      }


    return (
        
           
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={e => {handleSubmit(e)}}>
                <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" autoFocus
                        value={name}
                        onChange={e => setName(e.target.value)}

                        />
                     </div>
                    
                    <div className="field">
                        <label>Phone Number</label>
                        <input type="text" name="phone" placeholder="Phone Number" 
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
                        <input type="text" name="contactPic" placeholder="URL to Contact Picture" 
                        value={contactPic}
                        onChange={e => setContactPic( e.target.value )}
                        />
                     </div>
                     <button className="ui button blue">Add</button>
                </form>
            </div>
            
            
                      )
        }

    


export default AddContact
