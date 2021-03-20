import { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Loader from "../Loader";

const API_KEY = "19314898-a321ad0327b9224b8439f7dcd";
const BASE_URL = "https://pixabay.com/api";

class ImageGallery extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
    onItemClicked: PropTypes.func.isRequired 
  };

  constructor(props) {
    super(props);

    this.handleClickLoadMore = this.handleClickLoadMore.bind(this);
    console.log("Constructor " + props.data);
    this.state = {
      photos: [],
      page: 1,
      isLoading: false,
      search: props.data,
    };
  }

  handleClickLoadMore() {
    if (this.state.search.length > 0) {
      this.setState(
        (prevState) => {
          return { page: prevState.page + 1 ,
            isLoading: true};
        },
        () => {
          axios
            .get(
              `${BASE_URL}/?q=${this.state.search}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
            )
            .then((response) => {
              console.log(response.data.hits);
              this.setState({
                photos: this.state.photos.concat(response.data.hits),
                isLoading: false
              });
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }).catch(() => {this.setState({ photos: [],
                isLoading: false });});
        }
      );
    }
  }

  componentDidMount() {
    this.loadPhotos();
  }

  componentDidUpdate(prevState) {
    if (prevState.data !== this.props.data) {
      this.setState(
        () => {
          return { search: this.props.data, page: 1 };
        },
        () => {
          this.loadPhotos();
        }
      );
    }
    console.log(this.props.data);
  }

  loadPhotos() {
    if (this.state.search.length > 0) {
        this.setState(() => { return {isLoading: true, photos: [] }}, () => {axios
            .get(
              `${BASE_URL}/?q=${this.state.search}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
            )
            .then((response) => {
              console.log(response.data.hits);
              this.setState({ photos: response.data.hits,
                isLoading: false });
            }).catch(() => {this.setState({ photos: [],
                isLoading: false });});});
      
    }
  }

  render() {
    const items = Object.values(this.state.photos);

    return (
      <div>
        <ul className="ImageGallery">
          {items.map((item) => (
            <ImageGalleryItem key={item.id} data={item} onClick={this.props.onItemClicked} />
          ))}
        </ul>
        {items.length > 0 && <Button onClick={this.handleClickLoadMore} />}
        <Loader
            data={this.state.isLoading}
          />
      </div>
    );
  }
}

export default ImageGallery;
