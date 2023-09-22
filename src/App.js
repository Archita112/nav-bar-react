import React from 'react';
import './App.css';

export default function App() {
  return (
	<div className='App'>
		<ul>
      <li>
		<a href='#'>Home</a>
	  </li>
	  <li>
		<a href='#'>About</a>
	  </li>
	  <li>
		<a href='#'>Contact</a>
	  </li>
	  <li>
		<a href='#' className='signup-btn'>Signup</a>
	  </li>
	  <li>
		<a href='#'className='login-btn'>Login</a>
	  </li>
		</ul>
	</div>
  );
}