import Navbar from "../components/Navbar"

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
        <div className="absolute top-10"><Navbar /></div>
        <h2>A little about me</h2>

        <p>
          Hi, I'm Axel, a Creative Director passionate about turning ideas into
          impactful visuals. I thrive on storytelling, design, and strategy,
          bringing brands to life with creativity and purpose.
        </p>

        <p>
          With a mix of vision, detail, and a love for bold ideas, I craft
          experiences that connect and inspire.
        </p>

        <p className="cta">Let’s create something amazing together!</p>
      </div>
    </section>
  );
};

export default About;
