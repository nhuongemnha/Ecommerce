import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productData from "../../assets/fake-data/products";
import Button from "../Button/Button";
import ProductView from "../ProductView/ProductView";

const ProductViewModal = () => {
  const productSlug = useSelector((state) => state.productModalSlice.value);

  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  // const product = productData.getProductBySlug("quan-jean-phong-cach-18");

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button
            onClick={() => {
              dispatch({ type: "REMOVE" });
            }}
            size="sm"
          >
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
