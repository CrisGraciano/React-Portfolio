import React from 'react';

function About () {

    return (
        <section className="my-5" >
            <h1 id="about">About Me</h1>
            <div className="my-2">
                <img
                src={require('../../assets/images/photoofme.JPG')}
                alt='me'
                className='photo'
                />
            <p>
              My name is Cristobal Graciano and I live in San Antonio, Tx. I am currently a student in a Coding Bootcamp and am excited to learn Development and Software Engineering! This is my Portfolio made with React.js and has some of my Projects I have worked on.
            </p>
            </div>
        </section>
    )
}

export default About;