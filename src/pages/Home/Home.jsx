import React from "react";
import heroSliderData from "../../assets/fake-data/hero-slider";
import Helmet from "../../components/Helmet/Helmet";
import HeroSlider from "../../components/HeroSlider/HeroSlider";


const Home = () => {
  return (
    <Helmet title="Trang Chủ">
      {/* Hero slider */}
      <HeroSlider data={heroSliderData}/>
      {/* End Hero slider */}
    </Helmet>
  );
};

export default Home;
