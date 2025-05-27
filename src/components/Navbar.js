import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark" style={{marginBottom:'10px'}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News Observer</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"></span> */}
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                            <div className="navbar-nav" >
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <li className='nav-item dropdown' data-bs-theme="dark">
                                    <Link className="nav-link dropdown-toggle active" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</Link>
                                    <ul className="dropdown-menu bg-dark navbar-dark" aria-labelledby="dropdownMenuButtonDark">
                                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                    </ul>
                                </li>

                                <Link className="nav-link active" to="/">About</Link>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
