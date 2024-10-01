import React from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicyPage;