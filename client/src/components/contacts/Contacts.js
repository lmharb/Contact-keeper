import React, { useContext, Fragment, useEffect } from "react"
import Spinner from "../layout/Spinner"
import ContactItem from "./ContactItem"
import ContactContext from "../../context/contact/contactContext"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const Contacts = () => {
  const { contacts, filtered, getContacts, loading } =
    useContext(ContactContext)

  useEffect(() => {
    getContacts()
    //eslint-disable-next-line
  }, [])

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        filtered !== null ? (
          filtered.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        ) : (
          <TransitionGroup>
            {contacts.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem key={contact._id} contact={contact} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Contacts
