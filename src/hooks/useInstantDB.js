export const fetchContacts = async () => {
  // Replace with InstantDB API calls
  return [
    { id: "1", name: "Priyanka", profilePicture: "https://via.placeholder.com/50/25d366?text=P" },
    { id: "2", name: "Shivani", profilePicture: "https://via.placeholder.com/50/25d366?text=S" },
    { id: "3", name: "Madhura", profilePicture: "https://via.placeholder.com/50/25d366?text=M" },
    { id: "4", name: "Anjali", profilePicture: "https://via.placeholder.com/50/25d366?text=A" },
    { id: "5", name: "Tejas", profilePicture: "https://via.placeholder.com/50/25d366?text=T" },
    { id: "6", name: "Priya", profilePicture: "https://via.placeholder.com/50/25d366?text=P" },
    { id: "7", name: "Rahul", profilePicture: "https://via.placeholder.com/50/25d366?text=R" },
    { id: "8", name: "Sneha", profilePicture: "https://via.placeholder.com/50/25d366?text=S" },
    { id: "9", name: "Arjun", profilePicture: "https://via.placeholder.com/50/25d366?text=A" },
    { id: "10", name: "Nidhi", profilePicture: "https://via.placeholder.com/50/25d366?text=N" }
  ];
};

  export const sendMessage = async (contactId, message) => {
    // Replace with InstantDB API calls
    console.log(`Message sent to ${contactId}:`, message);
  };
  