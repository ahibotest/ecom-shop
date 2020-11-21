import React from "react";

const VendorProductUploadForm = ({ setShowFormModal }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setShowFormModal(false);
    }
  };

  return (
    <div onClick={handleClick} className="backdrop">
      <div className="form">
        <form className="vendor_form">
          <div className="form_title">
            <svg
              width="1em"
              height="1em"
              style={{ marginRight: "5px" }}
              viewBox="0 0 16 16"
              class="bi bi-plus-circle-fill"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
              />
            </svg>
            ADD PRODUCT
          </div>
          <div className="label_container">
            <label>Name</label> <input type="text" />
          </div>
          <div className="label_container_price">
            <label style={{ marginRight: "5px" }}>Price (₹)</label>{" "}
            <input style={{ width: "50px", marginRight: "5px" }} type="text" />
            <label style={{ marginRight: "5px" }}>Sale Price (₹)</label>{" "}
            <input style={{ width: "50px" }} type="text" />
          </div>
          <div className="label_container">
            <label>Category</label>{" "}
            <select className="select_category">
              <option value="food">Food</option>
              <option value="stationery">Stationery</option>
              <option value="electronics">Electonics</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          <div className="label_container">
            <label>Short Description</label> <input type="text" />
          </div>
          <div className="label_container">
            <label>Detailed Description</label> <input type="text" />
          </div>
          <div className="label_container">
            <label>Upload Main Image</label> <input type="file" />
          </div>
          <div className="label_container">
            <label>Upload additional image</label> <input type="file" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorProductUploadForm;
