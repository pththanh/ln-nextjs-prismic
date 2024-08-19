import React, { PropsWithChildren } from "react";
import Slider, { Settings } from "react-slick";

interface CarouselProps extends PropsWithChildren {
  settings?: Settings;
  showArrows?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  settings,
  children,
  showArrows,
}) => {
  const defaultSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: showArrows,
    ...settings,
  };

  return <Slider {...defaultSettings}>{children}</Slider>;
};

export default Carousel;
