"use client";

import { useEffect } from "react";

const productFamilies = [
  {
    name: "Acquire",
    line: "Get found. Capture demand.",
    items: ["Sites", "Landing pages", "Lead forms", "CRM", "Campaign pages"],
  },
  {
    name: "Sell",
    line: "Turn attention into transactions.",
    items: ["Booking", "Ordering", "Digital menus", "Quotations", "Payments-ready flows"],
  },
  {
    name: "Retain",
    line: "Keep the customers you earn.",
    items: ["Loyalty", "Reviews", "Customer database", "Messaging", "Follow-up systems"],
  },
  {
    name: "Operate",
    line: "Run the business with less friction.",
    items: ["Forms", "Automation", "Dashboards", "Internal workflows", "AI assistants"],
  },
];

const routes = [
  {
    id: "crew",
    eyebrow: "UPGRADE",
    title: "I already run a business.",
    body: "Add strategic communications, creative execution, web, and digital systems without building a full internal department.",
  },
  {
    id: "launch",
    eyebrow: "BUILD",
    title: "I want to launch something.",
    body: "Turn an idea into a market-ready digital or AI-enabled business with a clear offer, brand, systems, and launch plan.",
  },
  {
    id: "white-label",
    eyebrow: "RESELL",
    title: "I want products under my own brand.",
    body: "Choose one app or several, white-label them, set your own pricing, and build your own client portfolio.",
  },
];

