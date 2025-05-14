import React from 'react';
import PricingSummary from '../components/PricingAnalytics/PricingSummary';

const Pricing = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-yellow-400 mb-4">Pricing Analytics</h1>
      <PricingSummary />
    </div>
  );
};

export default Pricing;
