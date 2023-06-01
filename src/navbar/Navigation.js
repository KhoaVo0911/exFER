import React, { Component } from "react"
import "./nav.css";
export default class Navigation extends Component {
    render() {
        return (
          <div id="main-navbar" className="navbar">
          <h2 className="logo">Football</h2>
          <nav>
            <ul className="nav">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/home">About</a>
              </li>
              <li>
                <a href="/home">News</a>
              </li>
              <li>
                <a href="/home">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        )
    }
}