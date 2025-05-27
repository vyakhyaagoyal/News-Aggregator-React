import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, link, pubDate, source_name, creator } = this.props;
        return (

            <div className='my-2 d-flex justify-content-center'>
                <div className="card mx-2 my-2" style={{ width: "20rem" }}>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'right',
                        right: 0,
                        position: 'absolute'
                    }}>
                        <span className='badge rounded-pill bg-success'>Source: {source_name}</span>
                    </div>

                    <img src={imageurl} className="card-img-top" alt="news" style={{ height: "150px", width: "100%", objectFit: "cover" }} />
                    <div className="card-body">
                        <h4 className="card-title">{title}...</h4>
                        <p className="card-text">{description}...</p>
                        <p className='card-details text-danger'>{new Date(pubDate).toUTCString()} | Creator: {creator}</p>
                        <a href={link} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
