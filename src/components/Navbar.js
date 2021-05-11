/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import '../index.css'
export default class  extends Component {
  render() {
    return (
      <div className="nav">
        <div className="search-container">
            <input/>
            <button id="search-btn">Search</button>
        </div>
      </div>
    )
  }
}
