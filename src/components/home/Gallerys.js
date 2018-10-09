import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const settings = {
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow: 1,
    slidesToScroll: 1
}


const showgallery = ({latestgallery}) => {
    if(latestgallery){
        return(
           <Slider {...settings}>
            {latestgallery.map((item)=>{
                return(
                    <Link to={`/galleries/${item.id}`} key={item.id} className="slider-item">
                        <div className="image"
                         style={{background:`url(/images/galleries/${item.images[0].img})`}}>
                         <h3>{item.artist}</h3>
                        </div>

                    </Link>
                )
            })}
           </Slider> 
        )

    }
}

const Gallerys = (props) => {   
    return (

        <div className="home-gallery">
           <h2>Awesome Gallery</h2>
            {showgallery(props)}
        </div>
    );
};

export default Gallerys;