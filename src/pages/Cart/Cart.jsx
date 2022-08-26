import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productData from "../../assets/fake-data/products";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import Helmet from "../../components/Helmet/Helmet";
import numberWithCommas from "../../utils/numberWithCommas";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItemsSlide.value);

  const [cartProducts, setCartProducts] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsDetail(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => {
        return total + Number(item.quantity);
      }, 0)
    );
    setTotalPrice(
      cartItems.reduce((total, item) => {
        return total + Number(item.quantity) * Number(item.price);
      }, 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Đặt hàng</Button>
            <Link to="/catalog">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
