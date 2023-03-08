import React from 'react'
import PropTypes from "prop-types";


function Profile(props) {
  return <>
  
  <h1>Hello, I am {props.fullName}, I am  {props.bio} and  {props.profession}</h1>
  
  
  {props.children}
  </>;
}

Profile.propTypes = {
   
    fullName: PropTypes.string,
   };

export default Profile
