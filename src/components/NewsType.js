import React, {useEffect,useState,useCallback} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import Badge from 'react-bootstrap/Badge';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { Spinner } from 'react-bootstrap';


const NewsType=(props)=>{
  // console.log("Category prop:", props.category);
  const [results,setResults]=useState([]);
  const [loading,setLoading]=useState(true);
  //eslint-disable-next-line
  const [page,setPage]=useState(1);
  const [nextPage,setNextPage]=useState(null);
  //eslint-disable-next-line
  const [pageHistory,setPageHistory]=useState(["1"]);
  const [totalResults,setTotalResults]=useState(0);


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews=useCallback(async()=> {
    props.setProgress(10);
    const api = `https://newsdata.io/api/1/latest?apikey=${props.apiKey}&language=en&removeduplicate=1&category=${props.category}`;
    setLoading(true);
    
    let data = await fetch(api);
    let parsedData = await data.json();
    let results = parsedData.results;

    props.setProgress(70);
    setResults(results);
    setNextPage(parsedData.nextPage);
    setPage(1);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
    //eslint-disable-next-line
  },[props.apiKey, props.category,props.setProgress]); //dependency array

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    // if (prevProps.category !== props.category) {
      setLoading(true);
      updateNews();
      document.title = `${capitalizeFirstLetter(props.category)}- News Observer`;
    //}
    //eslint-disable-next-line
  },[props.category]);

  // handleNextClick = async () => {
  //   if (!nextPage) return;

  //   const history = [...pageHistory, nextPage];
  //   try {
  //     let api = `https://newsdata.io/api/1/latest?apikey=${props.apiKey}&language=en&removeduplicate=1&page=${nextPage}&category=${props.category}`;
  //     setLoading(true)
  //     let data = await fetch(api);
  //     let parsedData = await data.json();
  //     // let results = parsedData.results;
  //     const articles = Array.isArray(parsedData.results) ? parsedData.results : [];

  //     setState({
  //       results: articles,
  //       nextPage: parsedData.nextPage,
  //       page: page + 1,
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
  //   if (page <= 1 || pageHistory.length < 2) return;

  //   const history = [...pageHistory];
  //   // Remove current page token
  //   history.pop();
  //   // Get previous page token (before last)
  //   const prevPageToken = history[history.length - 1];
  //   try {
  //     let api = `https://newsdata.io/api/1/latest?apikey=${props.apiKey}&language=en&removeduplicate=1&page=${prevPageToken}&category=${props.category}`;
  //     setState({ loading: true });
  //     let data = await fetch(api);
  //     let parsedData = await data.json();
  //     // let results = parsedData.results;
  //     const articles = Array.isArray(parsedData.results) ? parsedData.results : [];

  //     setState({
  //       results: articles,
  //       nextPage: parsedData.nextPage,
  //       page: page - 1,
  //       pageHistory: history,
  //       loading: false

  //     });
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  //   catch (error) {
  //     console.error("Previous page fetch error:", error);
  //   }
  // };

  const fetchMoreData = async() => {
    // props.setProgress(10);
    const api = `https://newsdata.io/api/1/latest?apikey=${props.apiKey}&language=en&removeduplicate=1&category=${props.category}&page=${nextPage}`;
    setLoading(true)
    let data = await fetch(api);
    let parsedData = await data.json();
    let results = parsedData.results;

    setResults(prevResults=>prevResults.concat(results));
    setNextPage(parsedData.nextPage);
    setTotalResults(parsedData.totalResults);
    setLoading(false)
    // props.setProgress(100);
  };

    // let { title, description, imageurl, link } = props;
    return (
      <>
        <h2 className='text-center' style={{marginTop:'70px'}}>News Observer- Top {capitalizeFirstLetter(props.category==="top"?"general":props.category)} Headlines</h2>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={results.length}
          next={fetchMoreData}
          hasMore={results.length !== totalResults}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Aaj ke liye itna hi. Dhanyawaad!</b>
            </p>
          }>

          <div className="row">
            {results.map((element) => {
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
          <button type="button" className="btn btn-primary my-4 mx-2 btn-lg" disabled={page <= 1} onClick={handlePreviousClick}>&larr; Previous page</button>
          <button type="button" className="btn btn-primary my-4 mx-2 btn-lg" onClick={handleNextClick} disabled={!nextPage}>Next page &rarr;</button>
        </div>

        <div className="container">
          <Badge pill bg='success' text="light" className='mx-3 my-3 d-flex justify-content-center align-items-center' style={{ height: '25px', fontSize: '20px' }}> Page {page}/{Math.ceil(totalResults / 10)}</Badge>
        </div> */}

      </ >
    )
  
}

  NewsType.propTypes = {
    category: PropTypes.string,
  }

export default NewsType