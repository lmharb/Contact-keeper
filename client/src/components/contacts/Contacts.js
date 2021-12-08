import React, { useContext, Fragment } from "react"
import ContactItem from "./ContactItem"
import ContactContext from "../../context/contact/contactContext"

const Contacts = () => {
  const { contacts } = useContext(ContactContext)

  return contacts.map((contact) => (
    <ContactItem key={contact.id} contact={contact} />
  ))
}

export default Contacts
