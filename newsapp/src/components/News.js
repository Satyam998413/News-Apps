
import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner'
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  // for class based to convert function based
  // static defaultProps = {
  //   country: 'in',
  //   pageSize: 9,
  //   category: 'sports'
  // }
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // }
  capitalizeFirstLetter = (string) => {
    let result = string.toLocaleUpperCase();
    return result
  }

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,

      totalResults: 0,

    }




    document.title = `NewsCremen-${this.capitalizeFirstLetter(this.props.category)}`;
  };


  async updateNews() {
    // this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikeys}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    // this.props.setProgress(30);
    let data = await fetch(url);
    // this.props.setProgress(70);
    let parsedData = await data.json();


    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, });
    // this.props.setProgress(100);

  }

  // useEffect(() => {
  //   return () => {
  //     document.title = `NewsCremen-${this.capitalizeFirstLetter(this.props.category)}`;
 
  //     this.updateNews();

  //   };
  // }, [])

  async componentDidMount() {

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d54a6b242e904f7da0507cf3ef4edc49&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();


    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    this.updateNews();


  }


  handlePrevClick = async () => {


    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d54a6b242e904f7da0507cf3ef4edc49&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

    // let data =await fetch(url);
    //   let parsedData=await data.json();

    //   this.setState({articles:parsedData.articles})
    // this.setState({
    //   page:this.state.page-1,
    //   articles:parsedData.articles,
    //   loading:false
    // })


    this.setState({ page: this.state.page - 1 });

    this.updateNews();





  }
  handleNextClick = async () => {

    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d54a6b242e904f7da0507cf3ef4edc49&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    //   let parsedData=await data.json();

    //   this.setState({articles:parsedData.articles})
    // this.setState({
    //   page:this.state.page+1,
    //   articles:parsedData.articles,
    //   loading:false
    // })


    // }
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikeys}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();


    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false, })

  }
  fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikeys}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedData = await data.json();


    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false, });

  };

  render() {

    return (
      <>



        <h1 className="text-center" style={{marginTop:'80px'}}><u>NewsCremen-Top {this.capitalizeFirstLetter(this.props.category)} HeadLines </u></h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />} >
          <div className='container my-3'>
            <div className="row">
              {/* {!this.state.loading &&  */}

              {this.state.articles.map((element) => {
                return <div className="col-md-3" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice((0, 45)) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark btn-sm" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark btn-sm" onClick={this.handleNextClick}>Next &rarr;</button>
          </div> */}

      </>
    )
  }
}


News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'sports'
}
 News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News