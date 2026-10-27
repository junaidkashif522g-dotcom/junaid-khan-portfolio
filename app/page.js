import Image from "next/image";

const EMAIL = "junaidkashif522g@gmail.com";
const PHONE = "0310-4667056";

const jobs = [
  { role: "Website Content Administrator", org: "Rice News Today (T&U Globex), Lahore", when: "2025 – Present",
    text: "Manage daily website content, on-page SEO and email campaigns to grow audience engagement." },
  { role: "Data Analyst", org: "T&U Globex, Lahore", when: "2023 – 2025",
    text: "Analysed export data and built Excel reports that supported marketing strategy." },
  { role: "Marketing Intern", org: "T&U Globex, Lahore", when: "2022 – 2023",
    text: "Supported data entry, record management and day-to-day marketing tasks." },
];

const skills = [
  ["Social media management", 75],
  ["Microsoft Excel, PowerPoint and Word", 70],
  ["On-page SEO", 50],
  ["Report and content writing", 50],
  ["Digital marketing (email, Meta Ads)", 45],
];

const interests = [
  "Business documentaries",
  "Digital tools and marketing trends",
  "Travel and photography",
  "Global brands and campaigns",
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">M. Junaid Khan</a>
        <nav aria-label="Primary">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="role">Marketing &amp; Merchandising</p>
              <h1>
                <span>M. Junaid</span>
                <span>Khan</span>
              </h1>
              <p className="lead">
                I run web content, SEO and email campaigns, and turn export data into
                reports that guide marketing decisions. Based in Lahore.
              </p>
              <div className="actions">
                <a className="btn primary" href={`mailto:${EMAIL}`}>Email me</a>
                <a className="btn ghost" href="#experience">See my work history</a>
              </div>
            </div>
            <figure className="portrait">
              <Image src="/junaid.png" alt="Portrait of M. Junaid Khan" width={279} height={375} priority />
            </figure>
          </div>
        </section>

        <section className="wrap about" aria-labelledby="about-h">
          <h2 id="about-h">About</h2>
          <div className="about-grid">
            <p>
              I&rsquo;m a detail-oriented marketing and merchandising professional with
              hands-on experience in content development, data analysis and digital
              campaign execution. I currently manage operations at Rice News Today, a
              branch of T&amp;U Globex, focusing on web content strategy and reporting.
            </p>
            <p>
              I learn quickly, work well alone or in a team, and I&rsquo;m looking to join a
              growth-driven team in a dynamic marketing role.
            </p>
          </div>
        </section>

        <section id="experience" className="wrap" aria-labelledby="exp-h">
          <h2 id="exp-h">Experience</h2>
          <ol className="timeline">
            {jobs.map((j) => (
              <li key={j.role}>
                <span className="when">{j.when}</span>
                <div>
                  <h3>{j.role}</h3>
                  <p className="org">{j.org}</p>
                  <p>{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="band" aria-labelledby="skills-h">
          <div className="wrap">
            <h2 id="skills-h">Skills</h2>
            <ul className="skills">
              {skills.map(([name, pct]) => (
                <li key={name}>
                  <div className="skill-head"><span>{name}</span><span>{pct}%</span></div>
                  <div className="bar" role="img" aria-label={`${name}: ${pct} percent`}>
                    <i style={{ width: `${pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="education" className="wrap" aria-labelledby="edu-h">
          <h2 id="edu-h">Education</h2>
          <div className="edu">
            <article>
              <h3>BBA (Hons.) in Marketing</h3>
              <p className="org">University of Central Punjab, Lahore</p>
              <p>Fall 2020 – Spring 2024</p>
              <p className="gpa">CGPA 3.12 · Final-year GPA 3.45</p>
            </article>
            <article>
              <h3>Intermediate in Pre-Medical</h3>
              <p className="org">Punjab Group of Colleges, Lahore</p>
              <p>2018 – 2020</p>
            </article>
          </div>
          <p className="interests"><strong>Outside work:</strong> {interests.join(", ")}.</p>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-h">
          <div className="wrap">
            <h2 id="contact-h">Let&rsquo;s talk about your next campaign</h2>
            <div className="contact-links">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={`tel:${PHONE.replace(/-/g, "")}`}>{PHONE}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} M. Junaid Khan</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
