import { useState } from "react";
import heroSlides from "./heroSlidesdata";
function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

  
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const showSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="hero">
            <div className="hero-slider">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${currentSlide === index ? 'active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${slide.imageUrl}')`
                        }}
                    >
                        <div className="container">
                            <div className="hero-content">
                                <span className="hero-subtitle">{slide.subtitle}</span>
                                <h1 className="hero-title">{slide.title}</h1>
                                <p className="hero-text">{slide.text}</p>
                                <a href={slide.btnLink} className="hero-btn">{slide.btnText}</a>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="slider-controls">
                    <button className="slider-prev" onClick={prevSlide}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="slider-next" onClick={nextSlide}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>

                <div className="slider-dots">
                    {heroSlides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => showSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
