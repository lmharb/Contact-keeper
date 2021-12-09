import React, { useReducer } from "react"
import { v4 as uuidv4 } from "uuid"
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
        id: "61af5a3310aea5188f358a8e",
        user: "61af4c8d0fb7ad244ee85825",
        name: "Bob Will",
        email: "bob.w.p@gmail.com",
        phone: "03523420322",
        type: "professional",
      },
      {
        id: "61af5a1bbbb3b3d851273f3f",
        user: "61af4c8d0fb7ad244ee85825",
        name: "Bob Willi",
        email: "bob.w.p@gmail.com",
        phone: "03523420322",
        type: "personal",
      },
      {
        id: "61af59cb7891d63ac87d366c",
        user: "61af4c8d0fb7ad244ee85825",
        name: "Bob Williams",
        email: "bob.w.p@gmail.com",
        phone: "03523420322",
        type: "personal",
      },
    ],
    current: null,
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }
  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  // Update Contact

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
