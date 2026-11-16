import { Icon } from '../components/ui.jsx'
import about from '../assets/about.jpg'; import people from '../assets/i_people.png'; import heart from '../assets/i_heart.png'; import bulb from '../assets/i_bulb.png'
export default function About({ join }) {
  const F = [[people, 'Connecting people', 'Make new friends and connections.'], [heart, 'Find support', 'Find support, friendship, and community.'], [bulb, 'Social enrichment', 'Join events and activities.']]
  return <div className="screen"><div className="story">
    <h1 className="t">Our story</h1>
    <div><h3><Icon n="target" s={34} />The goal</h3><p>Gold Age is where people, not just activities, take center stage. We're building a community of warmth, companionship, and support together.</p></div>
    <div><h3><Icon n="eye" s={34} />The Vision</h3><p>Our main goal is to break down loneliness and connect hearts because the most beautiful lives are shared together.</p></div>
    <img className="ph" src={about} alt="Friends toasting together" />
  </div>
  <div className="feat">{F.map(([i, t, d]) => <div className="fc" key={t}><img src={i} alt="" /><h4>{t}</h4><p>{d}</p></div>)}</div>
  <div className="center"><button className="btn" onClick={join}>Join us</button></div></div>
}
