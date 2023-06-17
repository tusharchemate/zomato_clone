import React, { useState } from 'react';
import Header from '../../components/common/header';
import Tabs from '../../components/common/tabs';
import Footer from '../../components/common/footer';
import Delevery from '../../components/delevery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightlife';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  const getActiveScreen = (tab) => {
    switch (tab) {
      case 'Delivery':
        return <Delevery />;
      case 'Dining Out':
        return <DiningOut />;
      case 'Night Life':
        return <NightLife />;
      default:
        return <Delevery />;
    }
  };

  return (
    <div>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {getActiveScreen(activeTab)}

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
