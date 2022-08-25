import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../../components/Helmet/Helmet";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../components/Section/Section";
import PolicyCard from "../../components/PolicyCard/PolicyCard";
import Grid from "../../components/Grid/Grid";

import heroSliderData from "../../assets/fake-data/hero-slider";
import policy from "../../assets/fake-data/policy";
import productData from "../../assets/fake-data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

import banner from "../../assets/images/banner.png";

const Home = () => {
  return (
    <Helmet title="Trang Chủ">
      {/* Hero slider */}
      <HeroSlider
        timeOut={5000}
        auto={true}
        control={true}
        data={heroSliderData}
      />
      {/* End Hero slider */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => {
              return (
                <Link key={index} to="/policy">
                  <PolicyCard
                    name={item.name}
                    description={item.description}
                    icon={item.icon}
                  />
                </Link>
              );
            })}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling section */}
      <Section>
        <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}

      {/* new arrival section */}
      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      {/* popular product  section */}
      <Section>
        <SectionTitle>
          phổ biến
        </SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end popular product  section */}
    </Helmet>
  );
};

export default Home;
