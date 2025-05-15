import React from "react";

const journeySteps = [
  "Review Applications",
  "Shortlist Potential Candidates",
  "Schedule Interviews",
  "Conduct Interviews",
  "Select Final Candidates",
  "Issue Offer Letters",
  "Verify Documents & Background",
  "Coordinate Joining Formalities",
  "Conduct Induction & Orientation",
];

const RecruiterProcess = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-[#393939]">
          Recruiting <span className="text-[#d30c0c]">Process</span>
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#d30c0c]" />

          <div className="flex flex-col gap-12">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between w-full"
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Left content */}

                    <div className="w-1/2 pr-8 text-right">
                      <p className="text-lg font-medium text-gray-700">
                        {step}
                      </p>
                    </div>

                    {/* Dot */}

                    <div className="z-10 w-6 h-6 bg-white border-4 border-[#d30c0c] rounded-full" />

                    <div className="w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="w-1/2" />

                    {/* Dot */}

                    <div className="z-10 w-6 h-6 bg-white border-4 border-[#d30c0c] rounded-full" />

                    {/* Right content */}

                    <div className="w-1/2 pl-8 text-left">
                      <p className="text-lg font-medium text-gray-700">
                        {step}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterProcess;
