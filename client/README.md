# MyBlog
================

## Description

MyBlog is a simple blog application built with React, React Router, Express, MongoDB and NodeJS.

## Features

* [Feature 1]: User authentication and authorization 
* [Feature 2]: Create new posts
* [Feature 3]: Edit post

## Getting Started

### Prerequisites

* Node.js: Node.js is required to run the project. You can download and install Node.js from the official website.
* npm or yarn: npm (Node Package Manager) or yarn is required to manage dependencies and install packages. You can use either npm or yarn, but npm is the default package manager for Node.js.
* MongoDB: MongoDB is required to store data. You can download and install MongoDB from the official website
* React: React is required as the frontend framework for the project. You can install React using npm or yarn.
* React Router: React Router is required for client-side routing in the project. You can install React Router using npm or yarn.
* Express.js: Express.js is required as the backend framework for the project. You can install Express.js using npm or yarn.

### Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the application: `npm start` or `yarn start`

### Usage

## Here are some instructions on how to use the MyBlog application:

## Getting Started
* Open a web browser and navigate to http://localhost:3000 to access the MyBlog application.
* You will see a navigation bar at the top of the page with links to the Home, About, and Contact pages.

## Register and login
* Click on the "Register" button in the navigation bar to create an account.
* After successfuly created an acccount, continue to login before able to create any post.

## Creating a New Post
* Click on the "Create New Post" button in the navigation bar.
* Fill in the title, author, and content fields for your new post.
* Click the "Create Post" button to save your post.

## Viewing Posts
* Click on the "Home" link in the navigation bar to view a list of all posts.
* Click on a post title to view the full post.

## Editing a Post
* Click on the "Edit" button next to a post title to edit the post.
* Make changes to the title, author, and content fields as needed.
* Click the "Update Post" button to save your changes.

## Components

### HeaderComponent

* The HeaderComponent is a navigation bar that displays the application's logo and provides links to main sections of the blog.
* import React from 'eact';
import { Link } from 'eact-router-dom';

const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src="logo.png" alt="MyBlog Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;

### PostCardComponent

* The PostCardComponent is a reusable component that displays a single blog post in a card format. It shows the post title, author, date, and a brief summary.
* import React from 'react';
import { Link } from 'react-router-dom';

const PostCardComponent = ({ post }) => {
  return (
    <div className="card mb-3">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">
        <small>
          By {post.author} on {post.date}
        </small>
      </p>
      <p className="card-text">{post.summary}</p>
      <Link to={`/post/${post.id}`} className="btn btn-primary">
        Read More
      </Link>
    </div>
  );
};

export default PostCardComponent;]

## API Endpoints

### [Endpoint 1]

* **Method:** [GET/POST/PUT]
* **URL:** `/api/index.js`
* **Description:** 
* These endpoint provide basic CRUD operations for blog post. You can add or modify endpoints as needed to fit your application's requirements.

## Local Development

* Start the development server: `npm start` or `yarn start`
* The application will be available at `http://localhost:3000`

## Dependencies

* React
* NodeJS
* ExpressJS
* MongoDB

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open a pull request to contribute to the project.

## Authors

* LokmanKhodziri - lokmankhodziri@gmail.com