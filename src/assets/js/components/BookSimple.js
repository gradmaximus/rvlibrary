import React from 'react';
import PropTypes from 'prop-types';
import OptionsBox from './OptionsBox';

const BookSimple = ({ title, author, imageRef }) => (
  <div className="columns large-6 large-offset-0 medium-10 medium-offset-1 small-12  book__wrapper">
    <article className="book">
      <div className="row book__half-top">
        <div className="book__image-wrapper small-6 columns">
          <img className="book__image" src={imageRef} alt="book cover" />
        </div>
        <div className="bookdetails small-6 columns">
          <h3 className="book__title">{title}</h3>
          <p className="book__author">{author}</p>
          <span className="rating">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star-half-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="row book__half-bottom">
        <OptionsBox />
      </div>
    </article>
  </div>
);

BookSimple.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageRef: PropTypes.string.isRequired,
};

export default BookSimple;
