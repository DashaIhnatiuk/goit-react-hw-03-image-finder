import { Component } from "react";
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Modal from './Components/Modal';

class App extends Component {
  constructor() {
    super();
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.handleItemClicked = this.handleItemClicked.bind(this);
    this.handleItemClose = this.handleItemClose.bind(this);
    this.state = {
      search: "", modal: false
    };

    this.item = {};
  }

  handleItemClose(){
    console.log("CLOSE");

    this.item = {};
    this.setState({
      modal: false
    });
  }

  handleOnSearch(value){
    this.setState({
      search: value
    });
  }

  handleItemClicked(value){
    console.log(value);
    this.item = value;
    this.setState({
      modal: true
    });
  }

  render() {
    return (
      <div>
        <Searchbar onSearch={this.handleOnSearch}/>
        <ImageGallery data={this.state.search} onItemClicked={this.handleItemClicked}/>
        {this.state.modal && <Modal data={this.item} onClose={this.handleItemClose}/>}
      </div>
    );
  }
}

export default App;
