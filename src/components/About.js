import React from 'react'

function About() {
  return (
    <div className="container my-3">
      <div className="row left-0">
        {/* Main content */}
        <div className="col-12 col-lg-8">
          <h1
            className="mt-5 text-center"
            style={{
              fontFamily: "Playfair Display",
              fontOpticalSizing: 'auto',
              fontWeight: 700,
              fontStyle: 'normal'
            }}
          >
            About
          </h1>
          <img
            src='favicon.ico'
            alt='photo'
            className="img-fluid d-block mx-auto my-3"
            style={{ maxWidth: '150px', height: 'auto' }}
          />
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
              height: '60px',
              marginBottom: '20px'
            }}
            className="mx-auto"
          >
            <img
              src="Screenshot 2025-05-31 233012.png"
              alt="chalk highlighter"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1
              }}
            />
            <h2
              style={{
                position: 'relative',
                zIndex: 2,
                color: 'white',
                fontFamily: "Playfair Display",
                fontOpticalSizing: 'auto',
                fontWeight: 700,
                fontStyle: 'normal',
                margin: 0,
                padding: '10px',
                whiteSpace: 'nowrap',
                fontSize: '1.9 rem',
                overflowX: 'auto'
              }}
              className="text-center"
            >
              👋Hi, I'm Vyakhya Goyal
            </h2>
          </div>
          <p
            style={{
              fontFamily: "Playfair Display",
              fontOpticalSizing: 'auto',
              fontWeight: 500,
              fontStyle: 'normal'
            }}
          >
            I'm a first year student with a passion for building practical tech solutions. I work with programming languages like C, C# and Java, along with database management using SQL Server. In web development, I am proficient in HTML, CSS, JavaScript, ReactJS and Bootstrap while currently expanding my skills with NodeJS.

            I've developed projects including a Supermarket Management System, Currency Converter, an OpenCV based Calculator. I am always open to new projects and learning more about C# and OpenCV. I am also skilled in Competitive Programming and currently diving into AI and blockchain.
          </p>
          <h3>Let's connect</h3>
          <h5 style={{ color: 'red', fontFamily: 'monospace', wordBreak: 'break-all' }}>
            Github: https://github.com/vyakhyaagoyal<br />
            LinkedIn: www.linkedin.com/in/vyakhyaagoyal<br />
            Instagram: vyakhyaagoyal<br />
            X: https://x.com/vyakhyaagoyal
          </h5>
        </div>

        {/* Fixed image on right for large screens only */}
        <div
          className="d-none d-lg-block col-lg-4"
          style={{
            position: 'fixed',
            right: 0,
            top: "110px",
            height: "300px",
            width: "350px",
            marginRight: '20px',
            zIndex: 100
          }}
        >
          <img
            src="sample_photo.avif"
            alt="photo"
            className="img-fluid rounded"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <p className="text-center small">Don't judge this is a sample image :)</p>
        </div>
      </div>
    </div>
  )
}

export default About
