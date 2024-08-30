import React from "react";
import "./testimonials.css"; // Assuming you'll move the relevant CSS to this file

const Testimonials = () => {
  return (
    <section class="testimonials-section">
        <h2 class="section-title">Customer testimonials</h2>
        <p class="section-subtitle">Hear what our customers have to say about us</p>
    
        <div class="testimonials-container">
            <div class="testimonial-card">
                <div class="rating">
                    ★★★★★
                </div>
                <p class="testimonial-text">"This goes hard."</p>
                <div class="testimonial-author">
                    <img src="images/placeholder.png" alt="Author Image" class="author-img"></img>
                    <div class="author-info">
                        <p class="author-name">Name Surname</p>
                        <p class="author-position">Position, Company name</p>
                    </div>
                </div>
            </div>
    
            <div class="testimonial-card">
                <div class="rating">
                    ★★★★★
                </div>
                <p class="testimonial-text">"Awesome sauce."</p>
                <div class="testimonial-author">
                    <img src="images/placeholder.png" alt="Author Image" class="author-img"></img>
                    <div class="author-info">
                        <p class="author-name">Name Surname</p>
                        <p class="author-position">Position, Company name</p>
                    </div>
                </div>
            </div>
    
            <div class="testimonial-card">
                <div class="rating">
                    ★★★★★
                </div>
                <p class="testimonial-text">"Nice Product."</p>
                <div class="testimonial-author">
                    <img src="images/placeholder.png" alt="Author Image" class="author-img"></img>
                    <div class="author-info">
                        <p class="author-name">Name Surname</p>
                        <p class="author-position">Position, Company name</p>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="testimonials-navigation">
            <span class="nav-button">&#9664;</span>
            <span class="nav-button">&#9654;</span>
        </div>
    </section>
  );
};

export default Testimonials;