import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'

export const LinkItem = (props) => {
    const pageURI = window.location.pathname+window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    return (
      <li className={liClassName}>
        <Link to={props.path} className="nav-link">
          {props.name}
          {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
        </Link>
      </li>
    );
  }
