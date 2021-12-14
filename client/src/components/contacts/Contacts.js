import React, { useContext, Fragment } from "react"
import ContactItem from "./ContactItem"
import ContactContext from "../../context/contact/contactContext"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const Contacts = () => {
  const { contacts, filtered } = useContext(ContactContext)

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>
  }

  return (
    <Fragment>
      {filtered !== null ? (
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
      )}
    </Fragment>
  )
}

export default Contacts
