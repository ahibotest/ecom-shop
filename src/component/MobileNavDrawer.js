import React from "react";
import { Link } from "react-router-dom";
import "./MobileNavDrawer.css";

function MobileNavDrawer() {
  return (
    <div className="mobile_sidebar">
      <Link style={{ textDecoration: "none" }} to="/dashboard">
        <div className="menu_item_container">
          <p>Dashboard</p>
          <svg
            width="0.9em"
            height="0.9em"
            viewBox="0 0 16 16"
            className="svg_home"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
            <path
              fill-rule="evenodd"
              d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/orders">
        <div className="menu_item_container">
          <p>Orders</p>
          <svg
            width="0.9em"
            height="0.9em"
            viewBox="0 0 16 16"
            className="svg_orders"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm.354-7.646a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
            />
          </svg>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/products">
        <div className="menu_item_container">
          <p>Products</p>
          <svg
            width="0.9em"
            height="0.9em"
            viewBox="0 0 16 16"
            className="svg_products"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
            />
          </svg>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/reports">
        <div className="menu_item_container">
          <p>Reports</p>
          <svg
            width="0.9em"
            height="0.9em"
            viewBox="0 0 16 16"
            className="svg_reports"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"
            />
          </svg>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/Transactions">
        <div className="menu_item_container">
          <p>Transactions</p>
          <svg
            width="0.9em"
            height="0.9em"
            viewBox="0 0 16 16"
            className="svg_transactions"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z" />
            <path
              fill-rule="evenodd"
              d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"
            />
            <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default MobileNavDrawer;
