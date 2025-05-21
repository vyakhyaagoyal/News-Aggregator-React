import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description,imageurl,link } = this.props;
        return (
            
            <div className='my-2'>
                <div className="card mx-2 my-2" style={{ width: "18rem" }}>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{title}...</h4>
                        <p className="card-text">{description}...</p>
                        <a href={link} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
