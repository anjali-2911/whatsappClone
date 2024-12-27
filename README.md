A real-time messaging application built using React.js, InstantDB, and IndexedDB. This application features a contact list, chat window, real-time messaging, and offline support, providing a seamless experience for users.

Features
1. Contact List: 
2. Chat Window: 
3. Real-Time Messaging: 
4. Offline Support: 
5. Responsive Design:

Technologies Used
React.js: Front-end framework for building the user interface.
InstantDB: Real-time database for storing and retrieving messages.
IndexedDB: Local database for offline storage.
React Context: For global state management.
CSS (Flexbox/Grid): For responsive layout and design.

I have installed:

Node.js (v20.9.0)
npm (10.8.3)

Git Repository link

git clone https://github.com/anjali-2911/WhatsappClone.git  


1. Install Dependencies:
   
npm install  
npm i bootstrap

2. Project setup
npx create-react-app whatsapp-web-clone
cd whatsapp-web-clone
npm start

3. Open the Application in Your Browser:
Navigate to http://localhost:3000.

4. Configure InstantDB:
Sign up for an account at InstantDB.
Set up your database and obtain the API keys or credentials.
Add these details to a .env file in the project root directory:

REACT_APP_INSTANTDB_API_KEY=your_api_key  
REACT_APP_INSTANTDB_URL=your_database_url  
Running the Application
Start the Development Server:
npm start  

Challenges Faced
Real-Time Messaging: Synchronizing messages between InstantDB and IndexedDB.
Offline Functionality: Managing IndexedDB storage and ensuring a smooth offline experience.


usage of hooks, context, custom hooks, useReducer,
InstantDB, and IndexedDB
 
1. React Hooks

Hooks like useState, useEffect, and useReducer are fundamental for managing state and side effects in functional components. They enable dynamic updates, API integration, and efficient state transitions without the need for class-based components.

Example: Using useState and useEffect to fetch and display medications.

import React, { useState, useEffect } from 'react';

function MedicationList() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    fetch('/api/medications')
      .then(response => response.json())
      .then(data => setMedications(data));
  }, []); // Runs once when the component mounts.

  return (
    <div>
      <h2>Medications</h2>
      <ul>
        {medications.map((medication) => (
          <li key={medication.id}>{medication.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MedicationList;
2. React Context

React Context is used to share data (like user authentication or global settings) across multiple components without prop drilling. It's often paired with useContext for easy access to the context's values.

Example: Providing user data using UserContext.

import React, { createContext, useContext } from 'react';

const UserContext = createContext();

function App() {
  const user = { name: 'Anjali', loggedIn: true };

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

function Header() {
  const user = useContext(UserContext);

  return <h1>Welcome, {user.name}!</h1>;
}

export default App;
3. Custom Hooks

Custom hooks encapsulate reusable logic, such as fetching data or handling forms. They help in keeping the components clean and logic reusable.

Example: Creating a custom hook for fetching data.

function useFetchData(apiEndpoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [apiEndpoint]);

  return data;
}

// Usage in a component
function MedicationList() {
  const medications = useFetchData('/api/medications');

  return (
    <ul>
      {medications.map((medication) => (
        <li key={medication.id}>{medication.name}</li>
      ))}
    </ul>
  );
}
4. useReducer

useReducer is suitable for managing complex state changes, especially when state transitions are dependent on specific actions.

Example: Managing medication reminders with useReducer.

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_REMINDER':
      return [...state, action.payload];
    case 'REMOVE_REMINDER':
      return state.filter((reminder) => reminder.id !== action.payload.id);
    default:
      return state;
  }
}

function ReminderApp() {
  const [reminders, dispatch] = useReducer(reducer, initialState);

  const addReminder = () => {
    dispatch({
      type: 'ADD_REMINDER',
      payload: { id: Date.now(), text: 'Take medication' },
    });
  };

  return (
    <div>
      <button onClick={addReminder}>Add Reminder</button>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder.id}>{reminder.text}</li>
        ))}
      </ul>
    </div>
  );
}
5. IndexedDB

IndexedDB is used for offline data storage of large structured datasets. It's ideal for storing user data like reminders and syncing them with the server when online.

Example: Saving medication data to IndexedDB.

function saveToIndexedDB(medication) {
  const request = indexedDB.open('MedicationDB', 1);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore('medications', { keyPath: 'id' });
  };

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction(['medications'], 'readwrite');
    const store = transaction.objectStore('medications');
    store.put(medication);
  };
}

saveToIndexedDB({ id: 1, name: 'Aspirin', schedule: 'Morning' });
