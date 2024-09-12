import bannerImg1 from "../../../../assets/images/banner/1.jpg"
import bannerImg2 from "../../../../assets/images/banner/2.jpg"
import bannerImg3 from "../../../../assets/images/banner/3.jpg"
import bannerImg4 from "../../../../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="carousel w-full max-h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={bannerImg1}
                        className="w-full" />
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={bannerImg2}
                        className="w-full" />
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={bannerImg3}
                        className="w-full" />
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={bannerImg4}
                        className="w-full" />
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;