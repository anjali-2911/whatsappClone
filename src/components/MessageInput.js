import React, { useState, useContext } from "react";
import { GlobalStateContext } from "../context/GlobalStateContext";
import { sendMessage } from "../hooks/useInstantDB";

const MessageInput = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleSend = async () => {
    if ((text.trim() || file) && state.selectedContact) {
      const newMessage = {
        sender: "me",
        text: text.trim() || "",
        file: file ? URL.createObjectURL(file) : null, // Create a temporary URL for the file
        timestamp: new Date(),
      };

      await sendMessage(state.selectedContact.id, newMessage);
      dispatch({
        type: "SET_MESSAGES",
        payload: {
          [state.selectedContact.id]: [
            ...(state.messages[state.selectedContact.id] || []),
            newMessage,
          ],
        },
      });

      setText("");
      setFile(null);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="message-input">
      <label htmlFor="file-upload" className="file-upload-button">
        +
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-upload"
      />
      <input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
