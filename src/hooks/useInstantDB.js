export const fetchContacts = async () => {
  try {
    // Replace with your InstantDB API endpoint for fetching contacts
    const response = await fetch("https://api.instantdb.com/contacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "cc019be4-13fa-4fd9-bf86-3094d846c0fe", // Replace with your API key or token
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching contacts: ${response.statusText}`);
    }

    const contacts = await response.json();
    return contacts;
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
    return [];
  }
};

export const sendMessage = async (contactId, message) => {
  try {
    // Replace with your InstantDB API endpoint for sending messages
    const response = await fetch("https://api.instantdb.com/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "cc019be4-13fa-4fd9-bf86-3094d846c0fe", // Replace with your API key or token
      },
      body: JSON.stringify({
        contactId,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error sending message: ${response.statusText}`);
    }

    console.log(`Message sent to ${contactId}:`, message);
  } catch (error) {
    console.error("Failed to send message:", error);
  }
};
