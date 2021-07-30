import React from 'react';
import Intro from '../intro/intro';
import About from '../about/about';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Intro titulo="María Gimena Binaghi" />
            <About />
        </div>
    )
}
export default Home; 