import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* Title */}
      <h1 className="about-title">About Us</h1>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide quality education and skill development opportunities to underprivileged children from all communities, while promoting and preserving rich cultural traditions. We believe that every child, regardless of background, deserves the chance to learn, grow, and gain practical skills for a better future.
        </p>
      </section>

      {/* Vision */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where no child is left behind due to financial hardship, and where education, vocational skills, and culture are equally valued. Through education and skill-building programs, we aim to empower young minds and nurture socially responsible, skilled, and culturally aware individuals.
        </p>
      </section>

      {/* Story */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded with a passion for education, skill development, and cultural preservation, our organization noticed that many children cannot access schools or vocational training, and that traditional skills like Banjara dress stitching are at risk of being forgotten. To address this, we started programs that:
        </p>
        <ul>
          <li>Support education for all underprivileged children.</li>
          <li>Teach practical skills like Banjara dress stitching, handicrafts, and other vocational trades.</li>
          <li>Promote cultural awareness through festivals, workshops, and performances.</li>
        </ul>
      </section>

      {/* What We Do */}
      <section className="about-section">
        <h2>What We Do</h2>

        <h3>1. Education</h3>
        <ul>
          <li>Scholarships: Cover school fees for children who cannot afford education.</li>
          <li>Educational Supplies: Provide books, uniforms, stationery, and learning materials.</li>
          <li>Learning Support: Organize tutoring sessions, online learning programs, and workshops.</li>
        </ul>

        <h3>2. Skill Development</h3>
        <ul>
          <li>Teach children traditional crafts and vocational skills such as Banjara dress stitching, embroidery, and tailoring.</li>
          <li>Provide hands-on training programs that help children develop practical skills for future employment.</li>
          <li>Encourage creativity and entrepreneurship so children can create their own small businesses or work in local industries.</li>
        </ul>

        <h3>3. Culture</h3>
        <ul>
          <li>Celebrate festivals, music, dance, and art forms to keep heritage alive.</li>
          <li>Organize workshops and performances for children to learn and showcase cultural practices.</li>
          <li>Engage children from all communities in cultural activities to foster appreciation and pride in traditions.</li>
        </ul>
      </section>

      {/* Our Impact */}
      <section className="about-section">
        <h2>Our Impact</h2>
        <ul>
          <li>Over 500 children from various communities have received educational support.</li>
          <li>1,000+ books and learning materials distributed.</li>
          <li>Skill development programs in traditional crafts like Banjara dress stitching have empowered children with practical knowledge.</li>
          <li>Numerous cultural programs organized, helping children connect with traditions and values.</li>
          <li>Children gain both modern education, vocational skills, and cultural knowledge, preparing them for a balanced and independent future.</li>
        </ul>
      </section>

      {/* Meet Our Team */}
      <section className="about-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team includes educators, vocational trainers, cultural experts, and volunteers committed to supporting education, skill-building, and cultural preservation. Each team member contributes their time, expertise, and passion to ensure children learn, grow, and thrive academically, culturally, and professionally.
        </p>
      </section>

      {/* Get Involved */}
      <section className="about-section">
        <h2>Get Involved</h2>
        <p>You can help us educate children, teach valuable skills, and preserve culture!</p>
        <ul>
          <li><strong>Donate:</strong> Support education and skill-building programs for children of all backgrounds.</li>
          <li><strong>Volunteer:</strong> Join us in teaching vocational skills, tutoring, or organizing cultural workshops.</li>
          <li><strong>Spread the Word:</strong> Help raise awareness about our mission and impact.</li>
        </ul>
        <p>
          Together, we can empower young minds, equip them with practical skills, and celebrate cultural heritage. <strong>Join us today!</strong>
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
