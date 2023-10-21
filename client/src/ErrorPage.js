import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"

const ErrorPage = () => {
  return (
    <>
    <div className="container text-center mt-5 py-5 Err-margin">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead m-3">The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary mb-4">Go to Home Page</Link>
      
    </div>
    </>
  )
}

export default ErrorPage;