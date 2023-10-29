import ExpenseTable from "./ExpenseTable";
import IncomeTable from "./IncomeTable";

const Table = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-row gap-2">
        <IncomeTable />
        <ExpenseTable />
      </div>
    </>
  );
};

export default Table;
