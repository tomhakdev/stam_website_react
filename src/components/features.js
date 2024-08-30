import React from 'react';
import './features.css';

const features = () => {
    return (
        <section class="features">
        <div class="features-container">
            <div class="image-placeholder">
                <img src="/STAM_Logo_Text.png" alt="Placeholder Image"></img>
            </div>
            <div class="features-list">
                <div class="feature-item">
                    <img src="/STAM_Logo.png" alt="Feature Icon" class="feature-icon"></img>
                    <div class="feature-text">
                        <h3>Cutting-Edge AI Technology</h3>
                        <p>Our AI technology has a 55% accuracy rating!</p>
                    </div>
                </div>
                <div class="feature-item">
                    <img src="/STAM_Logo.png" alt="Feature Icon" class="feature-icon"></img>
                    <div class="feature-text">
                        <h3>Supports 8 types of speech impediments</h3>
                        <p>We support 8 different types of speech impediments</p>
                    </div>
                </div>
                <div class="feature-item">
                    <img src="/STAM_Logo.png" alt="Feature Icon" class="feature-icon"></img>
                    <div class="feature-text">
                        <h3>4 Different Games to Explore</h3>
                        <p>Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default features;