import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Button/Button";

function HeroSlider(props) {
  const data = props.data;
  const timeOut = props.timeOut ? props.timeOut : 3000;

  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data]);
  const prevSlide = () => {
    console.log(activeSlide);
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (props.auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, props, timeOut]);

  return (
    <div className="hero-slider">
      {data.map((item, index) => (
        <HeroSliderItem
          key={index}
          item={item}
          active={index === activeSlide}
        />
      ))}

      {props.control ? (
        <div className="hero-slider__control">
          <div className="hero-slider__control__item">
            <i className="bx bx-chevron-left" onClick={prevSlide}></i>
          </div>
          <div className="hero-slider__contr ol__item">
            <i className="index">
              {activeSlide + 1}/{data.length}
            </i>
          </div>
          <div className="hero-slider__control__item">
            <i className="bx bx-chevron-right" onClick={nextSlide}></i>
          </div>
        </div>
      ) : null}
    </div>
  );
}

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};
const HeroSliderItem = (props) => {
  return (
    <div className={`hero-slider__item ${props.active ? "active" : ""}`}>
      <div className="hero-slider__item__info">
        <div
          className={`hero-slider__item__info__title color-${props.item.color}`}
        >
          <span>{props.item.title}</span>
        </div>
        <div className="hero-slider__item__info__description">
          <span>{props.item.description}</span>
        </div>
        <div className="hero-slider__item__info__btn">
          <Link to={props.item.path}>
            <Button
              backgroundColor={props.item.color}
              icon="bx bxs-cart"
              animate={true}
            >
              xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
      <div className="hero-slider__item__image">
        <div className={`shape bg-${props.item.color}`}> </div>
        <img src={props.item.img} alt="" />
      </div>
    </div>
  );
};

export default HeroSlider;
