import React from 'react';

function DiscoverSection(props) {

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
                  value={props.searchTerm}
                  onChange={props.search}
                  placeholder="What are you looking for?"
                />
              </div>
              { props.searchTerm.length === 0 ? (
                <div className="small-1 columns">
                  <button
                    htmlFor="searchInput"
                    className="discover__button discover__button-search"
                    onClick={ (e) => { e.preventDefault(); }}
                  >Search</button>
                </div>
              ) : (
                <div className="small-1 columns">
                  <button
                    className="discover__button discover__button-reset"
                    onClick={props.clearSearch}
                  >Reset</button>
                </div>
              )
            }
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default DiscoverSection;
