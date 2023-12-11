import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import ScrollToTop from "./scrollToTop";
import Modal from "./modal";
import EditContact from './EditContact';





function App() {


  const LOCAL_STORAGE_KEY = 'contacts';

  const [modalShowing, setModalShowing] = useState(false);
  const [idToDelete, setIdToDelete] = useState();



  // initializes and sets 'contacts' from existing contacts in local memory
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [{name: 'Mike Primak', email: 'michaelsprimak@gmail.com', phone: '1-289-838-2575', contactPic: 'https://michaelprimak.ca/michael-primak-professional-photo.png', id: '4eb66b40-abeb-4cdd-be53-9ca6689ab885'}]
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


// when searchTerm is changed, it rerenders the ContactList
  useEffect(() => {
    
    if (searchTerm !== "") {
      
      const newContactList = contacts.filter((contact) => {
        
        
        
        let tempContact = Object.assign({}, contact);
        delete tempContact.id
        delete tempContact.contactPic
        
        return Object.values(tempContact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
        
        // .toLowerCase()
        // .includes(searchTerm.toLowerCase)


      })
      
      setSearchResults(newContactList)


    }else{
      setSearchResults(contacts)
    }




  }, [searchTerm]);



  const searchHandler = (searchKeyword) => {
    setSearchTerm(searchKeyword)
 
  }


  // receives 'contact' and adds to 'contacts'
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }])
  }


  // receives 'contact' and adds to 'contacts'
  const editContactHandler = (editedContact) => {
    
    setContacts(
      contacts.map((contact) => {
        return contact.id === editedContact.id ? editedContact : contact
      })

    )

    // setContacts([...contacts, { id: uuid(), ...contact }])
  }


  const showModal = (props) => {
    
    setIdToDelete(props)
    setModalShowing(true)
  }

  const hideModal = () => {
    setModalShowing(false)
  }

  const removeContactHandler = (id) => {

    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;

    });
    setContacts(newContactList);
    setModalShowing(false);

  };

  // on app start, gets contacts from local storage and does setContacts
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts) setContacts(retrieveContacts);
  }, [])


  // on page load sets local storage to contain 'contacts'
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  return (

    <div>
      {modalShowing && <Modal hideModal={hideModal} idToDelete={idToDelete} removeContactFunction={removeContactHandler} />}

      <div className="ui container">
        <Router>
          <ScrollToTop />
          <Header />
          <Routes>

            <Route path="/" exact element={<ContactList contacts={searchTerm.length >= 1 ? searchResults : contacts } 
            searchTerm={searchTerm} searchHandler={searchHandler} getContactId={removeContactHandler} showModal={showModal} />}> </Route>
            <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />}> </Route>
            <Route path="/contact/:id" element={<ContactDetail />}> </Route>
            <Route path="/edit" element={<EditContact editContactHandler={editContactHandler} />}> </Route>
          </Routes>
        </Router>


      </div>

    </div>


  );
}

export default App;
