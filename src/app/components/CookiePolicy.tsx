import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p className="mb-4">This policy explains how we use cookies and similar technologies on our website.</p>
      <h2 className="text-2xl font-semibold mb-2">What are cookies?</h2>
      <p className="mb-4">Cookies are small text files that are placed on your device when you visit our website. They allow us to remember your preferences and improve your browsing experience.</p>
      <h2 className="text-2xl font-semibold mb-2">How we use cookies</h2>
      <p className="mb-4">We use cookies for various purposes, including:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Essential cookies: These are necessary for the website to function properly.</li>
        <li>Analytics cookies: These help us understand how visitors interact with our website.</li>
        <li>Advertising cookies: These are used to deliver relevant ads to you.</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Managing cookies</h2>
      <p className="mb-4">You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
    </div>
  );
};

export default CookiePolicy;