import React from "react";

const Message = ({ message }) => {
  const { text, sender, timestamp, file } = message;

  // Format the time and date
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  const formattedDate = new Date(timestamp).toLocaleDateString();

  return (
    <div className={`message ${sender === 'me' ? 'outgoing' : 'incoming'}`}>
      {/* Display message text */}
      <p>{text}</p>

      {/* Display image if file is attached */}
      {file && <img src={file} alt="attached" className="message-image" />}

      {/* Display time and date */}
      <div className="message-time">
        <span>{formattedDate} - {formattedTime}</span>
      </div>
    </div>
  );
};

export default Message;
