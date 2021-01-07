import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getCurrencyFormater } from '../../utils/helper';
import { Img, AddToCart, Buy } from '../../common';
import './Card.scss';

const Card = ({
  title, img, desc, id, price: { amount, unit },
}) => (
  <div className="card-container">
    <div className="price">
      <div className="amount">{getCurrencyFormater(amount)}</div>
      <div className="unit">{unit}</div>
    </div>
    <Link to={`/details/${id}`}>
      <Img src={img} />
    </Link>
    <div className="title">{title}</div>
    <div className="sub-title">
      <p>{desc}</p>
    </div>
    <div className="actions">
      <Buy id={id} />
      <AddToCart id={id} />
    </div>
  </div>
);

export default withRouter(Card);
