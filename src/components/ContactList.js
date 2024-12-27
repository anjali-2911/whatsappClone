import React, { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
import { fetchContacts } from "../hooks/useInstantDB";

const ContactList = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchContacts().then((contacts) =>
      dispatch({ type: "SET_CONTACTS", payload: contacts })
    );
  }, [dispatch]);

  const handleContactClick = (contact) => {
    dispatch({ type: "SET_SELECTED_CONTACT", payload: contact });
  };

  // Filter contacts based on the search term
  const filteredContacts = state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-list">
      <div className="contact-list-header">
        <h2>
          <i className="fab fa-whatsapp"></i> WhatsApp Clone
        </h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredContacts.map((contact) => {
        // Extract last message for the contact
        const lastMessage = state.messages[contact.id]?.slice(-1)[0]?.text || "";

        return (
          <div
            key={contact.id}
            className={`contact ${
              state.selectedContact?.id === contact.id ? "active" : ""
            }`}
            onClick={() => handleContactClick(contact)}
          >
            <img
              src={contact.profilePicture}
              alt={`${contact.name}'s profile`}
              className="profile-picture"
            />
            <div className="contact-info">
              <span className="contact-name">{contact.name}</span>
              <span className="last-message">{lastMessage}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
