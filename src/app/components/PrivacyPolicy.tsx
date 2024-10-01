import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">This privacy policy outlines how we collect, use, and protect your personal information.</p>
      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4">We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
      <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you.</p>
      <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
      <p className="mb-4">We implement appropriate technical and organizational measures to protect the security of your personal information.</p>
      {/* Add more sections as needed */}
    </div>
  );
};

export default PrivacyPolicy;