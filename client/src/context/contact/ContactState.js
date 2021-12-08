import React, { useReducer } from "react"
import uuid from "uuid"
import ContactContext from "./contactContext"
import contactReducer from "./contactReducer"
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types"

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        _id: "61af5a3310aea5188f358a8e",
        user: "61af4c8d0fb7ad244ee85825",
        name: "Bob Will",
        email: "bob.w.p@gmail.com",
        phone: "03523420322",
        type: "professional",
      },
      {
        _id: "61af5a1bbbb3b3d851273f3f",
        user: "61af4c8d0fb7ad244ee85825",
        name: "Bob Willi",
        email: "bob.w.p@gmail.com",
        phone: "03523420322",
        type: "personal",
      },
      {
        _id: "61af59cb7891d63ac87d366c",
        user: "61af4c8d0fb7ad244ee85825",
        name: "Bob Williams",
        email: "bob.w.p@gmail.com",
        phone: "03523420322",
        type: "personal",
      },
    ],
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
