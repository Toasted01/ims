import { PropTypes } from "prop-types";

function Header(props) {
  return (
    <div>
      <h1>{props.h1}</h1>
      <p>{props.p}</p>
    </div>
  );
}

Header.defaultProps = {
  h1: "header",
  p: "desc"
}

Header.propTypes = {
  h1: PropTypes.string,
  p: PropTypes.string
}

export default Header;
