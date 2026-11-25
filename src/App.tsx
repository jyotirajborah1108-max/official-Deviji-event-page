import { useEffect, useState } from "react";
import { Phone, MapPin, Clock, Heart, BookOpen, Sparkles, ArrowRight, Sun, Flame, Flower2, HelpCircle, ChevronDown } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfmUEWST6BYDwi7VvSzpgliNR4fYBojN1o_jcfyRfjX4c-ssw/viewform?usp=publish-editor";

// OLD DAYS array - replaced by JOURNEY_DAYS in the new 14-Day Journey section
/*
const DAYS = [
  { n: 1, date: "27 Nov", upanishad: "Isha Upanishad", theme: "The Divine in Everything", detail: "Opening the journey — seeing the One who dwells in all, and beginning with surrender." },
  { n: 2, date: "28 Nov", upanishad: "Isha Upanishad", theme: "Action Without Bondage", detail: "How to live fully in the world while remaining free from its chains." },
  { n: 3, date: "29 Nov", upanishad: "Kena Upanishad", theme: "Who Moves the Mind?", detail: "The seeker turns inward: who hears, who thinks, who truly knows?" },
  { n: 4, date: "30 Nov", upanishad: "Kena Upanishad", theme: "Known and Unknown", detail: "Brahman is not an object of the senses — it is the light behind knowing itself." },
  { n: 5, date: "1 Dec", upanishad: "Katha Upanishad", theme: "Nachiketa's Courage", detail: "A young seeker meets death with fearless questions about life beyond life." },
  { n: 6, date: "2 Dec", upanishad: "Katha Upanishad", theme: "The Chariot of the Soul", detail: "Body, senses, mind and Self — the ancient map of the inner journey." },
  { n: 7, date: "3 Dec", upanishad: "Katha Upanishad", theme: "The Path of Shreya", detail: "Choosing what is truly good over what merely pleases for a moment." },
  { n: 8, date: "4 Dec", upanishad: "Mundaka Upanishad", theme: "Two Knowledges", detail: "Lower learning and higher wisdom — and why only one ends sorrow." },
  { n: 9, date: "5 Dec", upanishad: "Mundaka Upanishad", theme: "Two Birds on One Tree", detail: "The soul that tastes the fruit, and the witness who watches in stillness." },
  { n: 10, date: "6 Dec", upanishad: "Mundaka Upanishad", theme: "The Bow and the Arrow", detail: "Om as the bow, the soul as the arrow, and Brahman as the target." },
  { n: 11, date: "7 Dec", upanishad: "Mandukya Upanishad", theme: "Waking, Dream, Sleep", detail: "Three states, one consciousness — tracing awareness through every night and day." },
  { n: 12, date: "8 Dec", upanishad: "Mandukya Upanishad", theme: "Turiya — The Fourth", detail: "Beyond waking, dream and sleep lies the quiet ground of all being." },
  { n: 13, date: "9 Dec", upanishad: "Mandukya Upanishad", theme: "Om — The Whole", detail: "A, U, M and silence — the sound that carries the whole teaching." },
  { n: 14, date: "10 Dec", upanishad: "All Five Upanishads", theme: "Gyanamrit — The Nectar", detail: "The journey gathers into one offering: knowledge ripened into devotion." },
];
*/
const LEARN = [
  { icon: BookOpen, title: "Upanishad Mahatmya", text: "Why the Upanishads are the essence of the four Vedas — and how to read them as guidance for daily life." },
  { icon: Sparkles, title: "Self / World / God", text: "A clear map: who you are, how the world works, and where God stands in both." },
  { icon: Flame, title: "Bhokta–Bhogya–Prerita", text: "The enjoyer, the enjoyed, and the inspirer — three faces of one Brahman." },
  { icon: Heart, title: "This Human Birth", text: "Why discernment and freedom of action make this birth the doorway to God-realisation." },
  { icon: Sun, title: "Triguna to Pancha-Klesha", text: "Name the forces that bind us — gunas, karma, koshas, kleshas — so they loosen their hold." },
  { icon: Flower2, title: "Listen–Contemplate–Receive", text: "Shravan, manan, and receiving — a simple practice for each evening and the days after." },
];
const FAQS = [
  { q: "Is entry really free?", a: "Yes. Every evening at The Seven Knots Hall, Rohtak is free. Reserve a seat so the hall team can welcome you comfortably." },
  { q: "Do I need to register in advance?", a: "Registration helps us plan seating, but walk-in guests are warmly welcome. You can also call 8280342377 or 7077731257." },
  { q: "Can children attend?", a: "Yes — families are welcome. Children who can sit quietly through the 6–8 PM discourse will enjoy the music, stories and atmosphere." },
  { q: "In which language will the talks be given?", a: "The discourses will be in Hindi, with Sanskrit verses explained in simple, accessible language." },
  { q: "Can I join in the middle of the series?", a: "Yes. Each evening stands on its own while building the 14-day journey. Come from any day, 27 Nov to 10 Dec." },
  { q: "What should I bring?", a: "Just yourself, and arrive 30 minutes early. A notebook is helpful if you like to note the verses and reflections." },
];
const WHY = [
  { t: "Shruti", h: "What was heard", d: "What sages received in deep contemplation — not opinion, but direct seeing." },
  { t: "Atma", h: "The Self within", d: "One question at the centre: who am I beneath changing thoughts and roles?" },
  { t: "Moksha", h: "Freedom", d: "A freedom from fear and bondage that begins in this very life." },
];

