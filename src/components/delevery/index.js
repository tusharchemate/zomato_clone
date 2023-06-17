import React from 'react';
import './index.css';
import Filters from '../common/filters';
import DeleveryCollection from './deleveryCollectin';

const filters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
    title: 'Filters',
  },

  {
    id: 2,
    icon: <i className="fi fi-sr-star-comment-alt"></i>,
    title: 'Ratings 4.0+',
  },

  {
    id: 3,
    icon: <i className="fi fi-rr-shield-check"></i>,
    title: 'Safe & Hygenic',
  },
  {
    id: 4,
    icon: <i class="fi fi-rr-shield-check"></i>,
    title: 'Pure Veg',
  },
  {
    id: 5,
    icon: <i class="fi fi-rr-shield-check"></i>,
    title: 'Greate Offers',
  },
];

const Delevery = () => {
  return (
    <div>
      <div>
        <Filters filters={filters} />
        <DeleveryCollection />
      </div>
    </div>
  );
};

export default Delevery;
