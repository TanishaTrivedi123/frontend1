import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamMembers = () => {
  const teamLeads = [
    {
      name: "Ansh Pandey",
      role: "Lead / Full Stack Developer",
      image: "Ansh.jpeg",
    },
    {
      name: "Tanisha Trivedi",
      role: "Co-Lead / Full Stack Developer",
      image: "Tanisha.jpeg",
    },
    {
      name: "Vishal Hardiya",
      role: "Outreach Lead / Sponsorship Head",
      image: "Vishal.jpeg",
    },
  ];

  const teamMembers = [
    {
      name: "Manan Jethwa",
      role: "Graphics Lead / DS & ML",
      image: "Manan.jpeg",
    },
    {
      name: "Mahima Sharma",
      role: "Social Media & Content Lead/ DS & ML",
      image: "Mahima.jpeg",
    },
    {
      name: "Harish Vishvakarma",
      role: "Technical Lead / DS & ML",
      image: "Harish.jpeg",
    },
    {
      name: "Kapil Satyarthi",
      role: "Video Editing Lead",
      image: "Kapil.jpeg",
    },
    {
      name: "Shruti Tiwari",
      role: "Management Support / Java Full Stack",
      image: "Shruti.jpeg",
    },
    {
      name: "Kshitij Choudhary",
      role: "Tech Support",
      image: "Kshitij.jpeg",
    },
    {
      name: "Harsh Thakariya",
      role: "Evaluation Team / DS & ML",
      image: "Harsh.jpeg",
    },
    {
      name: "Akanksha Tiwari",
      role: "Registration & Volunteer Management",
      image: "Aakanksha.jpeg",
    },
    {
      name: "Malika Thakur",
      role: "Event Management & Coordination",
      image: "Malika.jpeg",
    },
    {
      name: "Atul Malviya",
      role: "Event Execution Support / DS & ML",
      image: "Atul.jpeg",
    },
    {
      name: "Prajwal Bharambe",
      role: "Full Stack Developer",
      image: "Prajwal.jpeg",
    },
  ];

  useEffect(() => {
    gsap.from(".team-lead-card", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".team-leads-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".team-member-card", {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".team-members-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".gradient-bg", {
      backgroundPosition: "100% 50%",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }, []);

  return (
    <div className="min-h-screen gradient-bg bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 bg-400% pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto font-sans">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide font-poppins">
            Our Amazing Team
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto font-inter">
            Meet the talented individuals who make everything possible
          </p>
        </div>

        {/* Team Leads */}
        <section className="team-leads-section mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamLeads.map((lead, index) => (
              <div
                key={index}
                className="team-lead-card hover:scale-105 transition-transform"
              >
                <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-5 h-full flex flex-col items-center">
                  <div className="group relative">
                    <img
                      src={lead.image}
                      alt={lead.name}
                      className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white/20 shadow-lg transition-transform duration-300 group-hover:-translate-y-3"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mt-5 font-poppins">
                    {lead.name}
                  </h3>
                  <p className="text-purple-200 text-lg mt-2 text-center font-inter">
                    {lead.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="team-members-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-member-card hover:scale-105 transition-transform"
              >
                <div className="bg-white/5 backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-5 flex flex-col items-center">
                  <div className="group relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full border-2 border-white/20 shadow-md mb-4 transition-transform duration-300 group-hover:-translate-y-2"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-white text-center">
                    {member.name}
                  </h3>
                  <p className="text-purple-200 text-sm mt-1 text-center">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamMembers;
