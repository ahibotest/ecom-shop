import "./orders.css";
import EnhancedTable from "../component/EnhancedTable";

function orders() {
  return (
    <div className="container">
      <h1 className="title">Orders</h1>
      <div className="row">
        <EnhancedTable />
      </div>
    </div>
  );
}

export default orders;
