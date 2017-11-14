import React from 'react';

function DiscoverSection(props) {

  return (
    <section className="discoverSection column">
      <div className="discoverBox">
        <h2>Discover</h2>
        <form className="searchbox">
          <div className="row">
            <div className="small-8 small-centered columns">
              <div className="row collapse postfix-radius">
                <div className="small-11 columns">
                  <input
                    type="text"
                    id="searchInput"
                    value={props.searchTerm}
                    onChange={props.search}
                    placeholder="What are you looking for?"
                  />
                </div>
                { props.searchTerm.length === 0 ? (
                  <div className="small-1 columns">
                    <label htmlFor="searchInput" className="postfix searchLabel">Search</label>
                  </div>
                ) : (
                  <div className="small-1 columns">
                    <button className="button-secondary tiny searchResetBtn" onClick={props.clearSearch}>Reset</button>
                  </div>
                )
              }
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default DiscoverSection;


