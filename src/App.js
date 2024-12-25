import React from "react";
import ContactList from "./components/ContactList";
import ChatWindow from "./components/ChatWindow";
import "./styles/app.css";

const App = () => {
  return (
    <div className="app-container">
      <ContactList />
      <ChatWindow />
    </div>
  );
};

export default App;
