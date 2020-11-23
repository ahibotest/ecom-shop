import "./Products.css";
import EnhancedTable from "../component/EnhancedTable";
import VendorProductUploadForm from "../component/VendorProductUploadForm";
import { useState } from "react";

function Products() {
  const [showFormModal, setShowFormModal] = useState(false);

  const handleClick = () => {
    setShowFormModal(true);
  };

  return (
    <div className="products_container">
      <button onClick={handleClick} className="add_product_btn">
        <svg
          style={{ marginRight: "10px" }}
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          className="bi bi-plus-circle-fill"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
          />
        </svg>
        Add Product
      </button>

      <div className="table_container">
        <EnhancedTable />

        {showFormModal && (
          <VendorProductUploadForm
            setShowFormModal={setShowFormModal}
            className="product_upload"
          />
        )}
      </div>
    </div>
  );
}

export default Products;
