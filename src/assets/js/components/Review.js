import React from 'react';
import OptionsBox from './OptionsBox';

function Review() {
  return (
    <div className="columns large-6 large-offset-0 medium-10 medium-offset-1 small-12  book__wrapper">
      <article className="book">
          <div className="row book__half-top">
            <div className="book__image-wrapper small-6 columns">
              <img className="book__image" src="http://books.google.com/books/content?id=fdjqz0TPL2wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="book cover" />
            </div>
            <div className="small-6 columns">
              <h3 className="book__title">El Pooch of La Mancha</h3>
              <p className="book__author">Alex Nelson</p>
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
            <p className="book__description">Description coming soon. Fearful inexpedient fearful will joy philosophy. Battle war transvaluation eternal-return society madness eternal-return chaos right free morality merciful.</p>
            <OptionsBox />
          </div>
      </article>
    </div>
  );
}



export default Review;
