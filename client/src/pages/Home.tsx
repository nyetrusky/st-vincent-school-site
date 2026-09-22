import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  HeartHandshake,
  Hand,
  Lightbulb,
  MapPin,
  Menu,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";

const fourHs = [
  {
    name: "Head",
    detail: "Curious, capable thinking",
    icon: Lightbulb,
    className: "bg-yellow text-ink",
    number: "01",
  },
  {
    name: "Heart",
    detail: "Kindness with conviction",
    icon: HeartHandshake,
    className: "bg-coral text-white",
    number: "02",
  },
  {
    name: "Hand",
    detail: "Learning by doing",
    icon: Hand,
    className: "bg-forest text-cream",
    number: "03",
  },
  {
    name: "Human relations",
    detail: "Belonging that builds courage",
    icon: Users,
    className: "bg-blue text-white",
    number: "04",
  },
];

const journeySteps = [
  {
    step: "01",
    eyebrow: "Begin with belonging",
    title: "Welcome to VSOP",
    detail: "Meet the school, hear the story, and take a first look around campus.",
    icon: Users,
    tone: "yellow",
  },
  {
    step: "02",
    eyebrow: "Find your rhythm",
    title: "Know the school year",
    detail: "See the 3-term calendar, level schedules, exam rhythm, and report card moments.",
    icon: CalendarDays,
    tone: "coral",
  },
  {
    step: "03",
    eyebrow: "Learn in every direction",
    title: "Explore the curriculum",
    detail: "Follow the MATATAG curriculum and the 4H approach from classroom to community.",
    icon: BookOpen,
    tone: "green",
  },
  {
    step: "04",
    eyebrow: "Grow with guidance",
    title: "Stay safe & connected",
    detail: "Understand school rules, child safeguarding, transport, clubs, and family touchpoints.",
    icon: ShieldCheck,
    tone: "blue",
  },
  {
    step: "05",
    eyebrow: "Step into what’s next",
    title: "Prepare for the future",
    detail: "For Senior High, discover strands, work immersion, ALS, vouchers, and college readiness.",
    icon: Route,
    tone: "yellow",
  },
] as const;

