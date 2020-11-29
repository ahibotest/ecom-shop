import "./dashboard.css";

function dashboard() {
  return (
    <div className="dashboard_content">
      <div className="active_menu_container">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-house-door-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
          <path
            fill-rule="evenodd"
            d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
          />
        </svg>
        <p className="active_menu_display"> Dashboard</p>
      </div>
      <div className="top_cards_container">
        <div className="animate__animated animate__flipInX card sales_card">
          <div className="innercard_container">
            <svg
              width="152"
              height="187"
              viewBox="0 0 152 187"
              fill="none"
              className="circle_img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M152 141.2C148.4 141.7 144.7 142 141 142C111.4 142 85.6 125.5 72.4 101.1C66.4 90.1 63 77.4 63 64C63 37.5 76.2 14.1 96.4 0H152V129.5"
                fill="white"
              />
              <path
                opacity="0.2"
                d="M152 141.2V187H-1C-0.8 143.7 30.9 107.9 72.4 101.1C77 100.3 81.7 100 86.5 100C112.6 100 136 111.4 152 129.5"
                fill="white"
              />
            </svg>
            <p className="weekly_sales">Daily sales</p>
            <p className="weekly_dollar">$1750.00</p>
            <p></p>
          </div>
        </div>
        <div className="animate__animated animate__flipInX  card returns_card">
          <div className="innercard_container">
            <svg
              width="152"
              height="187"
              viewBox="0 0 152 187"
              fill="none"
              className="circle_img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M152 141.2C148.4 141.7 144.7 142 141 142C111.4 142 85.6 125.5 72.4 101.1C66.4 90.1 63 77.4 63 64C63 37.5 76.2 14.1 96.4 0H152V129.5"
                fill="white"
              />
              <path
                opacity="0.2"
                d="M152 141.2V187H-1C-0.8 143.7 30.9 107.9 72.4 101.1C77 100.3 81.7 100 86.5 100C112.6 100 136 111.4 152 129.5"
                fill="white"
              />
            </svg>

            <p className="weekly_sales">Weekly sales</p>

            <p className="weekly_dollar">$270.00</p>
            <p></p>
          </div>
        </div>
        <div className="animate__animated animate__flipInX  card revenue_card">
          <div className="innercard_container">
            <svg
              width="152"
              height="187"
              viewBox="0 0 152 187"
              fill="none"
              className="circle_img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M152 141.2C148.4 141.7 144.7 142 141 142C111.4 142 85.6 125.5 72.4 101.1C66.4 90.1 63 77.4 63 64C63 37.5 76.2 14.1 96.4 0H152V129.5"
                fill="white"
              />
              <path
                opacity="0.2"
                d="M152 141.2V187H-1C-0.8 143.7 30.9 107.9 72.4 101.1C77 100.3 81.7 100 86.5 100C112.6 100 136 111.4 152 129.5"
                fill="white"
              />
            </svg>
            <p className="weekly_sales">Monthly sales</p>
            <p className="weekly_dollar">$126.00</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
