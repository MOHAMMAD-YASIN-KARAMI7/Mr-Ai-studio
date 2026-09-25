"use client";

import { useState } from "react";

const services = [
  { n: "01", title: "AI Video", text: "Cinematic ads, reels, product films and social-first video." },
  { n: "02", title: "AI Visuals", text: "Campaign visuals, product imagery and creative concepts." },
  { n: "03", title: "AI Ads", text: "Fast creative testing for paid and organic campaigns." },
  { n: "04", title: "Social Content", text: "Content systems built for consistent publishing." },
];

const work = [
  { tag: "AI FILM", title: "Future / Human", meta: "Concept film · 2026" },
  { tag: "PRODUCT", title: "Synthetic Studio", meta: "Product campaign · 2026" },
  { tag: "SOCIAL", title: "Next Frame", meta: "Social campaign · 2026" },
];

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "studio", text: "Hey — tell us what you're building. We're listening." },
  ]);

  function sendMessage() {
    const value = message.trim();
    if (!value) return;
    setMessages((m) => [...m, { from: "client", text: value }]);
    setMessage("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "studio", text: "Got it. Your brief is in the inbox. We'll get back to you soon." }]);
    }, 500);
  }

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top"><span className="dot" />MR AI <b>STUDIO</b></a>
        <div className="navlinks">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a>
        </div>
        <button className="navcta" onClick={() => setChatOpen(true)}>Start a project ↗</button>
      </nav>

      <section id="top" className="hero">
        <div className="eyebrow">AI CONTENT PRODUCTION STUDIO</div>
        <h1>Ideas in.<br /><span>Impossible</span> out.</h1>
        <p>We turn ambitious ideas into cinematic AI-powered content for brands, products and people.</p>
        <div className="heroActions">
          <button className="primary" onClick={() => setChatOpen(true)}>Tell us your idea <span>→</span></button>
          <a className="ghost" href="#work">Explore work <span>↓</span></a>
        </div>
        <div className="orb orb1" /><div className="orb orb2" /><div className="gridGlow" />
      </section>

      <section className="ticker"><div>AI FILM · CREATIVE DIRECTION · VISUALS · ADVERTISING · SOCIAL · AI FILM · CREATIVE DIRECTION ·</div></section>

      <section id="work" className="section">
        <div className="sectionHead"><div><span className="label">SELECTED WORK</span><h2>Made with machines.<br />Directed by humans.</h2></div><span className="count">03 / 03</span></div>
        <div className="workGrid">
          {work.map((item, i) => <article className="workCard" key={item.title}><div className={"workVisual v" + (i + 1)}><span>{item.tag}</span><strong>{item.title}</strong><i /></div><div className="cardMeta"><b>{item.title}</b><span>{item.meta}</span></div></article>)}
        </div>
      </section>

      <section id="services" className="section services">
        <div className="sectionHead"><div><span className="label">WHAT WE DO</span><h2>One studio.<br />Many possibilities.</h2></div></div>
        <div className="serviceList">{services.map(s => <div className="service" key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><b>↗</b></div>)}</div>
      </section>

      <section id="process" className="section process">
        <span className="label">THE PROCESS</span><h2>From rough thought<br />to <em>finished frame.</em></h2>
        <div className="steps"><div><span>01</span><b>Brief</b><p>You bring the idea. We find the visual opportunity.</p></div><div><span>02</span><b>Direction</b><p>Concept, mood, script and a sharp creative route.</p></div><div><span>03</span><b>Production</b><p>AI generation, editing, sound and finishing.</p></div><div><span>04</span><b>Delivery</b><p>Ready-to-publish assets, built for the platform.</p></div></div>
      </section>

      <section className="cta"><div className="noise" /><span className="label">HAVE A PROJECT?</span><h2>Let's make something<br /><span>people remember.</span></h2><button className="primary" onClick={() => setChatOpen(true)}>Open project chat →</button></section>

      <footer><div className="brand"><span className="dot" />MR AI <b>STUDIO</b></div><p>AI content production · by MYK</p><span>© 2026</span></footer>

      <button className="chatFab" aria-label="Open chat" onClick={() => setChatOpen(true)}>✦</button>

      {chatOpen && <div className="chatOverlay" onClick={() => setChatOpen(false)}>
        <div className="chatPanel" onClick={e => e.stopPropagation()}>
          <div className="chatTop"><div><span className="online" /> MR AI Studio <small>Project desk</small></div><button onClick={() => setChatOpen(false)}>×</button></div>
          <div className="chatBody">
            <div className="chatIntro"><div className="chatLogo">MR</div><h3>Start a project</h3><p>Send us your idea, brief or question. This is your direct project chat.</p></div>
            {messages.map((m, i) => <div key={i} className={"bubble " + m.from}>{m.text}</div>)}
          </div>
          <div className="chatInput"><input value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="Write your message..." /><button onClick={sendMessage}>↑</button></div>
          <div className="chatNote">Secure project inbox · Real-time backend can be connected</div>
        </div>
      </div>}
    </main>
  );
}