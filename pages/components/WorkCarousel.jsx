import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function WorkCarousel() {
    return (
        <div style={{paddingTop: '2%'}} id="work">
            <div className="carousel-container">
                <h1 className="fs-1 title profile-quote"><strong>RECENT PROJECTS</strong></h1>
                <Carousel>
                    <div>
                        <img className="carousel-item" src="./img1.jpg" alt="image1"/>
                        <p className="legend">Project 1 Title</p>
                    </div>
                    <div>
                        <img className="carousel-item" src="./img2.png" alt="image2" />
                        <p className="legend">Project 2 Title</p>
                    </div>
                    <div>
                        <img className="carousel-item" src="./img3.jpg" alt="image3"/>
                        <p className="legend">Project 3 Title</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default WorkCarousel