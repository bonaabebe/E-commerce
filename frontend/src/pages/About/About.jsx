// src/pages/AboutPage.jsx
import React from 'react';
import styles from './AboutPage.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  // Sample Team Members Data (can be hardcoded here for a single component)
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO & Founder",
      image: "https://via.placeholder.com/150/FFC107/000000?Text=JD", // Replace with actual image URL
      bio: "A visionary leader with over 15 years of experience in the industry...",
      social: {
        linkedin: "https://www.linkedin.com/in/johndoe",
        // twitter: "https://twitter.com/johndoe",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Head of Marketing",
      image: "https://via.placeholder.com/150/4CAF50/FFFFFF?Text=JS", // Replace with actual image URL
      bio: "Passionate about creating engaging content and driving brand awareness...",
      social: {
        linkedin: "https://www.linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
    },
    // Add more team members directly here
  ];

  // Sample Mission and Vision Data
  const mission = "To empower [your target audience] by providing innovative and high-quality [your products/services] that [state the positive impact].";
  const vision = "To be the leading [your industry] company recognized for our [key differentiators] and commitment to [your long-term goals].";

  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Our Company</h1>
          <p className={styles.heroSubtitle}>Learn more about our story, mission, and the team behind the magic.</p>
          <Link to="/contact" className={styles.contactButton}>Contact Us</Link>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p>
            Founded in [Year], our journey began with a simple idea: to [briefly state the initial goal or problem you aimed to solve]. What started as [briefly describe the initial setup, e.g., a small workshop, a passionate group of individuals] has grown into a thriving company dedicated to [state your current core business or focus].
          </p>
          <p>
            Over the years, we've been driven by [mention core values or principles, e.g., innovation, customer satisfaction, quality]. We've overcome challenges, celebrated successes, and continuously evolved to meet the changing needs of our customers and the industry. [Mention a key milestone or turning point in your company's history].
          </p>
          <p>
            Today, we are proud to [state your current achievements or position in the market]. Our commitment to [reiterate a key value, e.g., excellence] remains at the heart of everything we do.
          </p>
        </div>
      </section>

      <section className={styles.missionVisionSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Mission & Vision</h2>
          <div className={styles.mission}>
            <h3>Our Mission</h3>
            <p>{mission}</p>
          </div>
          <div className={styles.vision}>
            <h3>Our Vision</h3>
            <p>{vision}</p>
          </div>
        </div>
      </section>

      {teamMembers && teamMembers.length > 0 && (
        <section className={styles.teamSection}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <div className={styles.teamGrid}>
              {teamMembers.map((member) => (
                <div key={member.id} className={styles.teamMember}>
                  <img src={member.image || '/images/default-profile.png'} alt={member.name} className={styles.memberImage} />
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberTitle}>{member.title}</p>
                  <p className={styles.memberBio}>{member.bio?.substring(0, 100)}...</p> {/* Basic bio preview */}
                  {member.social && (
                    <div className={styles.memberSocial}>
                      {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>}
                      {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>}
                      {/* Add more social media links as needed */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.valuesSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <ul className={styles.valuesList}>
            <li><strong>Innovation:</strong> We constantly strive to find new and better ways to [mention what you innovate in].</li>
            <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do. We are committed to [mention your customer commitment].</li>
            <li><strong>Quality:</strong> We believe in delivering products/services of the highest standard. [Mention your approach to quality].</li>
            <li><strong>Teamwork:</strong> We foster a collaborative and supportive environment where every team member's contribution is valued.</li>
            {/* Add more core values as needed */}
          </ul>
        </div>
      </section>

      <section className={styles.contactCTASection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Learn More?</h2>
          <p className={styles.ctaSubtitle}>Connect with us to discuss your needs or explore partnership opportunities.</p>
          <Link to="/contact" className={styles.contactButton}>Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default About;