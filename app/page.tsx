import Link from "next/link";
import { getPublishedTrends } from "@/lib/trends";

const categories = ["Comedy", "Music & dance", "Relationships", "Student life", "Fashion & beauty", "Lifestyle", "Challenges", "Art & creativity"];
const stories = [
  { name: "Superstar Jani", origin: "Zimbabwe", tag: "A catchphrase becomes a cultural moment", text: "A playful encounter in Ethiopia grew into a repeatable phrase, a sound and an ongoing connection with Ethiopian viewers.", href: "https://www.tiktok.com/@superstarjani", label: "See Jani's TikTok" },
  { name: "Dylan Page", origin: "United Kingdom", tag: "A community gets the world's attention", text: "Ethiopian viewers rallied around a major national story and brought an international news creator into the conversation.", href: "https://www.tiktok.com/@dylan.page", label: "See Dylan's TikTok" },
  { name: "Kalu Putik", origin: "Ethiopia", tag: "Local creativity travels globally", text: "A distinctive upcycled-fashion style became a reference point far beyond its original audience—and raised an important question about giving creators credit.", href: "https://www.tiktok.com/@kalu.putic", label: "See Kalu's TikTok" },
  { name: "Alex Reese", origin: "United States", tag: "Curiosity opens a cultural doorway", text: "Language, music and cultural reactions can give creators a fresh way to connect with Ethiopian viewers without abandoning their own voice.", href: "https://www.tiktok.com/@thealexreese", label: "See Alex's TikTok" },
];

