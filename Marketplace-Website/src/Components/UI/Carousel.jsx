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
        <div className="carousel w-full h-80 mt-5">
            {/* Slide 1 */}
            <div id="slide1" className={`carousel-item relative w-full h-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                <div
                    className="hero h-full"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-3xl font-bold">Welcome to Slide 1</h1>
                            <p className="mb-4">
                                Experience the beauty of nature with this amazing scenery. Slide through to explore more.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className={`carousel-item relative w-full h-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
                <div
                    className="hero h-full"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-3xl font-bold">Explore Slide 2</h1>
                            <p className="mb-4">
                                Discover the vibrant cityscapes and cultural richness. Take your adventure to the next level.
                            </p>
                            <button className="btn btn-primary">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 3 */}
            <div id="slide3" className={`carousel-item relative w-full h-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
                <div
                    className="hero h-full"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-3xl font-bold">Adventure Awaits on Slide 3</h1>
                            <p className="mb-4">
                                Let your adventurous spirit soar with this thrilling experience. Your journey begins here.
                            </p>
                            <button className="btn btn-primary">Start Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 4 */}
            <div id="slide4" className={`carousel-item relative w-full h-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
                <div
                    className="hero h-full"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-3 text-3xl font-bold">Final Stop: Slide 4</h1>
                            <p className="mb-4">
                                Embrace tranquility with this breathtaking view. Make memories that last a lifetime.
                            </p>
                            <button className="btn btn-primary">Get Inspired</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
            </div> */}
        </div>
    );
};

export default Carousel;
