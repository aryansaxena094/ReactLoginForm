# React Login Form

This is a simple ReactJS project that allows users to login to the system. It consists of four components, including index.js, App.jsx, Input.jsx, and Login.jsx.

## Components

- index.js
This file is responsible for rendering the App component on the DOM. It imports the ReactDOM library and the App component from the App.jsx file, and then it calls the ReactDOM.render() method to render the App component on the HTML div element with the root ID.

- App.jsx
This component is the main component of the application. It imports the Login component from the Login.jsx file, and it renders the Login component if the isLoggedIn variable is false, or it renders a Hello message if the isLoggedIn variable is true. The isLoggedIn variable is currently set to false.

- Input.jsx
This component is a reusable component that renders an HTML input element based on the type and placeholder props that it receives from its parent component.

- Login.jsx
This component renders a login form that includes three input fields for the username, password, and confirm password, as well as a login button. It imports the Input component from the Input.jsx file, and it uses it to render the input fields.

## Usage

To use this project, you can follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running the npm install command in your terminal.
3. Run the project by running the npm start command in your terminal.
4. Open your browser and navigate to `http://localhost:3000`.
5. You should see the login form.

## Conclusion
This is a simple ReactJS project that demonstrates the use of reusable components and conditional rendering. It can be easily customized and extended to fit your needs.