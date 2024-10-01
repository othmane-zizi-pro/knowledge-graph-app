import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">By using our website, you agree to the following terms and conditions.</p>
      <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
      <h2 className="text-2xl font-semibold mb-2">2. Use License</h2>
      <p className="mb-4">Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
      <h2 className="text-2xl font-semibold mb-2">3. Disclaimer</h2>
      <p className="mb-4">The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      {/* Add more sections as needed */}
    </div>
  );
};

export default TermsOfService;