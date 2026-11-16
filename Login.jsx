import { useState } from 'react'
import { Logo } from '../components/ui.jsx'
export default function Login({ onDone }) {
  const [e, setE] = useState(''), [p, setP] = useState(''), [show, setShow] = useState(false), [er, setEr] = useState({}), [busy, setBusy] = useState(false)
  const submit = (ev) => {
    ev.preventDefault(); const x = {}
    if (!/^\S+@\S+\.\S+$/.test(e)) x.e = 'Please enter a valid email address'
    if (p.length < 4) x.p = 'Password must be at least 4 characters'
    setEr(x); if (Object.keys(x).length) return
    setBusy(true); setTimeout(onDone, 800)
  }
  return <div className="login screen"><form className="lc" onSubmit={submit} noValidate>
    <Logo /><h1>Welcome back</h1><p className="sub">Sign in to join your community</p>
    <label className={'fld' + (er.e ? ' err' : '')}><input type="email" autoComplete="email" placeholder="Email" value={e} onChange={(v) => setE(v.target.value)} aria-label="Email" />{er.e && <span className="er">{er.e}</span>}</label>
    <label className={'fld' + (er.p ? ' err' : '')}><input type={show ? 'text' : 'password'} autoComplete="current-password" placeholder="Password" value={p} onChange={(v) => setP(v.target.value)} aria-label="Password" />{er.p && <span className="er">{er.p}</span>}</label>
    <button type="button" className="lk" style={{ marginTop: 0, marginBottom: '1rem' }} onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} password</button>
    <button className="btn" disabled={busy}>{busy ? <span className="sp2" /> : 'Sign in'}</button>
    <button type="button" className="lk" onClick={() => { setE('demo@goldage.com'); setP('goldage'); setEr({}) }}>Use demo account</button>
  </form></div>
}
