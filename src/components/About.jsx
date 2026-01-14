

const About = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <img
          src="https://framerusercontent.com/images/WWdQ2zLteXSFypujmTT6YJPQvA.jpeg?scale-down-to=1024" height={4800} width={3200}
          alt="Profile"
        />

        <span className="tag tag-web">Websites</span>
        <span className="tag tag-brand">Branding</span>
        <span className="tag tag-anim">Animation</span>

        <p className="tagline">
          Designer with a passion for creating intuitive digital experiences.
        </p>
      </div>

      <div className="about-right">
        <nav className="about-nav">
          <ul>
            <li>Home</li>
            <li className="active">About</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>

       <div className="about-content">
          <h2>A little about me</h2>

          <p>
            I'm a creative developer passionate about building clean and modern
            user experiences.
          </p>

          <p>
            I focus on React, UI design, and performance-driven web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
