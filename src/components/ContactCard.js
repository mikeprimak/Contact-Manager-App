import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user1.png'
import { useState } from 'react'


const ContactCard = (props) => {
  

    const {id, name, email, phone, contactPic} = props.contact

    let marginTopValue



    if((email) && (phone)){
    marginTopValue = "15px"    
    }else if((email) || (phone)){
    marginTopValue = "9px"    
    }else{
        marginTopValue = "7px"    
    }



    return (
        <div className="item">
            <div className="mobileBlock">
            <img className="ui avatar image crop top" src={contactPic ? contactPic : user} />
            
            <div className="contact">
                
                
                {/* <Link to={`/contact/${id}`}> */}
                {/* <Link to={{ pathname: `/contact/${id}`, state: dataToPass }}> */}

                <Link to={`/contact/${id}`}  state={{ data: props.contact }} >


                <div className="header">{name}</div>
                <div>{phone}</div>
                <div>{email}</div>
                
                </Link>



                
            </div>
            </div>

           
            
            <div className="actionIcons">
                

            <i className="trash alternate outline icon marginLeftValue" title="Delete Contact"
            style={{color: "red", marginTop: marginTopValue}}
            // onClick={() => props.clickHandler(id)}
            onClick={() => props.showModal({id, name})}
            
            ></i>
   
            <Link to={`/edit`}  state={{ data: props.contact }} >
            <i className="edit alternate outline icon marginLeftValue" title="Edit Contact"
            style={{color: "Grey", marginTop:marginTopValue}}
            
            
            ></i>
            </Link>
            {phone ?
            <a href={"tel:+" + phone}>
            <i className="phone icon marginLeftValue" title="Phone Contact"
            style={{color: "green", marginTop:marginTopValue}}
            ></i>
            </a>
            :
            <i className="phone icon marginLeftValue stayPointer" title="No Phone Number"
            style={{color: "#cbe5cb", marginTop:marginTopValue, marginRight:"0.25rem"}}
            ></i>
            
            }

        {email ?
            <a href={"mailto:" + email}>
            <i className="envelope outline icon marginLeftValue" title="Email Contact"
            style={{color: "Blue", marginTop: marginTopValue}}
            ></i>
            </a>
            : 
            <i className="envelope outline icon marginLeftValue stayPointer" title="No Email Address"
            style={{color: "#b7b7ff", marginTop: marginTopValue, marginRight:"0.25rem"}}
            ></i>
            }

        </div>

        </div>
        
    )



}

export default ContactCard