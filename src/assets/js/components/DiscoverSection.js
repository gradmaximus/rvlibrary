import React from 'react';
import PropTypes from 'prop-types';

const preventDefault = (e) => {
  e.preventDefault();
};

const DiscoverSection = ({ searchTerm, search, clearSearch }) => {
  return (
    <section className="columns  discover">
      <h2 className="discover__title">Discover</h2>
      <form className="discover__form">
        <div className="row">
          <div className="small-8 small-centered columns">
            <div className="row collapse">
              <div className="small-11 columns">
                <input
                  type="text"
                  id="searchInput"
                  className="discover__input"
                  value={searchTerm}
                  onChange={search}
                  placeholder="What are you looking for?"
                />
              </div>
              { searchTerm.length === 0 ? (
                <div className="small-1 columns">
                  <button
                    htmlFor="searchInput"
                    className="discover__button discover__button-search"
                    onClick={preventDefault}
                  >Search
                  </button>
                </div>
              ) : (
                <div className="small-1 columns">
                  <button
                    className="discover__button discover__button-reset"
                    onClick={clearSearch}
                  >Reset
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

DiscoverSection.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

export default DiscoverSection;
