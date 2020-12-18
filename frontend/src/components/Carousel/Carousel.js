/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '@brainhubeu/pure-react-carousel/dist/react-carousel.es.css';
import './carousel.scss'

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={600}
        naturalSlideHeight={400}
        totalSlides={9}
      >
        <Slider className="slider">
          <Slide className="slide" index={0}><img alt="" src="https://picsum.photos/600/400?grayscale" /></Slide>
          <Slide className="slide" index={1}><img alt="" src="https://picsum.photos/600/400" /></Slide>
          <Slide className="slide" index={2}><img alt="" src="https://picsum.photos/600/400?grayscale" /></Slide>

          <Slide index={3}><img alt="" src="https://picsum.photos/600/400?grayscale" /></Slide>
          <Slide index={4}><img alt="" src="https://picsum.photos/600/400" /></Slide>
          <Slide index={5}><img alt="" src="https://picsum.photos/600/400?grayscale" /></Slide>

          <Slide index={6}><img alt="" src="https://picsum.photos/600/400?grayscale" /></Slide>
          <Slide index={7}><img alt="" src="https://picsum.photos/600/400" /></Slide>
          <Slide index={8}><img alt="" src="https://picsum.photos/600/400?grayscale" /></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}