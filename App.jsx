import { useState, useCallback } from 'react'
import Login from './screens/Login.jsx'; import Home from './screens/Home.jsx'; import About from './screens/About.jsx'
import { Events, EventDetail } from './screens/Events.jsx'; import Community from './screens/Community.jsx'; import Contact from './screens/Contact.jsx'
import { Modal, Check } from './components/ui.jsx'
export default function App() {
  const [auth, setAuth] = useState(false), [screen, setScreen] = useState('home'), [ev, setEv] = useState('c4'), [regs, setRegs] = useState([]), [msg, setMsg] = useState(''), [joined, setJoined] = useState(false)
  const go = useCallback((s) => { setScreen(s); scrollTo({ top: 0 }) }, [])
  const toast = (t) => { setMsg(t); setTimeout(() => setMsg(''), 2200) }
  const openEvent = (id) => { setEv(id); go('event') }
  if (!auth) return <div className="app"><Login onDone={() => setAuth(true)} /></div>
  const S = { home: <Home go={go} openEvent={openEvent} join={() => setJoined(true)} />, about: <About join={() => setJoined(true)} />, events: <Events go={go} open={openEvent} />,
    event: <EventDetail go={go} id={ev} regs={regs} register={(i) => setRegs([...regs, i])} toast={toast} />, community: <Community go={go} openEvent={openEvent} toast={toast} />, contact: <Contact go={go} /> }
  return <div className="app"><div key={screen}>{S[screen]}</div>
    {joined && <Modal onClose={() => setJoined(false)}><Check /><h3>Welcome to Gold Age!</h3><p>You're now part of our community. Say hello in the feed!</p><button className="btn" onClick={() => { setJoined(false); go('community') }}>Go to Community</button><button className="btn ghost" onClick={() => setJoined(false)}>Later</button></Modal>}
    {msg && <div className="toast" role="status">{msg}</div>}</div>
}