function SenzCore() {
  return (
    <div className="core-wrap" aria-hidden="true">
      <div className="core-halo halo-a" />
      <div className="core-halo halo-b" />
      <div className="core-halo halo-c" />
      <div className="core-orbit orbit-a">
        <span />
        <span />
        <span />
      </div>
      <div className="core-orbit orbit-b">
        <span />
        <span />
      </div>
      <div className="core-symbol">
        <div className="core-diamond" />
        <div className="core-ribbon ribbon-top" />
        <div className="core-ribbon ribbon-bottom" />
      </div>
      <div className="core-node node-a" />
      <div className="core-node node-b" />
      <div className="core-node node-c" />
    </div>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const updateScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
        root.style.setProperty("--scroll", String(window.scrollY / max));
      });
    };

    const updatePointer = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      root.style.setProperty("--mx", x.toFixed(3));
      root.style.setProperty("--my", y.toFixed(3));
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#top" className="brand-lockup" aria-label="SENZ home">
          <span className="brand-mark">S</span>
          <span className="brand-word">SENZ</span>
        </a>
        <div className="nav-links">
          <a href="#crew">Crew</a>
          <a href="#products">Products</a>
          <a href="#white-label">White Label</a>
          <a href="#launch">AI Business</a>
        </div>
        <a className="nav-cta" href="#contact">
          Talk to SENZ
        </a>
      </nav>

      <section id="top" className="hero dark-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">STRATEGIC COMMUNICATIONS + DIGITAL SOLUTIONS</p>
            <h1>
              Build a stronger business
              <span> without building everything yourself.</span>
            </h1>
            <p className="hero-lead">
              Strategy, communications, digital products, managed capability, and
              white-label technology working as one SENZ system.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#paths">
                Choose your path <ArrowIcon />
              </a>
              <a className="button button-ghost" href="#products">
                Explore what we build
              </a>
            </div>
            <div className="hero-principle">
              <strong>Upgrade. Build. Resell.</strong>
              <span>Three ways to grow with SENZ.</span>
            </div>
          </div>
          <div className="hero-art">
            <SenzCore />
            <p className="system-label">SENZ SYSTEM / 01</p>
          </div>
        </div>
      </section>

      <section id="paths" className="section light-section path-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow blue">START HERE</p>
            <h2>What are you building?</h2>
          </div>
          <p>
            You do not need to understand the SENZ organization first. Choose the
            outcome you need and enter through the right commercial path.
          </p>
        </div>

        <div className="route-grid">
          {routes.map((route, index) => (
            <a href={`#${route.id}`} className="route-card" key={route.id}>
              <span className="route-number">0{index + 1}</span>
              <p className="eyebrow blue">{route.eyebrow}</p>
              <h3>{route.title}</h3>
              <p>{route.body}</p>
              <span className="route-arrow">Enter route <ArrowIcon /></span>
            </a>
          ))}
        </div>
      </section>

      <section id="crew" className="section light-section crew-section">
        <div className="crew-layout">
          <div>
            <p className="eyebrow blue">SENZ BUSINESS CREW</p>
            <h2>One coordinated crew. More capability than one hire.</h2>
            <p className="section-lead">
              SENZ gives growing businesses access to strategic communications,
              creative execution, web, and digital operations without requiring
              separate full-time hires for every capability.
            </p>
            <div className="price-block">
              <span>Flagship managed partnership</span>
              <strong>From ₱29,500 / month</strong>
              <small>Defined monthly capacity. Clear scope. Direct communication.</small>
            </div>
          </div>

          <div className="capability-system">
            <div className="capability-center">
              <span>SENZ</span>
              <strong>CREW</strong>
            </div>
            {["Strategy", "Communications", "Creative", "Web", "Systems"].map(
              (item, index) => (
                <div className={`capability capability-${index + 1}`} key={item}>
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div className="crew-strip">
          <span>Strategic direction</span>
          <span>Brand consistency</span>
          <span>Content + creative</span>
          <span>Website management</span>
          <span>Campaign planning</span>
          <span>Selected digital tools</span>
        </div>
      </section>

      <section id="products" className="section dark-section products-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow cyan">SENZ DIGITAL PRODUCTS</p>
            <h2>Install only what your business needs.</h2>
          </div>
          <p>
            Buy one product, combine several, or connect them into a broader
            business system. Software remains commercially separate from managed
            service capacity.
          </p>
        </div>

        <div className="product-grid">
          {productFamilies.map((family, index) => (
            <article className="product-card" key={family.name}>
              <div className="product-index">0{index + 1}</div>
              <h3>{family.name}</h3>
              <p>{family.line}</p>
              <ul>
                {family.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="product-foot">
                <span>SENZ-powered</span>
                <span>White-label available</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="white-label" className="section dark-section white-label-section">
        <div className="white-label-copy">
          <p className="eyebrow cyan">SENZ WHITE LABEL</p>
          <h2>
            Your brand. Your pricing.
            <span> Your customers. SENZ infrastructure.</span>
          </h2>
          <p className="section-lead inverted">
            Start with one app. Apply your own identity. Sell it directly to your
            customers. Add more products only when your business needs them.
          </p>

          <div className="white-label-steps">
            {[
              ["01", "Choose", "Select one product or build a portfolio."],
              ["02", "Brand", "Apply your own name, identity, and client-facing experience."],
              ["03", "Sell", "Set your retail price and own the customer relationship."],
              ["04", "Scale", "Add client accounts, products, and partner capacity."],
            ].map(([num, title, body]) => (
              <div className="step" key={num}>
                <span>{num}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rebrand-demo" aria-label="White-label transformation example">
          <div className="demo-browser">
            <div className="demo-toolbar">
              <i />
              <i />
              <i />
              <span>white-label.demo</span>
            </div>
            <div className="demo-stage">
              <div className="demo-logo">
                <span className="demo-logo-mark">S</span>
                <strong className="demo-brand-name">YOUR BRAND</strong>
              </div>
              <div className="demo-app-card">
                <span>BOOKING SYSTEM</span>
                <strong>Ready to sell under your name.</strong>
                <div className="demo-lines">
                  <i />
                  <i />
                  <i />
                </div>
                <button type="button" tabIndex="-1">Book now</button>
              </div>
            </div>
          </div>
          <p>Built by SENZ. Branded by you. Sold by you.</p>
        </div>
      </section>

      <section id="launch" className="section light-section launch-section">
        <div className="launch-copy">
          <p className="eyebrow blue">SENZ LAUNCH</p>
          <h2>Start your AI business today, but build a real business around it.</h2>
          <p className="section-lead">
            SENZ Launch turns an idea into a sellable offer with positioning,
            branding, a website, digital systems, practical AI workflows, and a
            structured launch.
          </p>
        </div>

        <div className="launch-flow" aria-label="Launch process">
          {["Idea", "Market", "Offer", "Brand", "Website", "AI System", "Launch"].map(
            (item, index) => (
              <div className="launch-node" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            )
          )}
        </div>

        <div className="launch-tracks">
          <article>
            <p className="eyebrow blue">AI BUSINESS</p>
            <h3>Build an AI-enabled offer people can actually buy.</h3>
          </article>
          <article>
            <p className="eyebrow blue">DIGITAL AGENCY</p>
            <h3>Launch a service business around white-label SENZ products.</h3>
          </article>
          <article>
            <p className="eyebrow blue">ONLINE SERVICE</p>
            <h3>Package expertise into a clearer digital sales and delivery system.</h3>
          </article>
        </div>
      </section>

      <section className="section light-section proof-section">
        <div className="proof-copy">
          <p className="eyebrow blue">PROOF, NOT DECORATION</p>
          <h2>Businesses we upgrade.</h2>
          <p>
            Case studies will document the challenge, SENZ intervention, systems
            installed, and defensible business result. No invented performance
            claims.
          </p>
          <div className="case-placeholder">
            <span>CASE STUDY FRAMEWORK</span>
            <div>
              <strong>Challenge</strong>
              <strong>Intervention</strong>
              <strong>Systems</strong>
              <strong>Result</strong>
            </div>
          </div>
        </div>

        <aside className="fmb-card">
          <p className="eyebrow cyan">STRATEGIC DIRECTION</p>
          <h3>Francine Marie Bautista</h3>
          <strong>Strategic Consultant</strong>
          <p>
            FMB leads strategic direction across positioning, communications,
            perception, campaign architecture, and business clarity while SENZ
            turns strategy into execution.
          </p>
          <div className="fmb-rule">
            <span>Strategy by FMB.</span>
            <span>Execution by SENZ.</span>
            <span>Systems powered by SENZ.</span>
          </div>
        </aside>
      </section>

      <section id="contact" className="final-cta dark-section">
        <div className="final-core">
          <SenzCore />
        </div>
        <div className="final-copy">
          <p className="eyebrow cyan">YOUR NEXT MOVE</p>
          <h2>What do you want SENZ to build with you?</h2>
          <div className="final-actions">
            <a href="#crew">Upgrade my business</a>
            <a href="#launch">Build my business</a>
            <a href="#white-label">Resell SENZ technology</a>
          </div>
          <p className="contact-note">
            Contact channel and booking integration will be connected in the next
            implementation pass.
          </p>
        </div>
      </section>

      <footer>
        <div>
          <strong>SENZ</strong>
          <span>Strategic Communications + Digital Solutions</span>
        </div>
        <span>Strategy. Systems. Execution.</span>
      </footer>
    </main>
  );
}
