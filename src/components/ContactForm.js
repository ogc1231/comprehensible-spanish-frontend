import React from 'react'
import { useRedirect } from "../hooks/useRedirect";

const ContactForm = () => {
    useRedirect('loggedOut');
  return (
    <div>ContactForm</div>
  )
}

export default ContactForm