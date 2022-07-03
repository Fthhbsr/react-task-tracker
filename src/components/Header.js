// import Button from "./Button";

const Header = ({ handleTaskBarClick, showHide }) => {
  return (
    <div className="text-center">
      <h1 className="text-center text-dark">TASK TRACKER</h1>
      <button className="btn btn-danger" onClick={handleTaskBarClick}>
        {showHide ? "Close Add Task Bar" : "Show Add Task Bar"}
      </button>
      {/* <Button /> */}
    </div>
  );
};

export default Header;
