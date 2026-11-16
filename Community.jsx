import { useState } from 'react'
import { Nav, SearchBox, Icon } from '../components/ui.jsx'
import { posts as P0, upcoming, messages as M0 } from '../data.js'
import feed from '../assets/n_feed.png'; import comm from '../assets/n_comm.png'; import ev from '../assets/n_events.png'; import msg from '../assets/n_msg.png'
function Post({ p, toast }) {
  const [liked, setL] = useState(false), [open, setO] = useState(false)
  return <article className="post"><div className="ph2">{p.av ? <img className="av" src={p.av} alt="" /> : <span className="av">{p.name[0]}</span>}<div><b>{p.name}</b><small>{p.ago}</small></div></div>
    <p>{p.text}</p><img className="pi" src={p.img} alt="" />
    <div className="acts"><button className={liked ? 'liked' : ''} onClick={() => setL(!liked)}><Icon n="thumb" />{liked ? 'Liked · ' + (p.likes + 1) : 'Like'}</button>
      <button onClick={() => setO(!open)}>{p.comments.length} comments</button><button onClick={() => toast('Link copied to clipboard')}><Icon n="share" />Share</button></div>
    {open && <div className="cm">{p.comments.length ? p.comments.map(([n, t], i) => <p key={i}><b>{n}</b> {t}</p>) : <p>Be the first to comment.</p>}</div>}</article>
}
function Messages() {
  const [ms, setMs] = useState(M0.map((m) => ({ ...m }))); const [o, setO] = useState(null)
  const send = (i, t) => setMs(ms.map((m, k) => k === i ? { ...m, thread: [...m.thread, ['me', t]], replies: [], last: t } : m))
  return <div>{ms.map((m, i) => <div className="thread" key={m.id}><button className="row" onClick={() => setO(o === i ? null : i)}><b>{m.name}</b><small>{m.last}</small></button>
    {o === i && <div>{m.thread.map(([w, t], k) => <div key={k} className={'bub' + (w === 'me' ? ' me' : '')}>{t}</div>)}<div className="chips">{m.replies.map((r) => <button key={r} onClick={() => send(i, r)}>{r}</button>)}</div></div>}</div>)}</div>
}
export default function Community({ go, openEvent, toast }) {
  const [tab, setTab] = useState('feed'), [q, setQ] = useState(''); const t = q.trim().toLowerCase()
  const list = P0.filter((p) => !t || (p.text + p.name).toLowerCase().includes(t))
  const S = [['feed', feed, 'Feed'], ['community', comm, 'Community'], ['events', ev, 'Events'], ['messages', msg, 'Messages']]
  return <div className="screen"><Nav screen="community" go={go} />
    <div className="comm"><div className="side">{S.map(([k, i, l]) => <button key={k} className={tab === k ? 'on' : ''} onClick={() => k === 'events' ? go('events') : setTab(k)}><img src={i} alt="" />{l}</button>)}</div>
      <div>{tab === 'feed' && <><div className="composer"><SearchBox value={q} onChange={setQ} ph="What`s on your mind?" /></div><div style={{ height: '4.4rem' }} />
        {list.length ? list.map((p) => <Post key={p.id} p={p} toast={toast} />) : <p className="none">No posts match “{q}”.</p>}</>}
        {tab === 'community' && <div style={{ paddingTop: '4rem' }}>{['Knitting Circle · 48 members', 'Bridge Club · 32 members', 'Walking Group · 61 members'].map((g) => <div className="thread" key={g}><button className="row" onClick={() => toast('Joined ' + g.split(' ·')[0] + ' ✓')}><b>{g.split(' ·')[0]}</b><small>{g.split('· ')[1]} · Tap to join</small></button></div>)}</div>}
        {tab === 'messages' && <div style={{ paddingTop: '4rem' }}><Messages /></div>}</div>
      <div className="up"><h2>Upcoming events</h2>{upcoming.map((u) => <button className="uc" key={u.title} onClick={() => openEvent(u.to)}><div className="h"><span className="ic"><Icon n={u.icon} s={22} /></span>{u.title}</div>
        <div className="d">12 August 2026 &nbsp;•&nbsp; 12:00 AM</div><div className="s">+12 <img src={u.img} alt="" /></div></button>)}</div></div>
    <button className="help" onClick={() => go('contact')}><span className="q">?</span><span className="t2">Need help? Contact us</span></button></div>
}