function Countdown() {
  const target = new Date("2026-11-27T18:00:00+05:30").getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const items = [{ v: d, l: "Days" }, { v: h, l: "Hours" }, { v: m, l: "Minutes" }, { v: s, l: "Seconds" }];
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto min-h-[92px] sm:min-h-[118px]">
        {items.map((it) => (
          <div key={it.l} className="rounded-2xl border border-white/25 bg-white/10 px-2 py-4 sm:py-6 text-center backdrop-blur-sm shadow-[0_18px_40px_rgba(0,0,0,.25)] flex flex-col justify-center">
            <div key={it.v} className="tick font-serif text-3xl sm:text-5xl font-semibold text-white tabular-nums">{String(it.v).padStart(2, "0")}</div>
            <div className="mt-1 text-[10px] sm:text-xs tracking-[0.22em] uppercase text-amber-200">{it.l}</div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm sm:text-base text-amber-100 font-semibold">{diff > 0 ? `Starts in ${d} ${d === 1 ? "day" : "days"} — 27 Nov 2026, 6 PM IST` : "The series has begun — join us at 6 PM in Rohtak"}</p>
    </div>
  );
}

function Heading({ eyebrow, title, hindi, sub, center }: { eyebrow: string; title: string; hindi?: string; sub?: string; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}><span className="h-px w-10 bg-[var(--gold)]" /><span className="eyebrow">{eyebrow}</span>{center && <span className="h-px w-10 bg-[var(--gold)]" />}</div>
      <h2 className="h2 mt-3">{title}</h2>
      {hindi && <p className="font-dev mt-2 text-lg text-[var(--saffron)]">{hindi}</p>}
      {sub && <p className="body mt-4">{sub}</p>}
    </div>
  );
}

export default function App() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }), { threshold: 0.12 });
    els.forEach((el, i) => { (el as HTMLElement).style.transitionDelay = `${Math.min((i % 3) * 80, 160)}ms`; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div data-safe-area-inset-root style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)" }} className="min-h-screen bg-[var(--cream)] text-[var(--brown)] overflow-x-clip">
      <main id="top">
        {/* 2 WATCH — product / invitation video */}
        <section id="watch" className="bg-[var(--cream)]">
          <div className="shell pt-4 pb-2">
            <div className="card overflow-hidden grid md:grid-cols-[1.1fr_.9fr] items-center md:items-stretch !rounded-[16px]">
              <div className="p-6 sm:p-7 flex flex-col justify-center self-center min-w-0">
                <p className="eyebrow">Watch the invitation • Upanishad Gyanamrit • Rohtak</p>
                <h2 className="font-serif text-2xl sm:text-3xl leading-tight font-semibold mt-3"><a href="https://www.youtube.com/watch?v=8bOYzlsuDWI" target="_blank" rel="noopener" className="hover:text-[var(--saffron)] underline decoration-[var(--gold)] underline-offset-4 [overflow-wrap:anywhere]">Upanishad Gyanamrit Rohtak | उपनिषद् ज्ञानामृत | Raseshwari Devi Ji</a></h2>
                <p className="body mt-3">Drink the nectar of profound knowledge with Pujaniya Raseshwari Devi Ji in Rohtak — 27 Nov – 10 Dec 2026, 6–8 PM daily, The Seven Knots Hall, Rohtak.</p>
                <p className="mt-2 text-sm font-bold">Organizer: Braj Gopika Seva Mission • Braj Gopika Sadhana Mission</p>
              </div>
              <div className="p-4 sm:p-6 flex items-center justify-center min-w-0 self-center md:self-stretch">
                <iframe 
                  className="w-full max-w-full overflow-hidden shadow-[0_18px_40px_rgba(74,20,5,.18)]" 
                  style={{ aspectRatio: "16 / 9", borderRadius: "16px", border: "3px solid var(--gold)" }}
                  src="https://www.youtube.com/embed/8bOYzlsuDWI" 
                  title="Upanishad Gyanamrit Rohtak Invitation Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
        {/* 1 INVITATION — HERO, centred */}
        <section className="relative paisley-bg overflow-x-clip">
          <div className="shell relative pt-6 sm:pt-8 pb-12 text-center">
            <figure className="photo-block m-0 mx-auto w-full max-w-[980px] min-w-0">
              <img src="assets/hero-banner.webp" alt="Upanishad Gyanamrit Rohtak banner — 27th November to 10th December 2026, 6 pm to 8 pm" className="block w-full max-w-full h-auto rounded-[16px] border border-[var(--line)] shadow-[0_18px_40px_rgba(74,20,5,.12)]" style={{ objectFit: "contain" }} />
            </figure>
            <div className="hero-glow left-1/2 -translate-x-1/2 top-2" aria-hidden="true" />
            <div className="relative hero-in max-w-3xl mx-auto mt-8">
              <p className="eyebrow">Braj Gopika Sadhana Mission presents</p>
              <p className="mt-2 text-[12px] font-bold tracking-[0.18em] text-[var(--brown-soft)]">ORGANIZER: BRAJ GOPIKA SEVA MISSION</p>
              <h1 className="font-serif mt-4 text-[clamp(3rem,8vw,5.6rem)] leading-[0.95] font-semibold">Drink the Nectar<br /><span className="italic text-[var(--saffron)]">of the Upanishads</span></h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold">Upanishad Gyanamrit — <span className="font-dev">उपनिषद् ज्ञानामृत</span></p>
              <p className="body mt-5 mx-auto max-w-2xl">Fourteen evenings with Pujaniya Raseshwari Devi Ji in Rohtak. Sit with the Upanishads — slowly, simply, in the company of devotion. Come as you are. Leave a little lighter.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                {[["27 Nov – 10 Dec 2026", "14 days"], ["Daily • 6:00 PM – 8:00 PM", "प्रतिदिन शाम 6–8 बजे"], ["The Seven Knots Hall, Rohtak", "द सेवन नोट्स हॉल"]].map(([a, b]) => (
                  <div key={a} className="pill"><span>{a}</span><span className="font-dev font-medium text-[var(--saffron)]">{b}</span></div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener" className="btn btn-primary">Reserve Free Seat <ArrowRight size={18} /></a>
                <a href="tel:8280342377" className="btn btn-outline"><Phone size={17} /> Call Now</a>
              </div>
              <p className="mt-5 text-sm text-[var(--muted)]">Free entry &nbsp;•&nbsp; All are welcome &nbsp;•&nbsp; <a className="underline decoration-[var(--gold)] underline-offset-4 font-semibold text-[var(--brown)]" href="https://raseshwarideviji.org" target="_blank" rel="noopener">raseshwarideviji.org</a></p>
              <div className="sway mt-2 text-4xl" aria-hidden="true">🪷</div>
            </div>
          </div>
        </section>

        {/* 3 WHY UPANISHADS */}
        <section id="why" className="section">
          <div className="shell">
            <div className="reveal"><Heading eyebrow="Why Upanishads" title="What are the Upanishads?" sub="They are the fragrance of the Vedas — dialogues between seekers and sages on the deepest questions of life." /></div>
            <div className="mt-8 grid md:grid-cols-3 gap-4 items-stretch">
              {WHY.map((c) => (
                <article key={c.t} className="reveal card p-6 flex flex-col"><p className="font-serif text-4xl text-[var(--saffron)]">{c.t}</p><h3 className="mt-3 font-bold text-lg">{c.h}</h3><p className="body mt-2 !text-[16px]">{c.d}</p></article>
              ))}
            </div>
            <div className="reveal mt-4 card p-6 sm:p-7 flex flex-col md:flex-row md:items-center gap-5 justify-between">
              <div><h3 className="font-serif text-2xl font-semibold">Who should attend?</h3><p className="body mt-1 !text-[16px]">First-time seekers, lifelong students, families, elders and young people — anyone longing for clarity, peace and devotion.</p></div>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener" className="btn bg-[var(--brown)] text-white shrink-0">Come for one evening</a>
            </div>
          </div>
        </section>

        {/* 4 CORE MESSAGE — Drink the Nectar + Verse + Human birth */}
        <section id="core-message" className="section bg-[var(--ivory)] border-y border-[var(--line)]">
          <div className="shell">
            <div className="reveal"><Heading center eyebrow="The Core Message" title="Drink the Nectar of the Upanishads" hindi="उपनिषद् ज्ञानामृत" sub="Not theory alone — clarity that awakens the soul." /></div>
            <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_420px]">
              <div className="reveal">
                <h3 className="font-serif text-3xl leading-tight font-semibold">The crown jewel of Vedic wisdom</h3>
                <p className="body mt-4">The Upanishads are the essence of the four Vedas — a life manual for humanity. Not sectarian, but universal: clarity about the Self, the World, and God.</p>
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  <div className="card p-5"><span className="font-serif text-4xl text-[var(--saffron)]">1</span><h4 className="font-bold mt-2">Crown jewel</h4><p className="text-sm leading-relaxed text-[var(--brown-soft)] mt-1">The essence of the four Vedas, in plain language.</p></div>
                  <div className="card p-5"><span className="font-serif text-4xl text-[var(--saffron)]">2</span><h4 className="font-bold mt-2">Universal</h4><p className="text-sm leading-relaxed text-[var(--brown-soft)] mt-1">For every seeker — Self, World, and God.</p></div>
                  <div className="card p-5"><span className="font-serif text-4xl text-[var(--saffron)]">3</span><h4 className="font-bold mt-2">Dispels doubt</h4><p className="text-sm leading-relaxed text-[var(--brown-soft)] mt-1">The complete philosophy of Sanatan Vedic Dharma.</p></div>
                </div>
                <div className="mt-6 rounded-[16px] bg-[var(--brown)] text-[#FFF8EC] p-6 sm:p-7">
                  <p className="text-[12px] font-bold tracking-[0.24em] text-[var(--gold)]">THE OPENING VERSE • SHVETASHVATARA UPANISHAD 1.12</p>
                  <blockquote className="font-dev mt-4 text-xl sm:text-2xl leading-relaxed">एतज्ज्ञेयं नित्यमेवात्मसंस्थं नातः परं वेदितव्यं हि किंचित् । भोक्ता भोग्यं प्रेरितारं च मत्वा सर्वं प्रोक्तं त्रिविधं ब्रह्ममेतत् ॥</blockquote>
                  <p className="mt-4 font-serif italic text-lg leading-relaxed text-amber-100">"etaj jñeyaṃ nityam evātmasaṃsthaṃ nātaḥ paraṃ veditavyaṃ hi kiṃcit. bhoktā bhogyaṃ preritāraṃ ca matvā sarvaṃ proktaṃ trividhaṃ brahmam etat"</p>
                  <p className="mt-4 leading-relaxed text-white/85"><span className="font-bold text-white">Meaning:</span> Know this eternal truth seated in the Self; there is nothing higher to know. Understanding the enjoyer (Bhokta), the enjoyed (Bhogya), and the inspirer (Prerita) — all this is the threefold Brahman.</p>
                </div>
                <div className="mt-4 rounded-[16px] bg-[var(--gold-soft)]/60 border border-[var(--gold)]/50 p-6">
                  <p className="eyebrow">Why this matters</p>
                  <h3 className="font-serif text-2xl font-semibold mt-2">This human birth must not be wasted</h3>
                  <p className="body mt-3 !text-[16px]">We have wandered through birth and death seeking happiness, yet suffering through triguna, trikarma, pancha-kosha and pancha-klesha. Only the human body gives both Gyan Shakti (viveka) and freedom of action — the two conditions for God-realisation.</p>
                </div>
              </div>
              <figure className="reveal photo-block m-0 mx-auto w-full max-w-[480px] min-w-0 self-start lg:sticky lg:top-24">
                <div className="photo-frame arch"><div className="arch overflow-hidden bg-white"><img src="assets/seated-stage.webp" alt="H.H. Raseshwari Devi Ji seated on a white stage in yellow robes" className="w-full max-w-full h-auto" style={{ objectFit: "contain" }} /></div></div>
                <figcaption className="caption">Delivering a discourse</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 5 WHAT YOU WILL LEARN */}
        <section className="section">
          <div className="shell">
            <div className="reveal"><Heading eyebrow="The teaching" title="What you will learn" sub="Wisdom you can carry into ordinary mornings, difficult conversations and quiet moments." /></div>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
              {LEARN.map((l) => (<article key={l.title} className="reveal card p-6 flex flex-col"><span className="w-11 h-11 rounded-full bg-orange-100 grid place-items-center text-[var(--saffron)]"><l.icon size={21} /></span><h3 className="mt-4 font-bold text-lg">{l.title}</h3><p className="mt-2 text-[var(--brown-soft)] leading-relaxed text-[15px]">{l.text}</p></article>))}
            </div>
          </div>
        </section>

        {/* 6 SPEAKER */}
        <section id="speaker" className="section bg-[var(--ivory)] border-y border-[var(--line)]">
          <div className="shell grid lg:grid-cols-2 gap-10 items-start">
            <figure className="reveal photo-block m-0 mx-auto w-full max-w-[480px] min-w-0">
              <div className="photo-frame arch"><div className="arch overflow-hidden bg-white"><img src="assets/close-up.webp" alt="H.H. Raseshwari Devi Ji smiling at a microphone" className="w-full max-w-full h-auto" style={{ objectFit: "contain" }} /></div></div>
              <figcaption className="caption">H.H. Raseshwari Devi Ji</figcaption>
              <p className="text-center mt-4 font-serif italic text-lg">"Knowledge ripens only when it becomes love."</p>
            </figure>
            <div className="reveal">
              <Heading eyebrow="The Speaker" title="H.H. Raseshwari Devi Ji" hindi="परम पूज्य रासेश्वरी देवी जी" sub="Foremost preacher of Jagadguru Shri Kripalu Ji Maharaj. She has presented the complete philosophy of Sanatan Vedic Dharma that dispels doubts about Sanatan Dharma. Honoured with the Adarsh Yuva Adhyatmik Guru award by MIT WPU, Pune." />
              <p className="mt-4 text-sm font-bold">Organizer: Braj Gopika Seva Mission • Braj Gopika Sadhana Mission</p>
              <div className="mt-5 flex flex-wrap gap-2">{["Braj Gopika Sadhana Mission", "Upanishad Katha", "Shri Krishna Bhakti", "Sanatan Vedic Wisdom"].map((t) => <span key={t} className="pill">{t}</span>)}</div>
              <div className="mt-6 card p-5"><p className="text-xs tracking-widest font-bold text-[var(--saffron)]">SAYINGS OF THE SOUL</p><p className="font-serif text-xl sm:text-2xl leading-snug mt-2">"When the heart turns toward Shyam, even ordinary days begin to shine."</p></div>
              <a href="https://raseshwarideviji.org" target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 font-bold text-[var(--saffron)]">Learn more at raseshwarideviji.org <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        {/* BLUE SHYAM — countdown */}
        <section aria-label="Shyam — the Krishna moment" className="relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg,#0B1E4A 0%,#122A6B 58%,#0A1738 100%)" }}>
          <div className="absolute inset-0 blue-stars opacity-70" aria-hidden="true" />
          <div className="absolute right-[8%] top-[10%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#FFF3C4] moon" aria-hidden="true" />
          <div className="absolute left-[6%] top-[24%] text-5xl sm:text-7xl rotate-[-18deg] opacity-90 feather" aria-hidden="true">🪶</div>
          <div className="absolute right-[10%] bottom-[24%] text-4xl opacity-80 feather" aria-hidden="true">🪈</div>
          <div className="relative shell pt-14 sm:pt-16 pb-28 text-center">
            <p className="text-[12px] tracking-[0.32em] text-amber-300 font-bold">SHYAM — THE KRISHNA MOMENT</p>
            <h2 className="font-serif text-4xl sm:text-6xl mt-4 leading-[1.03]">Why Blue?<br /><span className="italic text-amber-200">Because Krishna is Shyam.</span></h2>
            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-blue-100/90">Neel is not a corporate colour here. It is the colour of the evening sky, of the Yamuna at dusk, of Shyam himself — deep, quiet and infinite. This one blue passage is a pause: a moment to breathe before wisdom begins.</p>
            <div className="mt-9"><Countdown /></div>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener" className="btn btn-primary mt-6 max-w-full [white-space:normal] h-auto min-h-[48px] py-3 text-center"><span className="sm:hidden">Reserve Your Seat</span><span className="hidden sm:inline">Reserve your seat in Shyam's gathering</span></a>
          </div>
          <div className="wave-drift absolute bottom-0 left-[-2%] w-[104%]">
            <svg className="block w-full h-[64px] sm:h-[86px] text-[#FFF8EC]" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0,55 C180,15 300,85 480,55 C660,25 780,80 960,50 C1140,20 1290,70 1440,40 L1440,90 L0,90 Z" /><path fill="#F2A007" opacity=".28" d="M0,70 C220,35 420,88 680,62 C940,36 1180,82 1440,58 L1440,90 L0,90 Z" /></svg>
          </div>
        </section>

        {/* 7B THE 14-DAY JOURNEY — New phase-based schedule */}
        <section id="schedule" className="section bg-[#FFF8EC]">
          <div className="shell">
            <div className="reveal text-center">
              <h2 className="text-3xl font-serif text-[#4A2310]">The 14-Day Journey</h2>
              <p className="max-w-3xl mx-auto mt-3">
                Days 1-3 lay the foundation → Days 4-8 dismantle intellectual pride and map the inner enemies →
                Days 9-10 establish the Guru and surrender → Days 11-14 crown the journey.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-5xl mx-auto">
              {(() => {
                const PHASES = {
                  1: { name: "The Foundation", dates: "27-29 Nov", desc: "Why Upanishads, why this human birth, what the ultimate aim is." },
                  2: { name: "Dismantling Pride", dates: "30 Nov-4 Dec", desc: "Dismantling intellectual pride, mapping mind, ego, desire, anger." },
                  3: { name: "The Guru and Surrender", dates: "5-6 Dec", desc: "Establishing the Guru, and the meaning of surrender." },
                  4: { name: "The Crown", dates: "7-10 Dec", desc: "Karma Yoga, devotion over intellect, selfless love of Shri Krishna." },
                };
                
                const JOURNEY_DAYS = [
                  { day: 1, date: "27 Nov", phase: 1 }, { day: 2, date: "28 Nov", phase: 1 },
                  { day: 3, date: "29 Nov", phase: 1 }, { day: 4, date: "30 Nov", phase: 2 },
                  { day: 5, date: "1 Dec", phase: 2 },  { day: 6, date: "2 Dec", phase: 2 },
                  { day: 7, date: "3 Dec", phase: 2 },  { day: 8, date: "4 Dec", phase: 2 },
                  { day: 9, date: "5 Dec", phase: 3 },  { day: 10, date: "6 Dec", phase: 3 },
                  { day: 11, date: "7 Dec", phase: 4 }, { day: 12, date: "8 Dec", phase: 4 },
                  { day: 13, date: "9 Dec", phase: 4 }, { day: 14, date: "10 Dec", phase: 4 },
                ];

                const selectedJourney = JOURNEY_DAYS.find(d => d.day === selectedDay) || JOURNEY_DAYS[0];
                const phase = PHASES[selectedJourney.phase as keyof typeof PHASES];

                return (
                  <>
                    {JOURNEY_DAYS.map(d => {
                      const isInSelectedPhase = d.phase === selectedJourney.phase;
                      const isClicked = d.day === selectedDay;
                      return (
                        <button
                          key={d.day}
                          data-phase={d.phase}
                          onClick={() => setSelectedDay(d.day)}
                          aria-pressed={isClicked}
                          className={`px-3 py-2 rounded-full text-sm border transition
                            ${isInSelectedPhase ? "bg-[#E8761A] text-white border-[#E8761A]" : "bg-white text-[#4A2310] border-[#E8C9A0]"}
                            ${isClicked ? "ring-2 ring-[#4A2310] font-bold" : ""}`}
                        >
                          Day {d.day} • {d.date}
                        </button>
                      );
                    })}
                    
                    {/* DETAIL PANEL — ALWAYS rendered, never conditional */}
                    <div id="day-detail-panel" className="w-full max-w-5xl mt-6 grid md:grid-cols-[32%_68%] rounded-2xl overflow-hidden border border-[#E8C9A0] shadow-sm">
                      <div className="bg-[#2B1408] p-5">
                        <p className="text-xs tracking-widest text-[#F5C97A]">DAY {selectedJourney.day} • {selectedJourney.date.toUpperCase()}</p>
                        <p className="text-xs mt-2 text-white/70">PHASE {selectedJourney.phase} — {phase.name.toUpperCase()}</p>
                        <h3 className="text-[26px] leading-[1.2] font-serif text-white mt-2">{phase.name}</h3>
                        <p className="text-sm text-white/80 mt-2">Daily 6 PM to 8 PM • The Seven Knots Hall, Rohtak</p>
                      </div>
                      <div className="bg-white p-5">
                        <p className="text-xs tracking-widest text-[#E8761A]">
                          DAY {selectedJourney.day} — {selectedJourney.date.toUpperCase()} • PHASE {selectedJourney.phase} — {phase.name.toUpperCase()}
                        </p>
                        <p className="mt-2 text-[#4A2310]">{phase.desc}</p>
                        <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="inline-block mt-3 bg-[#E8761A] text-white px-5 py-2.5 rounded-full">
                          Reserve for Phase {selectedJourney.phase} →
                        </a>
                        <p className="text-xs mt-2 text-neutral-500">All days are free • Arrive 30 minutes early</p>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        {/* 8 VENUE */}
        <section id="venue" className="section bg-[var(--ivory)] border-y border-[var(--line)]">
          <div className="shell">
            <div className="reveal"><Heading eyebrow="Venue" title="The Seven Knots Hall, Rohtak" sub="A welcoming hall for families, elders and first-time visitors. Arrive 30 minutes early to settle in." /></div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4 items-stretch">
              <div className="reveal card p-5 flex gap-3 items-start"><MapPin className="text-[var(--saffron)] shrink-0 mt-0.5" /><div><b>The Seven Knots Hall</b><p className="text-sm text-[var(--brown-soft)] mt-1">Rohtak • Free entry • Family welcome</p></div></div>
              <div className="reveal card p-5 flex gap-3 items-start"><Clock className="text-[var(--saffron)] shrink-0 mt-0.5" /><div><b>Daily • 6:00 PM – 8:00 PM</b><p className="font-dev text-sm text-[var(--brown-soft)] mt-1">प्रतिदिन शाम 6 बजे से 8 बजे तक</p></div></div>
              <a href="tel:8280342377" className="reveal card p-5"><span className="text-xs font-bold text-[var(--muted)]">CALL</span><span className="block font-bold mt-1 text-lg">8280342377</span></a>
              <a href="tel:7077731257" className="reveal card p-5"><span className="text-xs font-bold text-[var(--muted)]">CALL</span><span className="block font-bold mt-1 text-lg">7077731257</span></a>
            </div>
            <div className="mt-5"><a href="https://www.google.com/maps/search/?api=1&query=The+Seven+Knots+Hall+Rohtak" target="_blank" rel="noopener" className="btn btn-primary">Get Directions <ArrowRight size={17} /></a></div>
          </div>
        </section>

        {/* 8B MAP SECTION — Haryana map */}
        <section id="map" className="section bg-[#FFF8EC]">
          <div className="shell">
            <div className="reveal text-center">
              <p className="text-xs tracking-[0.2em] text-[#E8761A]">HARYANA • ROHTAK</p>
              <h2 className="text-3xl font-serif text-[#4A2310] mt-2">Find Rohtak on the Map</h2>
            </div>
            <img
              src="assets/haryana_rohtak_map.webp"
              alt="Map of Haryana with Rohtak district highlighted in saffron and pinned"
              className="reveal w-full max-w-4xl mx-auto mt-6 rounded-2xl border border-[#E8C9A0] shadow-sm"
            />
            <p className="reveal text-center mt-3 text-[#4A2310]">
              Rohtak, Haryana — The Seven Knots Hall, Near Old ITI Ground, Circular Road, Rohtak.
            </p>
            <p className="reveal text-center text-sm text-neutral-500">Rohtak is about 70 km northwest of Delhi.</p>
          </div>
        </section>

        {/* 8C HOW TO REACH */}
        <section id="how-to-reach" className="section bg-[#FFF8EC]">
          <div className="shell">
            <div className="reveal text-center">
              <h3 className="text-2xl font-serif text-[#4A2310]">How to Get There</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-6">
              {[
                {
                  n: "1. By Bus",
                  body: "Haryana Roadways + DTC from ISBT Kashmere Gate / Sarai Kale Khan, Delhi to Rohtak Bus Stand, every 30–60 min, about 2–3 hours, ~70 km. Then a short auto to Circular Road, Near Old ITI Ground. Arrive 30 minutes early.",
                },
                {
                  n: "2. By Flight",
                  body: "No commercial airport in Rohtak. Nearest: Indira Gandhi International Airport (DEL), Delhi, about 70–72 km away. Then taxi / bus to Rohtak, about 2–2.5 hours by road. Then auto to Circular Road.",
                },
                {
                  n: "3. By Train",
                  body: "Rohtak Junction (ROK). Frequent trains from New Delhi (NDLS) / Old Delhi (DLI), about 1.5–2.5 hours, ~70 km. Then a short auto to The Seven Knots Hall, Near Old ITI Ground, Circular Road.",
                },
              ].map(c => (
                <div key={c.n} className="reveal bg-white rounded-2xl border border-[#E8C9A0] p-5 shadow-sm flex flex-col">
                  <h4 className="font-serif text-xl text-[#4A2310]">{c.n}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{c.body}</p>
                </div>
              ))}
            </div>
            <p className="reveal text-center mt-6 text-sm">
              For help reaching the hall, call{" "}
              <a href="tel:+918280342377" className="text-[#E8761A] font-semibold">8280342377</a>{" "}
              / <a href="tel:+917077731257" className="text-[#E8761A] font-semibold">7077731257</a>
            </p>
          </div>
        </section>

        {/* 9 FAQ */}
        <section id="faq" className="section">
          <div className="shell max-w-[880px]">
            <div className="reveal"><Heading eyebrow="Questions" title="Before you come" /></div>
            <div className="mt-8 space-y-3">{FAQS.map((f, i) => (
              <div key={f.q} className="reveal card overflow-hidden !shadow-none">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} className="w-full flex justify-between items-center gap-4 p-5 text-left font-bold min-h-[64px]"><span className="flex gap-3 items-start"><HelpCircle size={20} className="text-[var(--saffron)] shrink-0 mt-0.5" />{f.q}</span><ChevronDown className={`shrink-0 transition ${openFaq === i ? "rotate-180" : ""}`} /></button>
                <div className={`faq-panel ${openFaq === i ? "open" : ""}`}><div className="faq-inner"><p className="px-5 pb-5 pl-[52px] leading-relaxed text-[var(--brown-soft)]">{f.a}</p></div></div>
              </div>
            ))}</div>
          </div>
        </section>

        {/* 10 REGISTER */}
        <section id="register" className="relative overflow-hidden" style={{ background: "linear-gradient(135deg,#FFF1D6,#FFD9A8 55%,#FFB86B)" }}>
          <div className="shell py-14 sm:py-20">
            <div className="reveal mx-auto max-w-2xl text-center">
              <p className="text-xs font-extrabold tracking-[0.26em] text-[#8A2A00]">FREE ENTRY • ROHTAK • ORGANIZER: BRAJ GOPIKA SEVA MISSION</p>
              <h2 className="font-serif text-4xl sm:text-6xl leading-[1.02] mt-3">Reserve a Free Seat</h2>
              <p className="body mt-4 !text-[#6D2C0B]">Free entry • 27th Nov to 10th Dec, 2026 • 6 PM to 8 PM • The Seven Knots Hall, Rohtak</p>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener" className="btn btn-primary mt-7 w-full sm:w-auto min-w-0 [white-space:normal] h-auto min-h-[48px] py-3 text-center">Reserve Your Seat →</a>
              <p className="mt-4 text-sm text-[#6D2C0B]">Join via Official Form — this opens the official Google Form.</p>
              <p className="mt-4 text-sm font-semibold text-[#6D2C0B]">Or call <a className="font-bold text-[var(--brown)] underline underline-offset-2" href="tel:8280342377">8280342377</a> • <a className="font-bold text-[var(--brown)] underline underline-offset-2" href="tel:7077731257">7077731257</a></p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
