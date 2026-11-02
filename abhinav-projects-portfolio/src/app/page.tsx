"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Sparkles,
} from "lucide-react";

type Project = {
  title: string;
  category: "AI / ML" | "Data Analytics" | "Web App";
  description: string;
  details: string;
  stack: string[];
  visual: string;
  codeUrl: string;
  demoUrl: string;
};

const projects: Project[] = [
  {
    title: "Lex India",
    category: "AI / ML",
    description: "An AI-powered legal research and document intelligence platform.",
    details:
      "Designed to help users explore legal information and work with documents through an AI-assisted interface. Update this description to match the exact features in your final build.",
    stack: ["AI", "NLP", "GenAI", "React"],
    visual: "legal",
    codeUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    title: "Time Series Analytics Engine",
    category: "Data Analytics",
    description: "Exploring trends and forecasting patterns in time-series data.",
    details:
      "A data-focused project centered on preparing time-series data, visualizing trends, and experimenting with forecasting methods. Add your dataset, model, and evaluation results here.",
    stack: ["Python", "Pandas", "Visualization", "Forecasting"],
    visual: "chart",
    codeUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    title: "GlucoCare AI",
    category: "AI / ML",
    description: "An AI-focused health project with an emphasis on clear, useful insights.",
    details:
      "A project exploring how data and AI can support health-related analysis. Describe the implemented features, data sources, and limitations clearly before publishing.",
    stack: ["Python", "Machine Learning", "Data"],
    visual: "health",
    codeUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    title: "Campus-GPT",
    category: "Web App",
    description: "A conversational assistant concept for campus questions and resources.",
    details:
      "A chat-based experience intended to make campus information easier to access. Add details about your retrieval approach, knowledge sources, and implemented functionality.",
    stack: ["LLM", "RAG", "Web App"],
    visual: "chat",
    codeUrl: "https://github.com/",
    demoUrl: "",
  },
];

const filters = ["All", "AI / ML", "Data Analytics", "Web App"] as const;
type Filter = (typeof filters)[number];

function ProjectVisual({ type }: { type: string }) {
  if (type === "legal") {
    return (
      <div className="visual visual-legal" aria-hidden="true">
        <div className="legal-sun" />
        <div className="building">
          <div className="roof" />
          <div className="columns">
            <i /><i /><i /><i /><i />
          </div>
          <div className="steps" />
        </div>
        <span className="visual-label">LEGAL INTELLIGENCE</span>
      </div>
    );
  }
  if (type === "chart") {
    return (
      <div className="visual visual-chart" aria-hidden="true">
        <div className="chart-grid" />
        <div className="chart-bars">
          {[25, 38, 29, 48, 42, 58, 51, 67, 61, 78, 69, 88, 74, 96].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <svg className="chart-line" viewBox="0 0 320 120" preserveAspectRatio="none">
          <polyline points="0,94 25,80 44,88 64,62 85,73 105,48 125,58 145,34 166,45 185,25 204,40 225,15 244,30 265,8 285,22 320,2" />
        </svg>
        <span className="visual-label">TIME SERIES / FORECAST</span>
      </div>
    );
  }
  if (type === "health") {
    return (
      <div className="visual visual-health" aria-hidden="true">
        <div className="health-orb"><span>+</span></div>
        <div className="health-panel">
          <small>HEALTH INSIGHTS</small>
          <div className="health-reading"><b>AI</b><span>data analysis</span></div>
          <div className="health-lines"><i /><i /><i /></div>
        </div>
        <span className="visual-label">GLUCOCARE AI</span>
      </div>
    );
  }
  return (
    <div className="visual visual-chat" aria-hidden="true">
      <div className="chat-window">
        <div className="chat-top"><span /><span /><span /><b>Campus-GPT</b></div>
        <div className="chat-bubble bubble-left">How can I find campus resources?</div>
        <div className="chat-bubble bubble-right">Here are some helpful places to start.</div>
        <div className="chat-bubble bubble-left short" />
      </div>
      <span className="visual-label">CONVERSATIONAL AI</span>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Abhinav Patwary home">
          <span className="brand-mark">AP<span>.</span></span>
          <span className="brand-name">Abhinav Patwary</span>
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a className="active" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-github" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} /> SELECTED WORK · 2024—2026
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Ideas made<br /><span>into projects.</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            A collection of things I&apos;ve built across AI, data, and software.
            Practical experiments, thoughtful interfaces, and solutions to real problems.
          </motion.p>
          <motion.a
            className="text-link hero-link"
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Explore projects <ArrowDownRight size={17} />
          </motion.a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="planet-halo" />
          <div className="planet">
            <div className="planet-shine" />
            <div className="planet-land land-one" />
            <div className="planet-land land-two" />
            <div className="planet-land land-three" />
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="star star-one" /><span className="star star-two" /><span className="star star-three" />
          <span className="art-caption">CREATIVE TECHNOLOGY<br /><b>BUILT WITH PURPOSE</b></span>
        </div>
      </section>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">THE WORK</p>
            <h2>Featured projects<span>.</span></h2>
            <p className="section-subtitle">A closer look at what I&apos;ve been building.</p>
          </div>
          <span className="project-count">0{filteredProjects.length} PROJECTS</span>
        </div>

        <div className="filter-row" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "filter-pill selected" : "filter-pill"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="project-visual-wrap">
                <ProjectVisual type={project.visual} />
                <span className="project-number">0{projects.indexOf(project) + 1}</span>
              </div>
              <div className="project-content">
                <div className="project-meta"><span>{project.category}</span><ArrowUpRight size={17} /></div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-details">{project.details}</p>
                <div className="tag-row">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-actions">
                  <a href={project.codeUrl} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>
                  ) : (
                    <span className="coming-soon">Demo link to add</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-label"><span className="small-line" /> A LITTLE ABOUT THIS SPACE</div>
        <div className="about-content">
          <h2>Curiosity first.<br /><span>Build, learn, repeat.</span></h2>
          <p>
            I enjoy turning ideas into practical projects—from AI-powered tools and data
            exploration to web experiences. This portfolio is a living collection of what
            I&apos;m learning, building, and improving. Each project is a chance to solve a
            problem and get a little better at the craft.
          </p>
        </div>
      </section>

      <section className="resume-section section-wrap" id="resume">
        <div className="resume-card">
          <div className="resume-icon"><Code2 size={22} /></div>
          <div>
            <p className="section-kicker">WANT THE FULL PICTURE?</p>
            <h2>More than the projects.</h2>
            <p>Download my resume for a concise overview of my skills and experience.</p>
          </div>
          <a className="button-primary" href="/resume.pdf" download>
            Download resume <ArrowUpRight size={17} />
          </a>
        </div>
        <p className="resume-note">Add your PDF as <code>public/resume.pdf</code> to activate the download.</p>
      </section>

      <footer className="site-footer section-wrap" id="contact">
        <div className="footer-top">
          <div>
            <p className="section-kicker">SAY HELLO</p>
            <h2>Have a project in mind?<br /><span>Let&apos;s connect.</span></h2>
          </div>
          <a className="email-link" href="mailto:abhinavpatwary6@gmail.com">abhinavpatwary6@gmail.com <ArrowUpRight size={16} /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Abhinav Patwary</span>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/abhinavpatwary/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a href="mailto:abhinavpatwary6@gmail.com"><Mail size={16} /> Email</a>
          </div>
          <a className="back-top" href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
