import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel w-full h-[400px] md:h-[600px] lg:h-[800px] mt-1 relative">
    {/* Slide 1 */}
    <div id="slide1" className={`carousel-item relative w-full h-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
        <div
            className="hero h-full w-full"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/ch0BBxm8/js-44.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    </div>

    {/* Slide 2 */}
    <div id="slide2" className={`carousel-item relative w-full h-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
        <div
            className="hero h-full w-full"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/8g2KPcby/MNP-17.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    </div>

    {/* Slide 3 */}
    <div id="slide3" className={`carousel-item relative w-full h-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
        <div
            className="hero h-full w-full"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/0yXZR4gJ/MNP-30.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <button className="btn btn-primary">Start Now</button>
                </div>
            </div>
        </div>
    </div>

    {/* Slide 4 */}
    <div id="slide4" className={`carousel-item relative w-full h-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
        <div
            className="hero h-full w-full"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/8g2KPcby/MNP-17.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <button className="btn btn-primary">Get Inspired</button>
                </div>
            </div>
        </div>
    </div>

    {/* Navigation Buttons */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
            className="btn btn-circle"
            onClick={() => setCurrentSlide(currentSlide === 1 ? totalSlides : currentSlide - 1)}>
            ❮
        </button>
        <button
            className="btn btn-circle"
            onClick={() => setCurrentSlide((currentSlide % totalSlides) + 1)}>
            ❯
        </button>
    </div>
</div>
    );
};

export default Carousel;