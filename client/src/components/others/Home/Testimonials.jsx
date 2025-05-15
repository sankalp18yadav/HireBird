import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "Vivek Joshi",
    role: "CEO & Director",
    company: "Excess Edge",
    message:
      "Working with this platform has been a game-changer for our business. Their attention to detail, commitment to quality, and innovative solutions helped us scale faster than we ever imagined.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    name: "Bharat Kunal",
    role: "Manager",
    company: "StrikeHaul",
    message:
      "Exceptional service and outstanding support! The team was responsive, knowledgeable, and genuinely cared about delivering the best results for our company’s needs.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },

  {
    name: "Prabhakar D",
    role: "Founder / CEO",
    company: "Dusk Ltd",
    message:
      "Their professionalism and dedication exceeded all our expectations. I highly recommend their services to any company looking to transform their digital presence and achieve real growth.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-8 bg-white text-center">
      {/* Testimonial */}

      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#393939]">
        TESTIM
        <span className="text-[#d30c0c]">ONIALS</span>
      </h2>

      <p className="text-gray-600 mt-2">
        Hear what our users and partners say about their experience with
        HireBird.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="relative pt-12 pb-6 px-6 shadow-xl shadow-[#D6C9F0]"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Avatar className="h-20 w-20 border-4 border-white shadow-md">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              </Avatar>
            </div>

            <CardContent>
              <QuoteIcon className="mx-auto text-[#6C5CE7] w-8 h-8 mb-4" />

              <p className="text-gray-600 text-sm mb-4">
                {testimonial.message}
              </p>

              <h3 className="text-lg font-semibold text-[#6C5CE7]">
                {testimonial.name}
              </h3>

              <p className="text-sm text-[#413f3f]">
                {testimonial.role} at {testimonial.company}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
