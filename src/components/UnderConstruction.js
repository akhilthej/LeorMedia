import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Under Construction</h1>
        <p className="text-gray-600 mb-6">We are currently working on something awesome. Stay tuned!</p>
        <img 
          src="https://i.pinimg.com/236x/79/62/71/796271dca31d41d39510b618e6c54184.jpg" 
          alt="Under Construction" 
          className="mx-auto mb-4"
        />
        <div>
          <p className="text-gray-500">Estimated Time Remaining:</p>
          <p className="text-xl font-semibold text-gray-800">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
