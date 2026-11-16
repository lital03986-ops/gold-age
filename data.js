import galilee from './assets/galilee.jpg'; import jerusalem from './assets/jerusalem.jpg'; import masada from './assets/masada.jpg'
import bridge from './assets/bridge.jpg'; import photo from './assets/photo.jpg'; import painting from './assets/painting.jpg'
import knitHands from './assets/knit_hands.png'; import knitWoman from './assets/knit_woman.png'; import couple from './assets/couple.png'
import yarn from './assets/yarn.jpg'; import avHelen from './assets/av_helen.jpg'; import avBarbara from './assets/av_barbara.jpg'
import s1 from './assets/stack1.jpg'; import s2 from './assets/stack2.jpg'; import s3 from './assets/stack3.jpg'
const lorem = (t) => `Join us for ${t}. A warm, friendly group for adults of all levels, with refreshments and good company. Come as you are and leave with new friends!`
export const events = {
  trips: [
    { id: 't1', title: 'Trip to the Sea of Galilee', date: '9/1/26', time: '19:00', place: 'Galilee', img: galilee, desc: lorem('a relaxed day by the Sea of Galilee') },
    { id: 't2', title: 'Trip to Jerusalem', date: '6/2/26', time: '18:00', place: 'Jerusalem', img: jerusalem, desc: lorem('a guided walk through the Old City') },
    { id: 't3', title: 'Trip to Masada', date: '7/1/26', time: '20:00', place: 'Masada', img: masada, desc: lorem('a sunset visit to Masada (cable car available)') },
    { id: 't4', title: 'Trip to Eilat', date: '8/3/26', time: '19:00', place: 'Eilat', img: null, desc: lorem('a sunny weekend in Eilat') },
  ],
  classes: [
    { id: 'c1', title: 'Bridge Class', date: '9/1/26', time: '19:00', place: 'Herzl 5 Ramat Gan', img: bridge, desc: lorem('a friendly bridge class') },
    { id: 'c2', title: 'Photography class', date: '3/2/26', time: '18:00', place: 'Bialik 3 Tel Aviv', img: photo, desc: lorem('a hands-on photography class') },
    { id: 'c3', title: 'Painting class', date: '7/1/26', time: '20:00', place: 'Gordon 4 Herzliya', img: painting, desc: lorem('a creative painting class') },
    { id: 'c4', title: 'Knitting class', date: '25/3/2026', time: '11:30 AM', place: 'Hadar 7 Herzliya', img: knitWoman, heading: 'Community knitting workshop',
      desc: "Cozy knitting sessions for adults of all experience levels Master new techniques while enjoying great company. Whether you're a beginner or expert, you're welcome here. Bring your project or start fresh with our supplies!" },
  ],
}
export const allEvents = [...events.trips, ...events.classes]
export const upcoming = [
  { title: 'Public singing', icon: 'mic', img: s1, to: 'c4' }, { title: 'Yoga and Pilates', icon: 'person', img: s2, to: 'c3' }, { title: 'Bridge', icon: 'cards', img: s3, to: 'c1' },
]
export const posts = [
  { id: 1, name: 'Helen Smith', ago: '20 minutes ago', av: avHelen, text: 'We knit, laugh, and create together – warm hearts and new friendships.', img: knitHands, likes: 14, comments: [['Barbara Miller', 'Count me in next time!'], ['Rose Levy', 'Beautiful colors, Helen 🧶']] },
  { id: 2, name: 'Barbara Miller', ago: '43 minutes ago', av: avBarbara, text: 'Hello my dears! Looking for a friend to join me for an upcoming knitting workshop. Anyone want to come?', img: yarn, likes: 9, comments: [['Helen Smith', "I'll come with you, Barbara!"]] },
  { id: 3, name: 'David Katz', ago: '2 hours ago', av: null, text: 'Had a wonderful time at the bridge class yesterday. Who is joining the trip to Masada?', img: couple, likes: 6, comments: [] },
]
export const messages = [
  { id: 1, name: 'Helen Smith', last: 'See you at the workshop!', thread: [['them', 'Hi! Are you coming to the knitting workshop?']], replies: ['Yes, see you there!', 'Not sure yet', 'What should I bring?'] },
  { id: 2, name: 'Barbara Miller', last: 'Thank you for the invite 😊', thread: [['them', 'Thank you for the invite 😊']], replies: ["You're welcome!", 'Happy to help'] },
]
