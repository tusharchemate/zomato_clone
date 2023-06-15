import React from 'react';
import './index.css';

const tabOptions = [
  {
    id: 1,
    name: 'Delivery',
    activeImage:
      'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png',
    backdrop: 'rgb(252, 238, 192)',
    inactiveImage:
      'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
  },
  {
    id: 2,
    name: 'Dining Out',
    activeImage:
      'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png',
    backdrop: 'rgb(248, 248, 248)',
    inactiveImage:
      'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
  },

  {
    id: 3,
    name: 'Night Life',
    activeImage:
      'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png',
    backdrop: 'rgb(237, 244, 255)',
    inactiveImage:
      'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
  },
];

const Tabs = (props) => {
  const { activeTab, setActiveTab } = props;

  return (
    <div className="tab-options">
      <div className="max-width option-wrapper">
        {tabOptions?.map((option) => (
          <div
            className={`tab-item ${
              activeTab == option.name ? 'active-tab' : ''
            }`}
            onClick={() => setActiveTab(option?.name)}
          >
            <div
              className="tab-image-container absolute-center"
              style={{
                backgroundColor: `${
                  activeTab == option.name ? option?.backdrop : ''
                }  `,
              }}
            >
              <img
                className="tab-image"
                src={`${
                  activeTab == option?.name
                    ? option?.activeImage
                    : option?.inactiveImage
                }`}
              ></img>
            </div>
            <div className="tab-name">{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
