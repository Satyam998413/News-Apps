
import React from 'react'


// export class NewsItem extends Component
const NewsItem=(props)=> {
    
    
    // render() {
        let {title,description,imgurl,newsUrl,author,date,source}=props;
        return (
            <div>
                <div className="card my-3">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"87%",zindex:"1"}}>
                        {source}
                       
                      </span>
                    <img src={!imgurl?"https://static01.nyt.com/images/2022/05/20/world/20ukraine-blog-header-10pm/20ukraine-blog-header-10pm-facebookJumbo.jpg":imgurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            
                            <p className="card-text">{description}</p>
                            <div className="d-flex justify-content-end">
                              

                                    <p className="card-text"><small className="text-muted">By <u><b>{!author?"unknown":author}..</b></u>On-<span className="badge bg-dark">{new Date(date).toGMTString()}</span></small></p>
                               
                            </div>
                            
                            <div className="my-2">
                                <a  rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>

                            </div>
                        </div>
                </div>
            </div>
        )
    }
// }

export default NewsItem