import { useState } from 'react'
import { Nav, Icon, Check } from '../components/ui.jsx'
const DEMO = { name: 'Rachel Cohen', email: 'rachel@example.com', msg: "Hi! I'd like to know more about the upcoming knitting workshop." }
export default function Contact({ go }) {
  const [v, setV] = useState({ name: '', email: '', msg: '' }), [sent, setSent] = useState(false), [er, setEr] = useState(false)
  const fill = (k) => !v[k] && setV((s) => ({ ...s, [k]: DEMO[k] }))
  return <div className="screen"><Nav screen="contact" go={go} />
    {sent ? <div className="form" style={{ textAlign: 'center' }}><Check /><h1 style={{ justifyContent: 'center', marginTop: '1rem' }}>Thank you!</h1><p className="note">We'll get back to you as soon as possible.</p><button className="btn" onClick={() => go('home')}>Back to home</button></div>
    : <div className="form"><h1 className="t"><Icon n="chat" s={64} c="#1D6FA5" />We’re here to help</h1>
      <label className="fld"><input readOnly placeholder="Name" value={v.name} onClick={() => fill('name')} aria-label="Name" /></label>
      <label className="fld"><input readOnly placeholder="Email" value={v.email} onClick={() => fill('email')} aria-label="Email" /></label>
      <label className="fld"><textarea readOnly placeholder="Message..." value={v.msg} onClick={() => fill('msg')} aria-label="Message" /></label>
      {er && <span className="er" style={{ marginBottom: '1rem', display: 'block' }}>Tap each field to fill it in for the demo.</span>}
      <p className="note">We’ll get back to you as soon as possible</p>
      <div className="center"><button className="btn" onClick={() => (v.name && v.email && v.msg ? setSent(true) : setEr(true))}>Send</button></div></div>}</div>
}
