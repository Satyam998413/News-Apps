
import React, { Component } from 'react'


export class NewsItem extends Component {
    
    
    render() {
        let {title,description,imgurl,newsUrl}=this.props;
        return (
            <div>
                <div className="card my-3">
                    <img src={!imgurl?"https://static01.nyt.com/images/2022/05/20/world/20ukraine-blog-header-10pm/20ukraine-blog-header-10pm-facebookJumbo.jpg":imgurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a  rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem