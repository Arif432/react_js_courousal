import React from "react";
import CarouselSlider from "react-carousel-slider";
import { Carousel } from 'react-responsive-carousel';
import game1 from "./images/game1.jpg";
import game2 from "./images/game2.jpg";
import game3 from "./images/game3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./styles.css";



export default function App() {

    // use these props in courousal tag if you want small screens at bottom not to appear
    // showThumbs={true}


    // to show dotted indicators
    // showIndicators={true} 

    // to show left right arros
    //  showArrows={false}


    

  return (
    <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showArrows={false} showThumbs={false} showIndicators={false} >
        <div>
            <img src={game1} />
        </div>
        <div>
            <img src={game2} />
        </div>
        <div>
            <img src={game3} />
        </div>
    </Carousel>
  );
}


