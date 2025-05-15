import React from "react";
import Footer from "../../shared/Footer";
import FAQ from "../../shared/FAQ";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const contactDetails = [
  //Mail Icon

  {
    icon: Mail,
    label: "Email",
    description:
      "Feel free to email us for support, inquiries, or feedback. We usually respond within 24 hours.",
    value: ["contact@hirebird.com", "support@hirebird.co.us"],
  },

  //Phone Icon

  {
    icon: Phone,
    label: "Phone",
    description:
      "Call us directly for quick assistance. Our support team is available during business hours.",
    value: ["+1 (650) 555-0179", "+1 (310) 555-0194"],
  },

  //Map Icon

  {
    icon: MapPin,
    label: "Address",
    description:
      "Visit our office or send us a letter. We’re happy to welcome you during office hours.",
    value: "Hounslow, United Kingdom",
  },
];

const ContactUs = () => {
  return (
    <div className="space-y-2">
      {/* Contact Section */}

      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-[#d30c0c]">
          Contact Us
          <br />
          <span className="text-[#6C5CE7] text-4xl">Hire</span>
          <span className="text-gray-800 text-4xl">Bird</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600">
          At HireBird, we’re here to help you find the perfect talent or your
          dream job with ease and confidence. Whether you have questions, need
          support, or want to explore partnership opportunities, our dedicated
          team is ready to assist you. Reach out to us via email, phone, or you
          send letter to our headquater, and we’ll respond promptly to ensure
          your experience with HireBird is smooth and successful.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          {contactDetails.map((item, index) => {
            const isEmail = item.label === "Email";
            const isPhone = item.label === "Phone";
            const isAddress = item.label === "Address";

            return (
              <Card
                key={index}
                className="relative pt-12 pb-6 px-6 bg-white border border-gray-200 shadow-xl shadow-[#af91eb] rounded-2xl text-center hover:shadow-2xl transition-shadow"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-md shadow-[#af91eb] border border-gray-200">
                  <item.icon className="w-8 h-8 text-[#d30c0c]" />
                </div>

                <CardContent>
                  <h3 className="text-lg font-semibold text-[#6C5CE7] mb-2">
                    {item.label}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>

                  {Array.isArray(item.value) ? (
                    item.value.map((val, i) => (
                      <p key={i}>
                        {isEmail ? (
                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${val}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1f1f1f] hover:text-[#d30c0c] hover:text-lg"
                          >
                            {val}
                          </a>
                        ) : isPhone ? (
                          <a
                            href={`tel:${val.replace(/\s+/g, "")}`}
                            className="text-[#1f1f1f] hover:text-[#6C5CE7] hover:text-lg"
                          >
                            {val}
                          </a>
                        ) : null}
                      </p>
                    ))
                  ) : isAddress ? (
                    <a
                      href={`https://www.google.com/maps/place/${encodeURIComponent(
                        item.value
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1f1f1f] hover:text-[#529954] hover:text-lg"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#1f1f1f]">{item.value}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <FAQ />

      <Footer />
    </div>
  );
};

export default ContactUs;
