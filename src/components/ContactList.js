import React, { useState, useContext } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";

const ContactList = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({ name: "", profilePicture: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddContact = () => {
    setIsAdding(true);
  };

  const handleSaveContact = () => {
    if (newContact.name.trim() && newContact.profilePicture.trim()) {
      const contact = {
        id: Date.now().toString(), // Generate a unique ID
        ...newContact,
      };
      dispatch({ type: "SET_CONTACTS", payload: [...state.contacts, contact] });
      setNewContact({ name: "", profilePicture: "" });
      setIsAdding(false);
    }
  };

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
          placeholder="Search Contacts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleAddContact} className="add-contact-button">
          Add Contact
        </button>
      </div>
      {isAdding && (
        <div className="add-contact-form">
          <input
            type="text"
            placeholder="Contact Name"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Profile Picture URL"
            value={newContact.profilePicture}
            onChange={(e) =>
              setNewContact({ ...newContact, profilePicture: e.target.value })
            }
          />
          <button onClick={handleSaveContact} className="save-contact-button">
            Save
          </button>
        </div>
      )}
      {filteredContacts.map((contact) => (
        <div
          key={contact.id}
          className={`contact ${
            state.selectedContact?.id === contact.id ? "active" : ""
          }`}
        >
          <img src={contact.profilePicture} alt={contact.name} className="contact-image" />
          <span>{contact.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
