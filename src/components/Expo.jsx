import React from 'react'
import Carousel from "react-multi-carousel";
import {CelebAPI} from './CelebAPI.jsx'
import "react-multi-carousel/lib/styles.css";

export function Expo() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
      return (
        <div>
          <div className="Expo-page">
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              arrows={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              centerMode={true}
              // customTransition="all .5"
              // partialVisbile={true}
              transitionDuration={500}
              customTransition="transform 700ms ease-in-out"
              // deviceType={this.props.deviceType}
            >
              {CelebAPI.map((artiste) => {
                return (
                  <div className="">
                    <img
                    //   width="70px"
                      height="auto"
                      src={`${artiste.artiste}`}
                      alt={`${artiste.artiste} thumbnail`}
                    />
                  </div>
                );
              })}
            </Carousel>{" "}
          </div>
        </div>
      );
    }
    


