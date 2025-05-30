// import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner=()=>{
        return (
            <div className='text-center'>
                <img src={loading} alt="Loading..." style={{width: '100px', height: '80px'}}/>
            </div>
        )
    
}

export default Spinner
