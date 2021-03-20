import { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired 
      };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.value = "";
  }

    handleClick(e){
        e.preventDefault();
        this.props.onSearch(this.value.value);
    }

  render() {
    const {onSearch} = this.props;
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button onClick={(e) => {this.handleClick(e)}} type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            ref={(c) => this.value = c}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
