import React, { useState } from 'react';
import Header from '../../components/common/header';
import Tabs from '../../components/common/tabs';
import Footer from '../../components/common/footer';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  const getActiveScreen = (tab) => {
    switch (tab) {
      case 'Delivery':
        return <div>Delivery</div>;
      case 'Dining Out':
        return <div>Dining Out</div>;
      case 'Night Life':
        return <div>Night Life</div>;
      default:
        return <div>Delivery</div>;
    }
  };

  return (
    <div>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {getActiveScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default Home;
