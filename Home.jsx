import { useState } from 'react'
import { Nav, SearchBox } from '../components/ui.jsx'
import { allEvents } from '../data.js'
export default function Home({ go, openEvent, join }) {
  const [q, setQ] = useState('')
  const pages = [['about', 'About'], ['events', 'Events'], ['community', 'Community'], ['contact', 'Contact us']]
  const t = q.trim().toLowerCase()
  const res = t ? [...pages.filter((p) => p[1].toLowerCase().includes(t)).map((p) => ({ k: p[1], s: 'Page', f: () => go(p[0]) })),
    ...allEvents.filter((e) => (e.title + e.place).toLowerCase().includes(t)).map((e) => ({ k: e.title, s: e.date + ' · ' + e.place, f: () => openEvent(e.id) }))] : []
  return <div className="screen"><section className="hero">
    <video src="/hero.mp4" poster="/poster.jpg" autoPlay muted loop playsInline />
    <Nav screen="home" go={go} over right={<SearchBox value={q} onChange={setQ}>{t && <div className="drop">{res.length ? res.map((r, i) => <button key={i} onClick={r.f}>{r.k}<small>{r.s}</small></button>) : <button disabled>No results</button>}</div>}</SearchBox>} />
    <div className="txt"><h1>Age is just a number.</h1><p>Join a vibrant community<br />and discover local activities.</p><button className="btn" onClick={join}>Join us</button></div>
  </section></div>
}
