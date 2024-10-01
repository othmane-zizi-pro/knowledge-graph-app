import React from 'react';
import TermsOfService from '../components/TermsOfService';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <TermsOfService />
    </div>
  );
};

export default TermsOfServicePage;