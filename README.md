A real-time messaging application built using React.js, InstantDB, and IndexedDB. This application features a contact list, chat window, real-time messaging, and offline support, providing a seamless experience for users.

Features
Contact List: Displays all contacts for easy navigation.
Chat Window: Shows the chat history for the selected contact and includes a message input field.
Real-Time Messaging: Syncs messages in real-time using InstantDB.
Offline Support: Saves chat history locally using IndexedDB for offline access.
Responsive Design: A fully responsive and user-friendly interface.
Technologies Used
React.js: Front-end framework for building the user interface.
InstantDB: Real-time database for storing and retrieving messages.
IndexedDB: Local database for offline storage.
React Context: For global state management.
CSS (Flexbox/Grid): For responsive layout and design.
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/anjali-2911/WhatsappClone.git  
Navigate to the Project Directory:

bash
Copy code
cd web-whatsapp-clone  
Install Dependencies:

bash
Copy code
npm install  
Configure InstantDB:

Sign up for an account at InstantDB.
Set up your database and obtain the API keys or credentials.
Add these details to a .env file in the project root directory:
bash
Copy code
REACT_APP_INSTANTDB_API_KEY=your_api_key  
REACT_APP_INSTANTDB_URL=your_database_url  
Running the Application
Start the Development Server:

bash
Copy code
npm start  
Open the Application in Your Browser:
Navigate to http://localhost:3000.

Deployment
To deploy the application, use platforms like Netlify, Vercel, or Firebase Hosting:

Build the Production Version:

bash
Copy code
npm run build  
Follow the deployment instructions for your chosen platform.

Challenges Faced
Real-Time Messaging: Synchronizing messages between InstantDB and IndexedDB.
Offline Functionality: Managing IndexedDB storage and ensuring a smooth offline experience.
