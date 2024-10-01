import React from 'react';

const Accessibility = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Accessibility Statement</h1>
      <p className="mb-4">We are committed to making our website accessible to all users, including those with disabilities.</p>
      <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
      <p className="mb-4">We strive to ensure that our website adheres to WCAG 2.1 Level AA standards. This includes:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Providing text alternatives for non-text content</li>
        <li>Ensuring content is easily navigable and readable</li>
        <li>Making all functionality available from a keyboard</li>
        <li>Providing enough time for users to read and use content</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Feedback</h2>
      <p className="mb-4">We welcome your feedback on the accessibility of our website. If you encounter any issues or have suggestions for improvement, please contact us.</p>
    </div>
  );
};

export default Accessibility;