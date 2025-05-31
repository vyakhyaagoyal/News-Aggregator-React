import React, { useEffect, useState } from 'react'
// import './public/favicon.ico'
// import favicon from '../public/favicon.ico';
import { useNavigate } from 'react-router-dom';

export default function LandingPage({ onFinish }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            // setShow(false);
            // navigate('/');
            if (onFinish) {
                onFinish();
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <>
            <div
                className='landing-page position-relative w-100 vh-100 overflow-hidden d-flex justify-content-center align-items-center'
            >
                {/* Background image */}
                <img
                    src='whatsapp-image-2019-11-24-at-16-1574593427.jpeg'
                    alt="Background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1,
                    }}
                />
                {/* Centered favicon */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src="/favicon.ico"
                        alt="Favicon"
                        style={{
                            height: '100px',
                            width: '100px',
                            borderRadius: '50%',
                            boxShadow: '0 0 16px rgba(0,0,0,0.2)',
                        }}
                    />
                </div>
                {/* Bottom centered text */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 30,
                        left: 0,
                        width: '100%',
                        textAlign: 'center',
                        zIndex: 3,
                    }}
                >
                    <h4 style={{ margin: 0, color: '#fff', textShadow: '0 0 8px #000' }}>Welcome to News Observer!</h4>
                </div>
            </div>
        </>
    );
}