const terms = [
  { label: "Term 01", title: "Settle in", text: "Orientation, routines, and foundations for a confident start." },
  { label: "Term 02", title: "Deepen", text: "Build skills, friendships, and a stronger sense of purpose." },
  { label: "Term 03", title: "Step forward", text: "Celebrate progress and make the next brave move." },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <div className="announcement-bar">
        <div className="container flex items-center justify-between gap-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
          <span>A.Y. 2026–2027 · Students’ Orientation</span>
          <span className="hidden items-center gap-2 sm:flex"><Sparkles size={13} /> A place to grow fully</span>
        </div>
      </div>

      <header className="relative z-50 bg-cream/95 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-5">
          <button className="brand-lockup" onClick={() => navigateTo("top")} aria-label="Go to top">
            <span className="brand-seal">VSOP</span>
            <span className="brand-name"><strong>Village School Of Parkwoods</strong><small>of Parkwoods</small></span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            <button className="nav-link" onClick={() => navigateTo("about")}>Our school</button>
            <button className="nav-link" onClick={() => navigateTo("four-hs")}>The 4H way</button>
            <button className="nav-link" onClick={() => navigateTo("journey")}>Parent guide</button>
            <button className="nav-cta" onClick={() => navigateTo("contact")}>Plan a visit <ArrowUpRight size={16} /></button>
          </nav>

          <button className="icon-button lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="container pb-5 lg:hidden">
            <div className="mobile-menu">
              <button onClick={() => navigateTo("about")}>Our school <ArrowRight size={16} /></button>
              <button onClick={() => navigateTo("four-hs")}>The 4H way <ArrowRight size={16} /></button>
              <button onClick={() => navigateTo("journey")}>Parent guide <ArrowRight size={16} /></button>
              <button className="mobile-menu-cta" onClick={() => navigateTo("contact")}>Plan a visit <ArrowUpRight size={16} /></button>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="hero-section">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-sun" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> A school for the whole child</p>
            <h1>Grow in more <em>than one</em> direction.</h1>
            <p className="hero-lede">At the Village School of Parkwoods, learning is a lived experience — thoughtful, joyful, hands-on, and deeply human.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => navigateTo("journey")}>See the parent journey <ArrowUpRight size={17} /></button>
              <button className="text-button" onClick={() => navigateTo("about")}>Meet VSOP <ArrowRight size={16} /></button>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true"><span>H</span><span>H</span><span>H</span><span>+</span></div>
              <div><strong>Head · Heart · Hand · Human Relations</strong><small>Four ways we help children become more of who they are.</small></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-note note-one"><span>Since</span><strong>2004</strong><small>high school department</small></div>
            <div className="visual-note note-two"><MapPin size={15} /><span>Parkwood Hills</span></div>
            <div className="hero-photo-frame">
              <img src="/manus-storage/vsop-classroom_12ddc7e1.jpg" alt="Students learning together in a bright classroom" />
              <div className="photo-wash" />
              <div className="photo-caption"><span>Room to learn.</span><strong>Space to become.</strong></div>
            </div>
            <div className="hero-sticker"><span>VSOP</span><small>make your mark</small></div>
          </div>
        </div>
        <div className="hero-bottom-note container"><span>Scroll to explore</span><ArrowDownRight size={16} /></div>
      </section>

      <section id="about" className="about-section section-pad">
        <div className="container about-grid">
          <div className="section-intro">
            <p className="eyebrow"><span className="eyebrow-dot coral-dot" /> The VSOP story</p>
            <h2>Education is a <span>prime instrument</span> for change.</h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">From its beginnings as an elementary school to the opening of its High School Department in 2004, VSOP has grown with one steady belief: every person is unique and has potential for development.</p>
            <div className="about-details">
              <div><strong>Our promise</strong><span>Quality education that stays within reach, with student welfare at the center.</span></div>
              <div><strong>Our horizon</strong><span>Locally responsive, globally competitive, and ready for the changing times.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="four-hs" className="four-hs-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="eyebrow light-eyebrow"><span className="eyebrow-dot yellow-dot" /> The 4H approach</p><h2>Four directions.<br /><span>One whole person.</span></h2></div>
            <p>Our environment and curriculum invite children and youth to act simply, live gracefully, and give respect to one another.</p>
          </div>
          <div className="four-h-grid">
            {fourHs.map(({ name, detail, icon: Icon, className, number }) => (
              <article key={name} className={`h-card ${className}`}>
                <div className="h-card-top"><span>{number}</span><Icon size={22} strokeWidth={1.8} /></div>
                <div><h3>{name}</h3><p>{detail}</p></div>
                <ArrowUpRight className="h-card-arrow" size={20} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="journey-section section-pad">
        <div className="container">
          <div className="journey-intro">
            <div><p className="eyebrow"><span className="eyebrow-dot" /> For parents & guardians</p><h2>Your orientation,<br /><span>made clear.</span></h2></div>
            <div className="journey-intro-copy"><p>Think of this as your map through the school year — from first welcome to the next big step.</p><span className="path-label"><Route size={16} /> The VSOP parent journey</span></div>
          </div>
          <div className="journey-path" aria-label="Parent orientation journey flowchart">
            <div className="path-line" aria-hidden="true" />
            {journeySteps.map(({ step, eyebrow, title, detail, icon: Icon, tone }, index) => (
              <article key={step} className={`journey-card journey-card-${tone}`}>
                <div className="journey-card-top"><span className="step-number">{step}</span><Icon size={21} /></div>
                <p className="card-eyebrow">{eyebrow}</p>
                <h3>{title}</h3>
                <p>{detail}</p>
                {index < journeySteps.length - 1 && <span className="journey-arrow" aria-hidden="true"><ArrowRight size={17} /></span>}
              </article>
            ))}
          </div>
          <div className="shs-branch">
            <div className="branch-label"><span>For Senior High School</span><ArrowDownRight size={17} /></div>
            <div className="branch-items"><span>Tracks & strands</span><span>ESC / VMS vouchers</span><span>ALS & work immersion</span><span>College & career readiness</span></div>
          </div>
        </div>
      </section>

      <section className="campus-section section-pad">
        <div className="container campus-grid">
          <div className="campus-photo-wrap">
            <img src="/manus-storage/vsop-classroom_12ddc7e1.jpg" alt="A collaborative classroom at Village School of Parkwoods" />
            <div className="campus-tag"><span>Campus life</span><strong>Learn together.</strong></div>
            <div className="campus-doodle" aria-hidden="true">↗</div>
          </div>
          <div className="campus-copy">
            <p className="eyebrow"><span className="eyebrow-dot green-dot" /> Spaces that support growth</p>
            <h2>Little moments.<br /><span>Big becoming.</span></h2>
            <p>Instructional rooms, a computer room, a library, and the everyday spaces in between — each one gives students room to ask, try, collaborate, and belong.</p>
            <div className="location-line"><MapPin size={18} /><div><strong>Find us in Parkwood Hills</strong><span>Block 6 Lot 8, Durian St., Violago Homes, Parkwood Hills</span></div></div>
            <button className="outline-button" onClick={() => toast("Campus tour details are coming soon.")}>Explore campus <ArrowUpRight size={16} /></button>
          </div>
        </div>
      </section>

      <section className="terms-section section-pad">
        <div className="container">
          <div className="section-heading-row terms-heading"><div><p className="eyebrow"><span className="eyebrow-dot coral-dot" /> The school year</p><h2>A rhythm that helps<br /><span>everyone thrive.</span></h2></div><p>VSOP’s 3-term system gives each season of learning a clear purpose — and every family a steady pulse to follow.</p></div>
          <div className="terms-grid">
            {terms.map((term, index) => <article className="term-card" key={term.label}><div className="term-number">0{index + 1}</div><p>{term.label}</p><h3>{term.title}</h3><span>{term.text}</span><div className="term-bar"><i style={{ width: `${52 + index * 20}%` }} /></div></article>)}
          </div>
        </div>
      </section>

      <section id="contact" className="closing-section">
        <div className="closing-scribble" aria-hidden="true">✳</div>
        <div className="container closing-inner">
          <p className="eyebrow light-eyebrow"><span className="eyebrow-dot yellow-dot" /> You belong here</p>
          <h2>Ready to make<br /><em>the next move?</em></h2>
          <p>Start with a conversation. We’ll help you find the right path through VSOP.</p>
          <div className="closing-actions"><button className="primary-button yellow-button" onClick={() => toast("We’ll have visit scheduling ready in the next version.")}>Plan a visit <ArrowUpRight size={17} /></button><button className="text-button light-text-button" onClick={() => toast("Orientation guide download is coming soon.")}>Download orientation guide <ArrowRight size={16} /></button></div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container footer-grid">
          <div className="footer-brand"><span className="brand-seal footer-seal">VSOP</span><div><strong>Village School of Parkwoods</strong><span>Quality education. Whole-person growth.</span></div></div>
          <div className="footer-note">© 2026 VSOP · Designed for families, faculty, and the next generation.</div>
        </div>
      </footer>
    </main>
  );
}
