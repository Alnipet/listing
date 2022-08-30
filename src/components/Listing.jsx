/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';

function Listing(props) {
  const { items } = props;

  const itemList = items.map((item) => {
    if (item.state === 'removed') return;

    const clipTitle = () => {
      const maxLenght = 50;
      let clippedTitle = item.title;

      if (clippedTitle.length >= maxLenght) {
        clippedTitle = item.title.slice(0, clippedTitle.lenght) + '...';
      }

      return clippedTitle;
    };

    const currencies = {
      USD: '$',
      EUR: '€',
    };

    const currency = item.currency_code in currencies ? currencies[item.currency_code] : item.currency_code;

    let levelClass;

    if (item.quantity > 20) {
      levelClass = 'level-high';
    } else if (item.quantity <= 10) {
      levelClass = 'level-low';
    } else {
      levelClass = 'level-medium';
    }

    return (
      <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage ? item.MainImage.url_570xN : null} alt="img"></img>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{clipTitle()}</p>
          <p className="item-price">
            {currency} {item.price}
          </p>
          <p className={`item-quantity ${levelClass}`}>{item.quantity}</p>
        </div>
      </div>
    );
  });

  return <div className="item-list">{itemList}</div>;
}

Listing.propTypes = {
  items: PropTypes.array,
};

export default Listing;
