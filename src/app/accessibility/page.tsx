import React from 'react';
import Accessibility from '../components/Accessibility';

const AccessibilityPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Accessibility</h1>
      <Accessibility />
    </div>
  );
};

export default AccessibilityPage;