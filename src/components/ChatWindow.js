import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
import Message from "./Message";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const { state } = useContext(GlobalStateContext);
  const selectedContact = state.selectedContact;

  return (
    <div className="chat-window">
      {/* Header to display the name of the selected contact */}
      {selectedContact ? (
        <div className="chat-header">
          <h3>{selectedContact.name}</h3>
        </div>
      ) : (
        <div className="chat-placeholder">
          <h3>Select a contact to start chatting</h3>
        </div>
      )}

      {/* Chat History */}
      <div className="chat-messages">
        {selectedContact &&
          (state.messages[selectedContact.id] || []).map((message, index) => (
            <Message key={index} message={message} />
          ))}
      </div>

      {/* Message Input */}
      {selectedContact && <MessageInput />}
    </div>
  );
};

export default ChatWindow;
