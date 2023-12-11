import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import user from '../images/user1.png'

const ContactDetail = (props) => {


    let { state } = useLocation();



    return (
       <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={state.data.contactPic ? state.data.contactPic : user} alt="user" />
            </div>
            <div className="content">
            <div className="header">{state.data.name}</div>
            <br />
            
            
            {state.data.phone &&
            <div className="description">{state.data.phone}
            
            <a href={"tel:+" + state.data.phone}>
            
            <i className="phone icon inline" title="Phone Contact"
            style={{color: "green", marginTop: "0px", marginLeft: "30px"}}
            ></i>


            </a>
            
            <br /><br />
</div> 

}




            {state.data.email &&
            <div className="description">{state.data.email}
            
            
            <a href={"mailto:" + state.data.email}>
            <i className="envelope outline icon inline" title="Email Contact"
            style={{color: "Blue", marginTop: "0px", marginLeft: "30px"}}
            ></i>
            </a>
            <br /><br />
            </div> 
}
            



            </div>
            
        </div>
        
        <div className="center-div">




        <Link to="/">
        <button className="ui button blue center">Back To Contact List</button>
        </Link>
     

        </div>
    </div>
       
    )


}

export default ContactDetail