import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './Header_Styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state =>
    state.cart.reduce((total, p) => {
      return total + p.amount;
    }, 0)
  );

  return (
    <Container>

      <Link to="/">

        <p>
          Cipo & Castanha
        </p>

      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize === 1 ? `${cartSize} product` : `${cartSize} products`}</span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
        <span>{cartSize}</span>
      </Cart>
    </Container>
  );
}
