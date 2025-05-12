

function Testimonials() {

    return (
        <>
            <section className="testimonials">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Our Customers Say</h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="testimonial-text">"I absolutely love my new headphones! The sound quality is amazing and they're so comfortable to wear for long periods."</p>
                            <div className="testimonial-author">
                                <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Sarah J." />
                                <div className="author-info">
                                    <h4>Sarah J.</h4>
                                    <span>Verified Buyer</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="testimonial-text">"The shipping was incredibly fast and the product exceeded my expectations. Will definitely shop here again!"</p>
                            <div className="testimonial-author">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael T." />
                                <div className="author-info">
                                    <h4>Michael T.</h4>
                                    <span>Verified Buyer</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <p className="testimonial-text">"Great customer service! They helped me choose the perfect gift for my husband and even included a nice handwritten note."</p>
                            <div className="testimonial-author">
                                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Emily R." />
                                <div className="author-info">
                                    <h4>Emily R.</h4>
                                    <span>Verified Buyer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Testimonials