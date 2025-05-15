import React from "react";
import mehak from "../../../assets/Partners/Mehak.jpeg";
import harsh from "../../../assets/Partners/Harsh.jpeg";

const teamMembers = [
  {
    name: "Harsh Yadav",
    title: "CTO & Co-Founder",
    image: harsh,
    alt: "Harsh Yadav",
  },

  {
    name: "Mehak Garg",
    title: "CEO & Co-Founder",
    image: mehak,
    alt: "Mehak Garg",
  },
];

const OurTeam = () => {
  return (
    <section className="py-8 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#393939]">
        Meet Our <span className="text-[#d30c0c] font-extrabold">Team</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.alt}
              className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            />

            <h3 className="text-xl font-semibold">{member.name}</h3>

            <p className="text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
