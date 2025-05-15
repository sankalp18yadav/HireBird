import React from "react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">
          Privacy
          <span className="text-red-500">Policy</span>
        </h1>

        <p className="mb-4">
          Welcome to
          <span className="text-bold">Hire</span>
          <span className="text-bold text-[#6C5CE7]">Bird</span>! Your privacy
          is important to us. This Privacy Policy explains how we collect, use,
          and protect your information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Information We Collect
        </h2>

        <p className="mb-4">
          We may collect personal information you provide directly to us,
          including:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company details</li>
          <li>Other information you choose to provide</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          How We Use Your Information
        </h2>

        <p className="mb-4">We use the information we collect to:</p>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Provide and maintain our services</li>
          <li>Communicate with you about updates, offers, and promotions</li>
          <li>Improve our website and services</li>
          <li>Ensure security and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Sharing of Information
        </h2>

        <p className="mb-4">
          We do not share your personal information with third parties, except:
        </p>

        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and enforce our terms</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>

        <p className="mb-4">
          We implement reasonable measures to protect your personal information
          from unauthorized access, use, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>

        <p className="mb-4">
          You have the right to access, update, or delete your personal
          information. To exercise your rights, please contact us at
          <span className="text-bold cursor-pointer">
            support@hirebird.co.us
          </span>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Changes to This Policy
        </h2>

        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>

        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at
          <span className="text-bold cursor-pointer">
            support@hirebird.co.us
          </span>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
