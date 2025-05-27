import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
// import Badge from 'react-bootstrap/Badge';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { Spinner } from 'react-bootstrap';


export class News extends Component {
  static defaultProps = {
    category: 'top',
  }

  static propTypes = {
    category: PropTypes.string,
  }
  

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      loading: true,
      page: 1,
      nextPage: null,
      pageHistory: ["1"],
      totalResults: 0,
    }

  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  async updateNews() {
    this.props.setProgress(10);
    const api = `https://newsdata.io/api/1/latest?apikey=${this.props.apiKey}&language=en&removeduplicate=1&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(api);
    let parsedData = await data.json();
    let results = parsedData.results;

    this.setState(
      {
        results: results,
        nextPage: parsedData.nextPage,
        page: 1,
        totalResults: parsedData.totalResults,
        loading: false
      }
    );
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  };

  async componentDidUpdate(prevProps) {
    
    if (prevProps.category !== this.props.category) {
      this.setState({ loading: true });
      this.updateNews();
      document.title = `${this.capitalizeFirstLetter(this.props.category)}- News Observer`;
    }
  }

  // handleNextClick = async () => {
  //   if (!this.state.nextPage) return;

  //   const history = [...this.state.pageHistory, this.state.nextPage];
  //   try {
  //     let api = `https://newsdata.io/api/1/latest?apikey=${this.props.apiKey}&language=en&removeduplicate=1&page=${this.state.nextPage}&category=${this.props.category}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(api);
  //     let parsedData = await data.json();
  //     // let results = parsedData.results;
  //     const articles = Array.isArray(parsedData.results) ? parsedData.results : [];

  //     this.setState({
  //       results: articles,
  //       nextPage: parsedData.nextPage,
  //       page: this.state.page + 1,
  //       pageHistory: history,
  //       loading: false
  //     });

  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  //   catch (error) {
  //     console.error("Next page fetch error:", error);
  //   }
  // };

  // handlePreviousClick = async () => {
  //   if (this.state.page <= 1 || this.state.pageHistory.length < 2) return;

  //   const history = [...this.state.pageHistory];
  //   // Remove current page token
  //   history.pop();
  //   // Get previous page token (before last)
  //   const prevPageToken = history[history.length - 1];
  //   try {
  //     let api = `https://newsdata.io/api/1/latest?apikey=${this.props.apiKey}&language=en&removeduplicate=1&page=${prevPageToken}&category=${this.props.category}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(api);
  //     let parsedData = await data.json();
  //     // let results = parsedData.results;
  //     const articles = Array.isArray(parsedData.results) ? parsedData.results : [];

  //     this.setState({
  //       results: articles,
  //       nextPage: parsedData.nextPage,
  //       page: this.state.page - 1,
  //       pageHistory: history,
  //       loading: false

  //     });
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  //   catch (error) {
  //     console.error("Previous page fetch error:", error);
  //   }
  // };

  fetchMoreData = async() => {
    const api = `https://newsdata.io/api/1/latest?apikey=${this.props.apiKey}&language=en&removeduplicate=1&category=${this.props.category}&page=${this.state.nextPage}`;
    // this.setState({ loading: true });
    let data = await fetch(api);
    let parsedData = await data.json();
    let results = parsedData.results;

    this.setState(
      {
        results: this.state.results.concat(results),
        nextPage: parsedData.nextPage,
        totalResults: parsedData.totalResults,
        // loading: false
      }
    );
  };

  render() {

    // let { title, description, imageurl, link } = this.props;
    return (
      <>
      
        <h2 className='text-center'>News Observer- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.results.length}
          next={this.fetchMoreData}
          hasMore={this.state.results.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>

          <div className="row">
            {this.state.results.map((element) => {
              // console.log(element);
              return <div className="col md-3" key={element.article_id}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 90) : ""}
                  imageurl={element.image_url ? element.image_url : "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"}
                  link={element.link}
                  pubDate={element.pubDate}
                  source_name={element.source_name}
                  creator={element.creator ? element.creator : "Unknown"}
                />
              </div>
            })}
          </div>
        </InfiniteScroll>

        {/* <div className="container d-grid d-md-flex justify-content-md-center">
          <button type="button" className="btn btn-primary my-4 mx-2 btn-lg" disabled={this.state.page <= 1} onClick={this.handlePreviousClick}>&larr; Previous page</button>
          <button type="button" className="btn btn-primary my-4 mx-2 btn-lg" onClick={this.handleNextClick} disabled={!this.state.nextPage}>Next page &rarr;</button>
        </div>

        <div className="container">
          <Badge pill bg='success' text="light" className='mx-3 my-3 d-flex justify-content-center align-items-center' style={{ height: '25px', fontSize: '20px' }}> Page {this.state.page}/{Math.ceil(this.state.totalResults / 10)}</Badge>
        </div> */}

      </ >
    )
  }
}

export default News