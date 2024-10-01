import React from 'react';
import CookiePolicy from '../components/CookiePolicy';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      <CookiePolicy />
    </div>
  );
};

export default CookiePolicyPage;