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

4.Configure InstantDB:
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
