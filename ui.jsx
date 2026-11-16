import { useEffect } from 'react'
import logo from '../assets/logo.png'
const P = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
const D = {
  search: <><circle cx="10" cy="10" r="6.5"/><path d="M15 15l6 6"/></>, cal: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M7 14h2"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/></>, pin: <><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>, eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
  thumb: <path d="M7 11v9H4v-9h3zm0 0l4-8c1.8 0 2.6 1.2 2.2 3L12.7 10H19a2 2 0 012 2.3l-1 6A2 2 0 0118 20H7"/>, share: <path d="M4 12v7h16v-7M12 15V3M8 7l4-4 4 4"/>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></>, person: <><circle cx="12" cy="6" r="3"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6"/></>, cards: <rect x="7" y="4" width="10" height="16" rx="2"/>,
  chat: <path d="M4 5h16v11H10l-5 4v-4H4z"/>, check: <path d="M5 12l5 5 9-10"/>, l: <path d="M15 5l-7 7 7 7" strokeWidth="3.2"/>, r: <path d="M9 5l7 7-7 7" strokeWidth="3.2"/>,
}
export const Icon = ({ n, s = 24, c }) => <svg width={s} height={s} viewBox="0 0 24 24" {...P} style={{ color: c, flex: 'none' }} aria-hidden="true">{D[n]}</svg>
export const Logo = () => <img src={logo} alt="Gold Age" />
export function SearchBox({ value, onChange, children, ph = 'Search...' }) {
  return <div className="search"><input value={value} onChange={(e) => onChange(e.target.value)} placeholder={ph} aria-label="Search" /><button className="go" aria-label="Search"><Icon n="search" s={26} /></button>{children}</div>
}
export function Nav({ screen, go, over, right }) {
  const L = [['home', 'Home page'], ['about', 'About'], ['events', 'Events'], ['community', 'Community'], ['contact', 'Contact us']]
  return <nav className={'nav' + (over ? ' over' : '')} aria-label="Main">
    <button className="logo" onClick={() => go('home')} aria-label="Gold Age home"><Logo /></button>
    {L.map(([k, t]) => <a key={k} role="link" tabIndex={0} className={screen === k || (k === 'events' && screen === 'event') ? 'on' : ''} onClick={() => go(k)} onKeyDown={(e) => e.key === 'Enter' && go(k)}>{t}</a>)}
    <span className="sp" />{right && <div className="sr">{right}</div>}
  </nav>
}
export function Modal({ onClose, children }) {
  useEffect(() => { const h = (e) => e.key === 'Escape' && onClose(); addEventListener('keydown', h); return () => removeEventListener('keydown', h) }, [onClose])
  return <div className="ov" onClick={onClose}><div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>{children}</div></div>
}
export const Check = () => <div className="chk"><Icon n="check" s={30} /></div>
