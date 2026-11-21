
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Cloud, Code2,
  Fingerprint, Layers3, Menu, ShieldCheck, Sparkles,
  Workflow, X, Globe2, Cpu, Boxes, Send, CheckCircle2, MapPin, Phone, Mail, ExternalLink
} from "lucide-react";

const pillars = [
  {
    number: "01", icon: Code2, title: "Software & Digital Products",
    description: "Purpose-built software and digital experiences that help organisations work smarter and create lasting value.",
    tags: ["Custom software", "Web & mobile apps", "SaaS platforms", "Enterprise solutions"]
  },
  {
    number: "02", icon: Layers3, title: "IT Services & Transformation",
    description: "Technology consulting, implementation and support that help businesses modernise with confidence.",
    tags: ["IT consulting", "System architecture", "Integration", "Technical support"]
  },
  {
    number: "03", icon: Cloud, title: "Cloud & Infrastructure",
    description: "Reliable digital foundations for applications, data and connected business operations.",
    tags: ["Cloud computing", "Hosting", "Server management", "Databases & networks"]
  },
  {
    number: "04", icon: BrainCircuit, title: "AI, Automation & Intelligence",
    description: "Intelligent systems that turn data into insight and automate repetitive, complex workflows.",
    tags: ["AI & machine learning", "Predictive analytics", "Workflow automation", "APIs"]
  },
  {
    number: "05", icon: Fingerprint, title: "Digital Trust & Transactions",
    description: "Technology for secure digital interactions, identity, transactions and responsible data management.",
    tags: ["Payment integration", "Authentication", "Access control", "Data governance"]
  }
];

