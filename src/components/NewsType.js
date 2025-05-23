import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    category: 'top',
  }

  static propTypes={
    category: PropTypes.string,
  }

  constructor() {
    super();

    this.state = {
      results: [],
      loading: true,
      page: 1,
      nextPage: null,
    }
  }

  async componentDidMount() {
    let api = `https://newsdata.io/api/1/latest?apikey=pub_880827ef8ff6ebbde268c8103dbac32e0a645&language=en&removeduplicate=1&category=${this.props.category}`;
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
  };

  async componentDidUpdate(prevProps){
    if (prevProps.category !== this.props.category) {
    this.setState({loading:true});
    let api = `https://newsdata.io/api/1/latest?apikey=pub_880827ef8ff6ebbde268c8103dbac32e0a645&language=en&removeduplicate=1&category=${this.props.category}`;
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
  }
  }

  handleNextClick = async () => {

    let api = `https://newsdata.io/api/1/latest?apikey=pub_880827ef8ff6ebbde268c8103dbac32e0a645&language=en&removeduplicate=1&page=${this.state.nextPage}&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(api);
    let parsedData = await data.json();
    let results = parsedData.results;

    this.setState({
      results: results,
      nextPage: parsedData.nextPage,
      page: this.state.page + 1,
      loading: false
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  handlePreviousClick = async () => {
    //   let api = `https://newsdata.io/api/1/latest?apikey=pub_880827ef8ff6ebbde268c8103dbac32e0a645&language=en&removeduplicate=1&page=${this.state.page - 1}&category=${this.props.category}`;
    // this.setState({ loading: true });
    //   let data = await fetch(api);
    //   let parsedData = await data.json();
    //   let results = parsedData.results;

    //   this.setState({
    //   results: results,
    //   nextPage: parsedData.nextPage,
    //   page: this.state.page - 1,
    //   loading: false
    // });
  }

  render() {

    // let { title, description, imageurl, link } = this.props;
    return (
      <div className='container'>
        <h2 className='text-center'>News Observer- Top Headlines</h2>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {this.state.results.map((element) => {
            return <div className="col md-3" key={element.article_id}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 90) : ""}
                imageurl={element.image_url ? element.image_url : "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"}
                link={element.link}
              />
            </div>
          })}

          <div className="container d-grid d-md-flex justify-content-md-center">
            <button type="button" className="btn btn-primary my-4 mx-2 btn-lg" disabled={this.state.page <= 1} onClick={this.handlePreviousClick}>&larr; Previous page</button>
            <button type="button" className="btn btn-primary my-4 mx-2 btn-lg" onClick={this.handleNextClick} disabled={!this.state.nextPage}>Next page &rarr;</button>
          </div>

        </div>
      </div>
    )
  }
}

export default News
