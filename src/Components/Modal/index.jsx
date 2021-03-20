import { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        onClose: PropTypes.func.isRequired 
      };
  constructor(props) {
    super(props);
  }

  render() {
    const {data, onClose} = this.props;
    return (
      <div onClick={onClose} className="Overlay">
        <div className="Modal">
          <img src={data.largeImageURL} alt={data.user} />
        </div>
      </div>
    );
  }
}

export default Modal;
