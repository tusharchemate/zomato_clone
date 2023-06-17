import React from 'react';
import Slider from 'react-slick';
import './index.css';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const deleveryCollectionData = [
  {
    id: 1,
    name: 'Dots',
    image:
      'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
  },
  {
    id: 2,
    name: 'Dots',
    image:
      'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
  },

  {
    id: 3,
    name: 'Dots',
    image:
      'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
  },
  {
    id: 4,
    name: 'Dots',
    image:
      'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
  },
  {
    id: 5,
    name: 'Dots',
    image:
      'https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png',
  },
  {
    id: 6,
    name: 'Dots',
    image:
      'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
  },
  {
    id: 7,
    name: 'Dots',
    image:
      'https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png',
  },
  {
    id: 8,
    name: 'Dots',
    image:
      'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
  },
];

const DeleveryCollection = () => {
  return (
    <div className="max-width">
      <Slider {...settings}>
        <div className="collection">
          {deleveryCollectionData?.map((item) => (
            <img className='item' src={item.image} width="200" />
          ))}
        </div>
      </Slider>
    </div>
  );
};

export default DeleveryCollection;
