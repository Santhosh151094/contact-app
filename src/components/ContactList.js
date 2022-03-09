import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { contacts } = props;
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = contacts.map((contact, index) => {
    return (
      <ContactCard
        contact={contact}
        key={index}
        clickHandler={deleteContactHandler}
      />
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
