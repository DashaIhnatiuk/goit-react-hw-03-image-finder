import { Component } from "react";
import PropTypes from "prop-types";
import LoaderLib from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Loader extends Component {
    static propTypes = {
        data: PropTypes.bool.isRequired,
      };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="Loader">
        <LoaderLib
        visible={this.props.data}
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0}
      />
      </div>
    );
  }
}

export default Loader;
