import { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired 
      };

  constructor(props) {
    super(props);
  }

  render() {
    const {onClick} = this.props;
    return (
      <button onClick={onClick} type="button" className="Button ButtonPosition">
        Load more
      </button>
    );
  }
}

export default Button;
