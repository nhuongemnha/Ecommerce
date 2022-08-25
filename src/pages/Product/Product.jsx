import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "../../assets/fake-data/products";
import Grid from "../../components/Grid/Grid";
import Helmet from "../../components/Helmet/Helmet";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductView from "../../components/ProductView/ProductView";
import Section, {
  SectionBody,
  SectionTitle,
} from "../../components/Section/Section";

const Product = () => {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);

  const relatedProducts = productData.getProducts(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
            <ProductView product={product}/>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              );
            })}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
