import { Component } from "react";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        onClick: PropTypes.func.isRequired 
      };


  constructor(props) {
    super(props);
  }

  render() {
    const {data, onClick} = this.props;
    return (
            <li onClick={(e) => {e.preventDefault(); onClick(data)}} key={data.id} className="ImageGalleryItem">
                    <img src={data.webformatURL} alt={data.user} className="ImageGalleryItem-image" />
                </li>
    );
  }
}

export default ImageGalleryItem;
