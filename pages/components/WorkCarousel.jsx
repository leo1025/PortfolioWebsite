import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function WorkCarousel() {
    return (
        <div>
            <h2>Recent Projects</h2>
            <Carousel>
                <div>
                    <img src="/1.png" alt="image1"/>
                    <p className="legend">Image 1</p>
                </div>
                <div>
                    <img src="/2.png" alt="image2" />
                    <p className="legend">Image 2</p>
                </div>
                <div>
                    <img src="/3.png" alt="image3"/>
                    <p className="legend">Image 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default WorkCarousel