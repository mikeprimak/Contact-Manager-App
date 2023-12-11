import React, { useRef } from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = (props) => {
  
    const inputRef1 = useRef("")

    const getSearchTerm = () => {

        props.searchHandler(inputRef1.current.value)
     }



    const deleteContactHandler = (id) => {

        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact) => {

        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} showModal={props.showModal} />

        )



    }

    )


    return (

        <div className="main">

            <h2>Contact List
                <Link to="/add">
                    <button className="ui button blue right" >Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input type="text" name="search"
                        ref={inputRef1} placeholder="Search Contacts" className="prompt" value={props.searchTerm} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList.length > 0 ? renderContactList : "No Contacts Available"}
            </div>

        </div>


    )





}

export default ContactList