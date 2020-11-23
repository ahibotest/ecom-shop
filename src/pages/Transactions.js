import "./Transactions.css";
import EnhancedTable from "../component/EnhancedTable";
function Transactions() {
  return (
    <div className="transaction_container">
      <div className="transaction_table_container">
        <EnhancedTable />
      </div>
    </div>
  );
}

export default Transactions;
