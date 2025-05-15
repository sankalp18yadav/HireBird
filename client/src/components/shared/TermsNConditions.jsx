import React from "react";
import Footer from "../shared/Footer";
import FAQ from "./FAQ";

const TermsNConditions = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      {/* Hero Section */}

      <div className="text-center py-16 bg-gradient-to-r from-indigo-100 to-pink-100 shadow-md">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#6C5CE7]">
          Terms & <span className="text-[#2D3436]">Conditions</span>
        </h1>

        <p className="text-lg mt-4 max-w-2xl mx-auto text-gray-600">
          By accessing and using{" "}
          <span className="font-medium text-indigo-600">HireBird</span>, you
          agree to the following terms and policies.
        </p>
      </div>

      {/* Main Content */}

      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {[
            //Acceptance of Terms

            {
              title: "1. Acceptance of Terms",
              content:
                "By using HireBird, you agree to comply with these Terms & Conditions. If you disagree with any part of these terms, you must refrain from using our services.",
            },

            //Eligibility

            {
              title: "2. Eligibility",
              content:
                "Our platform is intended for users who are 18 years or older. By using HireBird, you confirm that you meet this eligibility requirement.",
            },

            //User Responsibilities

            {
              title: "3. User Responsibilities",
              content: (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Provide accurate, truthful, and current information.</li>
                  <li>Do not share your login credentials with others.</li>
                  <li>Use the platform lawfully and ethically.</li>
                  <li>
                    Report suspicious or abusive activity to our support team.
                  </li>
                </ul>
              ),
            },

            //Intellectual Property

            {
              title: "4. Intellectual Property",
              content:
                "All content, including but not limited to text, graphics, logos, and software, is the property of HireBird or its licensors. Reproduction or distribution without permission is prohibited.",
            },

            //Use of Data

            {
              title: "5. Use of Data",
              content:
                "We collect user data to improve service quality. This data is handled according to our Privacy Policy. We do not sell your data to third parties.",
            },

            //Third-Party Links

            {
              title: "6. Third-Party Links",
              content:
                "HireBird may contain links to external websites. We are not responsible for the content, terms, or policies of third-party sites.",
            },

            //Account Termination

            {
              title: "7. Account Termination",
              content:
                "HireBird reserves the right to suspend or terminate any account found violating these terms or engaging in fraudulent, harmful, or illegal activity.",
            },

            //Changes to the Terms

            {
              title: "8. Changes to the Terms",
              content:
                "We may modify these Terms & Conditions at any time. Updates will be posted here, and continued use of the platform implies acceptance.",
            },

            //Limitation of Liability

            {
              title: "9. Limitation of Liability",
              content:
                "HireBird is not liable for indirect, incidental, or consequential damages arising from your use of the platform, to the extent permitted by law.",
            },

            //Contact Information

            {
              title: "10. Contact Information",
              content: (
                <>
                  For questions, please contact us at{" "}
                  <a
                    href="mailto:support@hirebird.co.us"
                    className="text-indigo-600 underline font-medium"
                  >
                    support@hirebird.co.us
                  </a>
                  .
                </>
              ),
            },
          ].map((section, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-2xl font-semibold text-indigo-700">
                {section.title}
              </h2>

              <div className="text-base leading-relaxed">{section.content}</div>
            </section>
          ))}
        </div>
      </main>

      {/* FAQ */}

      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <FAQ />
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default TermsNConditions;
