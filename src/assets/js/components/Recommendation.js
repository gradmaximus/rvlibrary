import React from 'react';
import OptionsBox from './OptionsBox';
import placeholderBook from '../../img/placeholderBook.jpg';

function book(props = "El Pooch of La Mancha") {
  return (
    <div className="columns large-6 large-offset-0 medium-10 medium-offset-1 small-12  book__wrapper">
      <article className="book">
          <div className="row book__half-top">
            <div className="book__image-wrapper small-6 columns">
              <img className="book__image" src={placeholderBook} alt="book cover" />
            </div>
            <div className="bookdetails small-6 columns">
              <h3 className="book__title">{props.title}</h3>
              <p className="book__author">{props.author}</p>
              <span className="rating">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div className="row book__half-bottom">
            <p className="reviewText  book__description">Description coming soon. </p>
            <OptionsBox />
          </div>
      </article>
    </div>

  );
}

export default book;
