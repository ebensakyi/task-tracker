import PropTypes from "prop-types";
import Button from "./Button";

const Header = () => {
  const onClick = () => {
    console.log("Clicked");
  };
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
