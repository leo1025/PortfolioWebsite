import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";

function WorkCarousel({data}) {
    return (
        <div style={{paddingTop: '2%'}} id="work">
            <div className="carousel-container">
                <h1 className="fs-1 title profile-quote"><strong>RECENT PROJECTS</strong></h1>
                <Carousel>
                    {data?.map((post) => {
                        return (
                            <Link style={{textDecoration: 'none', color: 'inherit'}}
                                href={{pathname: `/${post.slug}`}}>
                                <img className="carousel-item" src={post.feature_image} alt="image1"/>
                                <p className="legend">{post.title}</p>
                            </Link>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default WorkCarousel