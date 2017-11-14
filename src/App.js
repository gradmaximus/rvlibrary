import React, { Component } from 'react';
import LogoBar from './LogoBar';
import DiscoverSection from './DiscoverSection';
import Recommendation from './Recommendation';
import Review from './Review';
import resources from './data/resources';
import initState from './data/initState';

class App extends Component {

  constructor() {
    super();
    this.handleSearchByString = this.handleSearchByString.bind(this);
    this.handleSearchByCategory = this.handleSearchByCategory.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);

    const recommendedBooks = resources.filter( function(resource) {
      return resource.recommended === 1;
    });
    let initObj = Object.assign({}, initState);
    initObj.recommendedBooks = recommendedBooks;
    initObj.resources = resources;
    this.state = initObj;
  }

  handleSearchByString(event) {
    event.preventDefault();
    const searchTerm = event.target.value.toLowerCase();

    let resources = [...this.state.resources];
    const searchResults = resources.filter( function(resource) {
    return resource.title.toLowerCase().indexOf(searchTerm) > -1 ||
    resource.creator.toLowerCase().indexOf(searchTerm) > -1 ||
    resource.collection.toLowerCase().indexOf(searchTerm) > -1 ;

  });


    this.setState({
      searchResults,
      searchTerm,
      "showSearch": true
    });
  }

  handleSearchByCategory(event) {
    event.preventDefault();
    const searchCategory = event.target.text;
    let resources = [...this.state.resources];
    const searchResults = searchCategory !== 'Browse All' ?
      resources.filter( function(resource) { return resource.collection === searchCategory; }) :
      resources;

    this.setState({
      searchResults,
      searchCategory,
      "showSearch": true
    });
  }

  handleClearSearch() {
    this.setState({
      "searchResults": [],
      "searchCategory": "",
      "searchTerm": "",
      "showSearch": false
    });
  }

  render() {
    return (
      <div id="container">
        <LogoBar />
        <div className="headerContainer">
          <header className="discoverHeader row">
            <DiscoverSection
              clearSearch={this.handleClearSearch}
              search={this.handleSearchByString}
              searchTerm={this.state.searchTerm}
            />
          </header>
        </div>
        <div className="contentContainer row">
          <main className="small-12 medium-9 columns">
            { !this.state.showSearch ? (
              <div>
                <section className="welcomeSection columns">
                  <h2 className="welcome">Welcome, Joe Library User!</h2>
                  <p>Welcome to the very much still in development Curve Library software. Over the next few months, the Road to Hire and ITA students will be working to make this much more full featured. In the meantime, you may use the categories on the right to search our collections or you can search for individual items using the search bar above.</p>
                </section>
                <section className="recommendations columns">
                  <h2 className="subheader"><small>Recommended for you</small></h2>
                    { this.state.recommendedBooks.map(function(resource, i) {
                      return (
                        <Recommendation
                          title={resource.title}
                          author={resource.creator}
                          key={`recommendResult${i}`}
                        />
                      );

                    }, this)
                  }

                </section>
                <section className="reviews columns">
                  <h2 className="subheader"><small>Recent Reviews</small></h2>
                    <Review />
                    <Review />
                    <Review />
                </section>
              </div>


              ) : (
                <section className="searchResults columns">
                  <h2 className="subheader"><small>Search Results</small></h2>
                    <p className="searchTerm">Your search for "{this.state.searchCategory.length ? this.state.searchCategory : ( this.state.searchTerm )}" resulted in {this.state.searchResults.length} results.</p>
                    { this.state.searchResults.map(function(resource, i) {
                      return (
                        <Recommendation
                          title={resource.title}
                          author={resource.creator}
                          key={`searchResult${i}`}
                        />
                      );

                    }, this)
                  }
                </section>
              )
            }

          </main>
          <aside className="small-12 medium-3 columns">
            <h2 className="getInspired">Get Inspired</h2>
            <ul className="collectionList">
              <li><a href="/" className="collectionGroup" onClick={this.handleSearchByCategory}>Browse All</a></li>
              <li><a href="/" className="collectionGroup">Recommendations</a>
                <ul>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Senior Leadership Team</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>RV Board Members</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Harvard Business Review</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Year of Books</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Bill Gates</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Forbes</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Adam Grant</a></li>
                </ul>
              </li>
              <li><a href="/" className="collectionGroup">Inspirations</a>
                <ul>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Jimi Hendrix</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Einstein</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Malala</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Da Vinci</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Dr. Seuss</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Louisa May Alcott</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Maya Angelou</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Nelson Mandela</a></li>
                </ul>
              </li>
              <li><a href="/" className="collectionGroup">Professional Development</a>
                <ul>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Business</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Communication</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Innovation</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Leadership</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Self-awareness</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Productivity</a></li>
                </ul>
              </li>
              <li><a href="/" className="collectionGroup">Green Eggs &amp; Ham</a>
                <ul>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>LifeHack</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Culture Fest</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>She Is</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Biography</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Fiction</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Miscellaneous</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Uncategorized</a></li>
                  <li><a href="/" className="collectionLinks" onClick={this.handleSearchByCategory}>Periodicals</a></li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default App;
