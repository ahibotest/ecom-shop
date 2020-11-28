import "./Appheader.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

function Appheader() {
  let handleClick = (e) => {
    //code to handle clicking notification button
    if (e.target.nextSibling !== null) {
      if (e.target.nextSibling.style.display === "flex") {
        e.target.nextSibling.style.display = "none";
      } else {
        e.target.nextSibling.style.display = "flex";
      }

      //code to handle clicking notification button
      //if (e.target.style.display === "flex") {
      //  e.target.style.display = "none";
      //} else {
      //  e.target.style.display = "flex";
      //}
    }
  };

  return (
    <div className="header">
      <Link style={{ textDecoration: "none", color: "black" }} to="/Dashboard">
        <p className="Brand">
          AHIBO
          <p
            style={{
              textAlign: "right",
              fontWeight: "regular",
              fontStyle: "italic",
              fontSize: "10px",
              color: "gray",
            }}
          >
            seller
          </p>
        </p>
      </Link>

      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-list desktop"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p className="store_name">Dazzle Enterprise</p>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-chevron-down"
          style={{ marginLeft: "3px" }}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>

      <div className="for_mobile">
        <div className="notification_container">
          <svg
            onClick={handleClick}
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-bell"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
            <path
              fill-rule="evenodd"
              d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
            />
          </svg>

          <div className="notification_messages">
            <p> Messages</p>
            <p>Ahibo sent you a message</p>
            <p>Ahibo sent you a message</p>
            <p>Ahibo sent you a message</p>
          </div>
        </div>

        <svg
          onClick={handleClick}
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-list mobile"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Appheader;
