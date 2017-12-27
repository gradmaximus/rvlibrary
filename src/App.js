import React, { Component } from 'react';
import LogoBar from './assets/js/components/LogoBar';
import DiscoverSection from './assets/js/components/DiscoverSection';
import BookSimple from './assets/js/components/BookSimple';
import initState from './assets/data/initState';
import mockResourceData from './assets/data/mockResourceData';

class App extends Component {
  constructor() {
    super();
    this.handleSearchByString = this.handleSearchByString.bind(this);
    this.handleSearchByCategory = this.handleSearchByCategory.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
    this.fetchResources = this.fetchResourceData.bind(this);

    const initialState = Object.assign({}, initState);
    const resourceData = this.fetchResourceData();

    initialState.resources = resourceData.resources;

    const recommended = resourceData.recommended;
    const recentReviews = resourceData.recentReviews;
    
    initialState.recommendedResources = initialState.resources.filter(resource => (
      recommended.includes(resource.isbn))
    );

    initialState.recentReviewedResources = initialState.resources.filter(resource => (
      recentReviews.includes(resource.isbn))
    );

    this.state = initialState;
  }

  fetchResourceData() {
    // Temporarily returning mock json
    return mockResourceData;
  }

  handleSearchByString(event) {
    event.preventDefault();

    if (event.target.value.length === 0) {
      this.handleClearSearch();
      return;
    }

    const searchTerm = event.target.value.toLowerCase();

    const searchResults = this.state.resources.filter(resource =>
      resource.title.toLowerCase().indexOf(searchTerm) > -1 ||
      resource.creator.toLowerCase().indexOf(searchTerm) > -1);

    this.setState({
      searchResults,
      searchCategory: '',
      searchTerm,
      showSearch: true,
    });
  }

  handleSearchByCategory(event) {
    event.preventDefault();
    const searchCategory = event.target.text;
    const searchResults = searchCategory !== 'Browse All' ?
      this.state.resources.filter(resource => resource.collection === searchCategory) :
      this.state.resources;

    this.setState({
      searchResults,
      searchCategory,
      showSearch: true,
    });
  }

  handleClearSearch(event) {
    if (event) {
      event.preventDefault();
    }

    this.setState({
      searchResults: [],
      searchCategory: '',
      searchTerm: '',
      showSearch: false,
    });
  }

  render() {
    return (
      <div id="container">
        <LogoBar />
        <div className="header__wrapper">
          <header className="row header">
            <DiscoverSection
              clearSearch={this.handleClearSearch}
              search={this.handleSearchByString}
              searchTerm={this.state.searchTerm}
              showSearch={this.state.showSearch}
            />
          </header>
        </div>
        <div className="contentContainer row">
          <main className="small-12 medium-9 columns">
            {!this.state.showSearch ? (
              <div>
                <section className="columns  section section--welcome">
                  <h2 className="section__title">Welcome, Joe Library User!</h2>
                  <p className="section__text">Welcome to the very much still in development Curve Library software. Over the next few months, the Road to Hire and ITA students will be working to make this much more full featured. In the meantime, you may use the categories on the right to search our collections or you can search for individual items using the search bar above.</p>
                </section>
                <section className="columns large-12  section section--recommendations">
                  <h2 className="section__title">Recommended for You</h2>
                  {this.state.recommendedResources.map(resource =>
                    (<BookSimple
                      title={resource.title}
                      author={resource.creator}
                      description={resource.description}
                      imageRef={resource.imageRef}
                      key={resource.isbn}
                    />))}
                </section>
                <section className="columns  section section--reviews">
                  <h2 className="section__title">Recently Reviewed</h2>
                  {this.state.recentReviewedResources.map(resource => (
                    <BookSimple
                      title={resource.title}
                      author={resource.creator}
                      description={resource.description}
                      imageRef={resource.imageRef}
                      key={resource.isbn}
                    />
                  ))}
                </section>
              </div>
              ) : (
                <section className="columns section section--search-results">
                  <h2 className="section__title">Search Results</h2>
                  <p className="section__text">Your search for {this.state.searchCategory.length ? this.state.searchCategory : (this.state.searchTerm)} resulted in {this.state.searchResults.length} matches.</p>
                  {this.state.searchResults.map(resource =>
                  (<BookSimple
                    title={resource.title}
                    author={resource.creator}
                    description={resource.description}
                    imageRef={resource.imageRef}
                    key={resource.isbn}
                  />))}
                </section>
              )
            }
          </main>
          <aside className="small-12 medium-3 columns  sidenav">
            <h2 className="sidenav__title">Get Inspired</h2>
            <ul className="sidenav__list">
              <li><a href="/" className="sidenav__subtitle" onClick={this.handleSearchByCategory}>Browse All</a></li>
              <li><h3 className="sidenav__subtitle">Recommendations</h3>
                <ul>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Senior Leadership Team</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>RV Board Members</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Harvard Business Review</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Year of Books</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Bill Gates</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Forbes</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Adam Grant</a></li>
                </ul>
              </li>
              <li><h3 className="sidenav__subtitle">Inspirations</h3>
                <ul>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Jimi Hendrix</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Einstein</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Malala</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Da Vinci</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Dr. Seuss</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Louisa May Alcott</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Maya Angelou</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Nelson Mandela</a></li>
                </ul>
              </li>
              <li><h3 className="sidenav__subtitle">Professional Development</h3>
                <ul>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Business</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Communication</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Innovation</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Leadership</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Self-awareness</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Productivity</a></li>
                </ul>
              </li>
              <li><h3 className="sidenav__subtitle">Green Eggs &amp; Ham</h3>
                <ul>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>LifeHack</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Culture Fest</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>She Is</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Biography</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Fiction</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Miscellaneous</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Uncategorized</a></li>
                  <li className="sidenav__item"><a href="/" onClick={this.handleSearchByCategory}>Periodicals</a></li>
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
