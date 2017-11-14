import React from 'react';
import OptionsBox from './OptionsBox';

function Recommendation(props = "El Pooch of La Mancha") {
  return (
    <article className="row">
      <div className="bookcontainer small-6 columns noPadding">
        <img src="http://books.google.com/books/content?id=fdjqz0TPL2wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="book cover" className="recImage"/>
      </div>
      <div className="bookdetails small-6 columns noPadding">
        <h3>{props.title}</h3>
        <p className="cred">By <span className="author">{props.author}</span></p>
        <span className="rating">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-half-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </span>
      </div>
      <div className="columns noPadding">
        <p className="reviewText">Description coming soon. Fearful inexpedient fearful will joy philosophy. Battle war transvaluation eternal-return society madness eternal-return chaos right free morality merciful.</p>
      </div>
      <div className="columns noPadding">
        <OptionsBox />
      </div>
    </article>

  );
}

export default Recommendation;