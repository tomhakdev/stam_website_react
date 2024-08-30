import React from 'react';
import './demovideo.css';

const demovideo = () => {
    return (
        <section class="demo-video-section">
            <h2>Demo Video</h2>
            <p>Below is a short video demonstrating the product and how the games work</p>
            <button class="learn-more-btn">Learn more</button>
            <div class="video-placeholder">
                <img src="path-to-your-placeholder-image" alt="Video placeholder"></img>
            </div>
        </section>
    );
};

export default demovideo;