export default async function Home() {
  const trends = await getPublishedTrends();
  return <main>
    <nav className="nav wrap"><a className="brand" href="/"><span className="brand-mark">E</span><span>ETHIOPIAN<span className="brand-light"> TRENDS</span></span></a><div className="nav-links"><a href="#discover">Discover</a><a href="#stories">Creator stories</a><a href="#how">How it works</a><a className="nav-cta" href="#discover">Find your next trend <span>↗</span></a></div></nav>
    <section className="hero">
      <div className="hero-glow"></div><div className="hero-inner wrap">
        <div className="hero-copy"><div className="eyebrow"><span className="live-dot"></span> THE WORLD IS SCROLLING. ETHIOPIA IS WATCHING.</div>
          <h1>WE MAKE YOU<br/><em>FAMOUS</em> IN<br/>ETHIOPIA<span className="period">.</span></h1>
          <p className="hero-lead">Your next audience might be somewhere you haven’t looked yet. Discover the TikTok trends, sounds and creative moments moving across Ethiopia—and make them your own.</p>
          <div className="hero-actions"><a className="button button-lime" href="#discover">Explore Ethiopian trends <span>↗</span></a><a className="text-link" href="#stories">Meet the creators <span>↓</span></a></div>
          <p className="hero-note">A bold invitation to discover a new audience—not a promise of fame or viral views.</p>
        </div>
        <div className="hero-art" aria-label="Graphic collage celebrating Ethiopian TikTok trends">
          <div className="art-ring ring-one"></div><div className="art-ring ring-two"></div>
          <div className="art-sticker sticker-top">NEW AUDIENCE<br/>UNLOCKED ✳</div>
          <div className="art-card"><div className="art-card-top"><span>ETHIOPIA / 001</span><span>✳</span></div><div className="art-flag"><i></i><i></i><i></i></div><div className="art-word">MAKE<br/><em>YOUR</em><br/>MOVE.</div><div className="art-wave">▂ ▅ ▃ ▇ ▄ ▆ ▂ ▅ ▇ ▃</div><div className="art-card-bottom"><span>DISCOVER · ADAPT · CREATE</span><span>🇪🇹</span></div></div>
          <div className="art-sticker sticker-side">♫ SOUND<br/>ON</div><div className="art-sticker sticker-bottom">NOT FROM HERE?<br/>EVEN BETTER.</div>
        </div>
      </div>
      <div className="hero-marquee"><div>ONE COUNTRY <b>✳</b> MANY LANGUAGES <b>✳</b> FRESH CREATIVE ENERGY <b>✳</b> YOUR NEXT AUDIENCE <b>✳</b> ONE COUNTRY <b>✳</b> MANY LANGUAGES <b>✳</b></div></div>
    </section>
    <section className="intro wrap"><div className="intro-label">01 / THE OPPORTUNITY</div><div><h2>You don’t have to be Ethiopian<br/>to be <em>part of the moment.</em></h2><p>Ethiopian TikTok has its own sounds, jokes, dances, stories and creative formats. We help creators outside Ethiopia discover what’s happening, understand the context and find a way to join in—without pretending to be someone they’re not.</p></div></section>
    <section id="discover" className="discover-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow dark-eyebrow">02 / THE DISCOVERY BOARD</div><h2>Find something<br/><em>worth recreating.</em></h2></div><p>Explore formats from across Ethiopia’s regions and languages. Every published guide is built around source references, context and a practical recreation idea.</p></div>
      <div className="category-row">{categories.map(c=><span key={c}>{c}</span>)}</div>
      {trends.length ? <div className="trend-grid">{trends.map((t,i)=><article className="trend-card" key={t.id}><div className={"trend-art trend-art-"+(i%4)}><span>{t.category}</span><b>{["↗","♫","✳","◉"][i%4]}</b><small>{t.lifecycle}</small></div><div className="trend-copy"><div className="trend-meta">{t.language || "Language open"} · {t.region || "Ethiopia"}</div><h3>{t.title}</h3><p>{t.summary}</p><Link href={"/trends/"+t.slug}>Open the creator playbook ↗</Link>{t.tiktok_url && <a href={t.tiktok_url} target="_blank" rel="noreferrer">Watch original video ↗</a>}</div></article>)}</div> : <div className="curation"><div className="curation-symbol">✳</div><div><h3>The first trend guides are being curated.</h3><p>We’re checking original videos, repeat recreations, language and context before publishing. No made-up trends. No uncredited originals.</p></div><span className="curation-status">CURATION IN PROGRESS</span></div>}
      <div className="section-footnote">Trend status can change quickly. Always check the original post and adapt the idea to your own style.</div>
    </div></section>
    <section id="stories" className="stories-section"><div className="wrap"><div className="section-head stories-head"><div><div className="eyebrow">03 / REAL CREATOR JOURNEYS</div><h2>Different origins.<br/><em>One shared feed.</em></h2></div><p>These stories show different ways Ethiopian culture and audiences enter the global creator conversation. They are inspiration—not guarantees of what will happen to your next post.</p></div><div className="story-grid">{stories.map((s,i)=><article className="story-card" key={s.name}><div className={"story-number story-"+i}>0{i+1}</div><div className="story-origin">{s.origin}</div><h3>{s.name}</h3><div className="story-tag">{s.tag}</div><p>{s.text}</p><a href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a></article>)}</div></div></section>
    <section id="how" className="how-section"><div className="wrap how-inner"><div><div className="eyebrow">04 / YOUR FIRST MOVE</div><h2>Keep your style.<br/><em>Explore a new scene.</em></h2><p>You don’t need to move to Ethiopia, change your niche or speak every local language. Start with one trend that genuinely interests you.</p><a className="button button-lime" href="#discover">Choose a trend <span>↗</span></a></div><div className="how-steps"><div><span>01</span><div><b>DISCOVER</b><p>Find a sound, format or challenge that catches your eye.</p></div></div><div><span>02</span><div><b>UNDERSTAND</b><p>Use the source video and guide to understand the context and key details.</p></div></div><div><span>03</span><div><b>MAKE IT YOURS</b><p>Recreate it in your own voice. Credit the originator. Share it with your audience.</p></div></div><div><span>04</span><div><b>SEE WHAT HAPPENS</b><p>Learn from real audience response. Decide whether you want to explore more.</p></div></div></div></div></section>
    <section className="closing"><div className="wrap closing-inner"><div className="closing-stamp">🇪🇹<br/>YOUR<br/>NEXT<br/>SCENE</div><div><div className="eyebrow">THE WORLD IS BIGGER THAN YOUR FOR YOU PAGE</div><h2>There’s more to discover.<br/><em>Start with Ethiopia.</em></h2><a className="button button-dark" href="#discover">Explore the trends <span>↗</span></a></div></div></section>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="/"><span className="brand-mark">E</span> ETHIOPIAN TRENDS</a><span>Independent trend discovery for creators everywhere.</span><span>Original creators deserve credit. © {new Date().getFullYear()}</span></div></footer>
  </main>;
}