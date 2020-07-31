import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './Header_Styles';

export default function Header() {
  const cartSize = useSelector(state =>
    state.cart.reduce((total, p) => {
      return total + p.amount;
    }, 0)
  );

  return (
    <Container>

      <Link to="/">

        <strong>
          Cipó & <br/>
        </strong>
        <strong> Castanha</strong>

      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize === 1 ? `${cartSize} produto` : `${cartSize} produtos`}</span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
        <span>{cartSize}</span>
      </Cart>
    </Container>
  );
}
