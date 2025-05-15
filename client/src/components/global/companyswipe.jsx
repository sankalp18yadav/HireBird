import React from "react";

const CompanySwipe = ({ companyItems }) => {
  const duplicatedItems = [...companyItems, ...companyItems];
  const totalItems = duplicatedItems.length;

  return (
    <div className="relative overflow-hidden py-6 w-full">
      <div
        className="flex gap-8 animate-scroll"
        style={{
          width: `calc(${totalItems} * (150px + 2rem))`,
          animation: `scroll 120s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-none max-w-7xl h-15 flex justify-center items-center"
          >
            {/* Logo */}

            <img
              src={item.image}
              alt={`Company logo ${index}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-${totalItems / 2} * (150px + 2rem)));
            }
          }
        `}
      </style>
    </div>
  );
};

export default CompanySwipe;
