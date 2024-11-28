React Post Application

This is a simple React application that displays a list of posts fetched from a public API, allows users to view details of individual posts, and includes pagination and search functionality.

Table of Contents

	•	Technologies Used
	•	Setup Instructions
	•	Running the Application
	•	Project Structure
	•	Future Enhancements

Technologies Used

	•	React: JavaScript library for building user interfaces.
	•	Axios: Promise-based HTTP client for making API requests.
	•	React Router: For routing and navigation between pages.
	•	Tailwind CSS: A utility-first CSS framework for styling the components.
	•	JSONPlaceholder API: Public API used to fetch posts and comments.

Setup Instructions

	1.	Clone the repository:
        First, clone the repository to your local machine.
        // git clone <repository-url>       

	2.	Navigate to the project directory:
        Go to the folder where the project was cloned.
        // cd react-post-app

    3.	Install dependencies:
        Use npm to install the required dependencies.
        // npm install

    4. Start the development server:
        After the dependencies are installed, you can run the app locally.
        // npm start
        This will open the app in your default web browser at http://localhost:3000.

Running the Application

Once you’ve installed the dependencies and started the server, navigate to the provided URL to see the application in action. Here’s what you can expect:

	•	Home Page: Displays a list of posts with a search bar to filter by title.
	•	Post Details Page: Clicking on a post title redirects you to a detailed page with post content and associated comments.

Features:

	•	Pagination: The application shows a maximum of 10 posts per page.
	•	Search: You can search for posts by title.

Project Structure
/react-post-app
├── /src
│   ├── /components
│   │   ├── Post.js
│   │   ├── PostDetails.js
│   │   └── Home.js
│   ├── App.js
│   └── index.js
├── /public
│   └── index.html
└── package.json

Key files:

	•	App.js: Contains the main application logic and routes.
	•	Home.js: Displays the list of posts and handles search functionality.
	•	PostDetails.js: Displays the details of a selected post and its comments.
	•	Post.js: Represents individual posts.

Future Enhancements

	•	Implement error handling for failed API requests.
	•	Add unit tests for components using Jest and React Testing Library.
	•	Improve styling with a custom design or additional features like dark mode.