const capabilities = [
  { icon: Code2, title: "Application engineering", text: "Web, mobile and enterprise software built around real business needs." },
  { icon: Cpu, title: "Intelligent systems", text: "AI, machine learning and automation for more informed operations." },
  { icon: Cloud, title: "Cloud-native foundations", text: "Infrastructure, hosting and systems designed for dependable delivery." },
  { icon: ShieldCheck, title: "Digital trust", text: "Identity, privacy, consent and access-control technologies." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } }
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [lastSubmittedType, setLastSubmittedType] = useState<"general" | "support">("general");

  const closeMenu = () => setMenuOpen(false);
  const navItems = ["About", "Services", "Approach", "Contact"];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const enquiryType = String(formData.get("enquiryType") || "general");
    const isGeneralEnquiry = enquiryType === "general";
    const recipientAccessKey = isGeneralEnquiry
      ? import.meta.env.VITE_WEB3FORMS_GENERAL_ACCESS_KEY
      : import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!recipientAccessKey) {
      console.error(
        isGeneralEnquiry
          ? "Missing VITE_WEB3FORMS_GENERAL_ACCESS_KEY environment variable."
          : "Missing VITE_WEB3FORMS_ACCESS_KEY environment variable."
      );
      setFormStatus("error");
      return;
    }

    setLastSubmittedType(isGeneralEnquiry ? "general" : "support");

    const payload = {
      access_key: recipientAccessKey,
      subject: `${isGeneralEnquiry ? "General enquiry" : "Support query"} from ${String(formData.get("name") || "Website visitor")}`,
      from_name: "Bharatinex Website",
      enquiry_type: isGeneralEnquiry ? "General enquiry" : "Query / support",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || "")
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus("success");
        form.reset();
      } else {
        console.error("Web3Forms submission failed:", result);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Unable to submit enquiry:", error);
      setFormStatus("error");
    }
  }

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Bharatinex home">
          <span className="brand-mark"><span /></span>
          <span className="brand-copy">
            <strong>bharatinex</strong>
            <small>TECHNOLOGIES PRIVATE LIMITED</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
              <span className="eyebrow-dot" /> TECHNOLOGY · PRODUCTS · INNOVATION
            </motion.div>

            <motion.h1 initial="hidden" animate="visible" variants={fadeUp}>
              Engineering<br /><span>what's next.</span>
            </motion.h1>

            <motion.p className="hero-lead" initial="hidden" animate="visible" variants={fadeUp}>
              We build software, intelligent systems and digital foundations that help businesses move forward.
            </motion.p>

            <motion.div className="hero-actions" initial="hidden" animate="visible" variants={fadeUp}>
              <a className="button button-primary" href="#services">
                Explore what we do <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#about">
                Discover Bharatinex <ArrowRight size={16} />
              </a>
            </motion.div>

            <div className="hero-note"><span className="note-line" /> Built for ideas with ambition.</div>
          </div>

          <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9 }}>
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-glow" />
            <div className="core">
              <div className="core-inner"><Sparkles size={42} strokeWidth={1.2} /></div>
            </div>
            <div className="float-card card-top">
              <span className="mini-icon"><BrainCircuit size={17}/></span>
              <span><b>Intelligence</b><small>Ideas into insight</small></span>
            </div>
            <div className="float-card card-bottom">
              <span className="mini-icon mint"><Workflow size={17}/></span>
              <span><b>Connected systems</b><small>Built to work together</small></span>
            </div>
            <div className="art-caption">A connected world of possibilities <ArrowUpRight size={14}/></div>
          </motion.div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span><ArrowDown size={14}/>
          </a>
        </section>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid">
            <div className="section-kicker"><span>01 / ABOUT BHARATINEX</span><i /></div>
            <div className="intro-content">
              <h2>Technology should make <span>possibility practical.</span></h2>
              <p className="intro-text">
                Bharatinex Technologies Private Limited is a technology-focused company established to design, develop, operate and commercialise software, digital platforms and technology-enabled solutions.
              </p>
              <p className="muted">
                From application engineering and cloud infrastructure to intelligent automation and digital trust, our focus is on creating useful technology for businesses and people.
              </p>
              <div className="intro-values">
                <div><strong>Build</strong><span>Useful digital products</span></div>
                <div><strong>Connect</strong><span>Systems and experiences</span></div>
                <div><strong>Evolve</strong><span>With emerging technology</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div className="section-kicker"><span>02 / WHAT WE DO</span><i /></div>
            <div className="heading-row">
              <h2>One technology partner.<br /><span>Many ways forward.</span></h2>
              <p>
                Our capabilities span the core areas defined in our company objects—bringing products, services and infrastructure together.
              </p>
            </div>
          </div>

          <div className="pillar-list">
            {pillars.map(({ number, icon: Icon, title, description, tags }) => (
              <motion.article className="pillar" key={number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={fadeUp}>
                <div className="pillar-number">{number}</div>
                <div className="pillar-icon"><Icon size={23} strokeWidth={1.7}/></div>
                <div className="pillar-main">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="tag-list">
                    {tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <ArrowUpRight className="pillar-arrow" size={21}/>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="capability-section">
          <div className="section-wrap capability-grid">
            <div className="capability-intro">
              <div className="section-kicker light"><span>03 / HOW WE THINK</span><i /></div>
              <h2>Designed around<br /><span>the bigger picture.</span></h2>
              <p>
                Great technology is more than a collection of tools. It is the way products, people, processes and infrastructure work together.
              </p>
              <a href="#contact" className="button button-light">
                Build with us <ArrowUpRight size={16}/>
              </a>
            </div>

            <div className="capability-cards">
              {capabilities.map(({ icon: Icon, title, text }, index) => (
                <motion.div className="cap-card" key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <div className="cap-card-top"><span>0{index + 1}</span><Icon size={21}/></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-wrap" id="approach">
          <div className="section-kicker"><span>04 / OUR APPROACH</span><i /></div>
          <div className="approach-grid">
            <h2>From a clear idea<br />to <span>real-world impact.</span></h2>
            <div className="approach-steps">
              <div><span>01</span><section><h3>Understand</h3><p>Start with the problem, people and outcomes that matter.</p></section></div>
              <div><span>02</span><section><h3>Design & build</h3><p>Shape the right solution and engineer it with care.</p></section></div>
              <div><span>03</span><section><h3>Connect & deliver</h3><p>Integrate the pieces and make the solution work in context.</p></section></div>
              <div><span>04</span><section><h3>Improve</h3><p>Maintain, learn and evolve as needs and technology change.</p></section></div>
            </div>
          </div>
        </section>

        <section className="product-note section-wrap">
          <div className="product-panel">
            <div className="product-symbol"><Boxes size={34}/></div>
            <div>
              <span className="small-label">PRODUCTS & PLATFORMS</span>
              <h2>Built to solve. Ready to scale.</h2>
              <p>
                We develop and operate digital products, SaaS platforms and online applications. This space will showcase Bharatinex products as they are launched.
              </p>
            </div>
            <span className="coming-label">PRODUCT PORTFOLIO</span>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="section-kicker"><span>05 / START A CONVERSATION</span><i /></div>
          <div className="contact-grid">
            <div className="contact-copy">
              <h2>Have a challenge<br />worth <span>solving?</span></h2>
              <p>
                Tell us what you're working on. Let's explore how thoughtful technology can move it forward.
              </p>

              <div className="contact-details">
                <a className="contact-detail" href="mailto:contact@bharatinex.com">
                  <Mail size={18}/><span>General: contact@bharatinex.com</span>
                </a>

                <a className="contact-detail" href="mailto:support@bharatinex.com">
                  <Mail size={18}/><span>Queries & support: support@bharatinex.com</span>
                </a>

                <a className="contact-detail" href="tel:+919423699318">
                  <Phone size={18}/><span>+91 94236 99318</span>
                </a>

                <div className="contact-detail contact-address">
                  <MapPin size={18}/>
                  <span>S. No. 98/2/7/9/10/2, FL. No. 201, First Line,<br/>Gadhinglaj, Kolhapur, Maharashtra, India – 416502</span>
                </div>

                <a className="contact-detail" href="https://bharatinex.com" target="_blank" rel="noreferrer">
                  <Globe2 size={18}/><span>bharatinex.com</span><ExternalLink size={13}/>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Enquiry type
                <select
                  name="enquiryType"
                  defaultValue="general"
                  required
                  style={{
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    marginTop: "8px",
                    padding: "14px 16px",
                    borderRadius: "10px",
                    border: "1px solid rgba(20, 35, 55, 0.16)",
                    background: "#ffffff",
                    color: "#172338",
                    font: "inherit"
                  }}
                >
                  <option value="general">General enquiry — contact@bharatinex.com</option>
                  <option value="support">Query / support — support@bharatinex.com</option>
                </select>
              </label>

              <label>
                Your name
                <input name="name" placeholder="Name" required />
              </label>

              <label>
                Work email
                <input name="email" type="email" placeholder="you@company.com" required />
              </label>

              <label>
                Company <span className="optional">(optional)</span>
                <input name="company" placeholder="Company name" />
              </label>

              <label>
                How can we help?
                <textarea name="message" placeholder="Tell us a little about your project..." rows={4} required />
              </label>

              <button
                className="button button-primary submit-button"
                type="submit"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send enquiry"}
                <Send size={16}/>
              </button>

              {formStatus === "success" && (
                <p className="form-hint">
                  <CheckCircle2 size={15}/>
                  Thank you! Your {lastSubmittedType === "general" ? "general enquiry" : "query / support request"} has been sent successfully.
                </p>
              )}

              {formStatus === "error" && (
                <p className="form-hint">
                  Your enquiry could not be sent. Please try again or email {lastSubmittedType === "general" ? "contact@bharatinex.com" : "support@bharatinex.com"} directly.
                </p>
              )}

              <p className="form-hint">
                Choose the enquiry type above and your message will be routed to the relevant Bharatinex inbox.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-main">
          <a className="brand footer-brand" href="#home">
            <img className="brand-logo" src="/bharatinex-logo.png" alt="Bharatinex logo" />
            <span className="brand-copy">
              <strong>bharatinex</strong>
              <small>TECHNOLOGIES PRIVATE LIMITED</small>
            </span>
          </a>
          <p>Engineering what's next.</p>
          <a href="#home" className="back-top">Back to top <ArrowUpRight size={15}/></a>
        </div>

        <div className="section-wrap footer-bottom">
          <span>© {new Date().getFullYear()} Bharatinex Technologies Private Limited. All rights reserved.</span>
          <span>Built for a digital future.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
