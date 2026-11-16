import { useRef, useState } from 'react'
import { Nav, SearchBox, Icon, Modal, Check } from '../components/ui.jsx'
import { events, allEvents } from '../data.js'
function Rail({ title, list, open }) {
  const r = useRef()
  const mv = (d) => r.current.scrollBy({ left: d * 375 * 2, behavior: 'smooth' })
  return <><h2>{title}</h2><div className="rw">
    <button className="arr l" aria-label="Previous" onClick={() => mv(-1)}><Icon n="l" s={28} /></button>
    <div className="rail" ref={r}>{list.map((e) => <button className="ec" key={e.id} onClick={() => open(e.id)}>
      {e.img ? <img className="im" src={e.img} alt="" /> : <div className="im" />}<h3>{e.title}</h3>
      <div className="m"><span><Icon n="cal" s={22} />{e.date}</span><span><Icon n="clock" s={22} />{e.time}</span></div><div className="pl"><Icon n="pin" s={22} />{e.place}</div></button>)}</div>
    <button className="arr r" aria-label="Next" onClick={() => mv(1)}><Icon n="r" s={28} /></button></div></>
}
export function Events({ go, open }) {
  const [q, setQ] = useState(''); const t = q.trim().toLowerCase()
  const f = (l) => l.filter((e) => !t || (e.title + e.place + e.date).toLowerCase().includes(t))
  const tr = f(events.trips), cl = f(events.classes)
  return <div className="screen"><Nav screen="events" go={go} right={<SearchBox value={q} onChange={setQ} />} />
    <div className="ev"><h1 className="t">Events for seniors</h1>
      {!tr.length && !cl.length && <p className="none">No events match “{q}”.</p>}
      {!!tr.length && <Rail title="Trips" list={tr} open={open} />}{!!cl.length && <Rail title="Classes" list={cl} open={open} />}</div></div>
}
export function EventDetail({ go, id, regs, register, toast }) {
  const e = allEvents.find((x) => x.id === id) || events.classes[3]; const done = regs.includes(e.id); const [m, setM] = useState(false)
  return <div className="screen"><Nav screen="event" go={go} /><div className="detail"><div>
    <button className="back" onClick={() => go('events')}>← All events</button>
    <h1 className="t">Upcoming events</h1><h2>{e.heading || e.title}</h2><p>{e.desc}</p>
    <div className="meta"><span><Icon n="pin" s={32} />{e.place}</span><i /><span><Icon n="cal" s={32} />{e.date}</span><i /><span><Icon n="clock" s={32} />{e.time}</span></div>
    <button className={'btn' + (done ? ' ghost' : '')} onClick={() => !done && setM(true)}>{done ? '✓ Registered' : 'Register now'}</button></div>
    {e.img ? <img className="big" src={e.img} alt={e.title} /> : <div className="big" style={{ height: '30rem', borderRadius: '.6rem', background: 'linear-gradient(160deg,#9ec9d8,#3f86a6)' }} />}</div>
    {m && <Modal onClose={() => setM(false)}><Check /><h3>Almost there!</h3><p>{e.heading || e.title}<br />{e.date} · {e.time} · {e.place}</p>
      <button className="btn" onClick={() => { register(e.id); setM(false); toast('Registration confirmed ✓') }}>Confirm registration</button><button className="btn ghost" onClick={() => setM(false)}>Cancel</button></Modal>}</div>
}
