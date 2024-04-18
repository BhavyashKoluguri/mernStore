import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
    
  <div className='contact_container'>

      <div className='contact'>
        <h1>Contact Information</h1>
      </div>
      <form>
        <div className='name_email'>
            <div className='name'>
                <p>Name</p>
                <input type='text' placeholder='Your Full Name'/>
            </div>
            <div className='email'>
            <p>Email</p>
        <input type='text' placeholder='Your Full Name'/>
            </div>
        </div>
        <p>Name</p>
        <input type='text' placeholder='Enter Your Message here'/>
      </form>

  </div>
    
    </>
  );
}

export default Contact;
