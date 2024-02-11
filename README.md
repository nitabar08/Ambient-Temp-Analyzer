# Ambient Temperature Analyzer

## Overview

The **Ambient Temperature Analyzer** is a web and mobile application developed by Accuweather. It provides users with real-time insights into their room's temperature based on local weather data and mobile phone battery temperature. The application utilizes the Accuweather API for fetching local temperature data and showcases the information through an intuitive graphical interface.

## Features

- **Dynamic Data Fetching**: The application fetches local temperature data from the Accuweather API and attempts to obtain laptop battery temperature information through server-side logic.

- **Simplified Structure**: All project files are kept in a single folder for simplicity.

- **Environment Variables**: Sensitive information, such as API keys, is managed using environment variables for improved security. The `dotenv` module is used to handle these variables.

- **Express Middleware**: The server utilizes Express middleware to handle routes and serve static files, simplifying the server-side code.

- **Battery Temperature Challenges**: Due to limitations in fetching laptop battery temperature directly from a web application, the project currently uses a placeholder for laptop battery temperature data.

- **Graphical Representation**: The graphical representation of local temperature and laptop battery temperature (or placeholder data) is implemented using Chart.js, but challenges exist in accurately plotting laptop temperature data.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React (for web) / React Native (for mobile), Chart.js
- **Backend**: Node.js (Express)
- **Dependencies**: Chart.js, Electron, Express, Systeminformation

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your Accuweather API key and configure it in the application.
4. Create a `.env` file in the root directory for managing sensitive information like API keys.

   ```plaintext
   # .env
   RAPID_API_KEY=your_rapid_api_key_here
Run the application using 'npm start'.
