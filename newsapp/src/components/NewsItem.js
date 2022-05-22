
import React, { Component } from 'react'


export class NewsItem extends Component {
    
    
    render() {
        let {title,description,imgurl,newsUrl,author,date,source}=this.props;
        return (
            <div>
                <div className="card my-3">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zindex:"1"}}>
                        {source}
                       
                      </span>
                    <img src={!imgurl?"https://static01.nyt.com/images/2022/05/20/world/20ukraine-blog-header-10pm/20ukraine-blog-header-10pm-facebookJumbo.jpg":imgurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            
                            <p className="card-text">{description}</p>
                            <div class="d-flex mx-2 justify-content-between">
                                <div className="w-50">

                                    <p className="card-text"><small class="text-muted">By <u><b>{!author?"unknown":author}</b></u>On<span class="badge bg-dark">{new Date(date).toGMTString()}</span></small></p>
                                </div>
                                <div className="w-30 my-3">
                                    <a  rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>

                                </div>
                            </div>
                            
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem