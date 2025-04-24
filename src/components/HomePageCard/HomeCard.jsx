import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../HomePageCard/HomeCard.module.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeCard = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Harsh Jha",
      role: "x-GDSC Lead / Founder",
      image: "/src/assets/Harsh Bhaiya.jpeg",
    },
    {
      id: 2,
      name: "Avni Bhargav",
      role: "Co-Founder / Advisor",
      image: "/src/assets/Avni Didi.png",
    },
    {
      id: 3,
      name: "Rashmeet Kaur",
      role: "Advisor",
      image: "/src/assets/Rashmeet Didi.jpeg",
    },
  ];

  useGSAP(() => {
    // Animate heading
    gsap.from(`.${styles.sectionHeading}`, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: `.${styles.container}`,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Animate each card smoothly from bottom to top
    gsap.utils.toArray(`.${styles.card}`).forEach((card, index) => {
      gsap.from(card, {
        y: 80, // comes from further below
        opacity: 0,
        duration: 1.2,
        delay: index * 0.1, // adds nice stagger feel
        ease: "power3.out", // smoother easing
        scrollTrigger: {
          trigger: card,
          start: "top 95%", // triggers when card is just entering view
          toggleActions: "play none none none",
        },
      });
    });

    // Hover effect (no scrollTrigger needed)
    document.querySelectorAll(`.${styles.card}`).forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -5, duration: 0.3, ease: "power1.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: "power1.out" });
      });
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionHeading}>Meet Our Tech Pioneers</h2>
      <div className={styles.wrapper}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.card}>
            <img src={member.image} alt={member.name} />
            <div className={styles.info}>
              <h1>{member.name}</h1>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
