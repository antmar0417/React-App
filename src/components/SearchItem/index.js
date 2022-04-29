import React from "react";
import PropTypes from "prop-types";
import playIcon from "../../assets/images/play.png";
import "./searchItem.css";

const SearchItem = ({ image, title, album, year, handleButtonClick }) => {
  return (
    <div className="search-item">
      <div className="search-item__image">
        <img src={image} alt="album-cover" />
      </div>
      <div className="search-item__text">
        <h3>{title}</h3>
        <p>{album}</p>
        <p>{year}</p>
      </div>
      <button className="search-item__button" onClick={handleButtonClick}>
        <img src={playIcon} alt="play" />
      </button>
    </div>
  );
};

SearchItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  album: PropTypes.string,
  year: PropTypes.string,
  handleButtonClick: PropTypes.func,
};

export default SearchItem;
