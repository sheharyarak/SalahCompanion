import { useState, useRef } from 'react';
import RadioSelector from './RakatSelector';
import {Poses, Sequences, Audio, audioPoseMap, Icons} from './Helper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  Redirect
} from "react-router-dom";

import './App.css'

// import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from 'react-h5-audio-player';

import PrevIcon from './icons/navigate_before_black_24dp.svg';
import NextIcon from './icons/navigate_next_black_24dp.svg';
import PlayIcon from './icons/play_arrow_black_24dp.svg';
import PauseIcon from './icons/pause_black_24dp.svg';

function App() {
  // const names = [
  //   "الله",
  //   "ٱلْرَّحْمَـانُ",
  //   "ٱلْرَّحِيْمُ",
  //   "ٱلْمَلِكُ",
  //   "ٱلْقُدُّوسُ",
  //   "ٱلْسَّلَامُ",
  //   "ٱلْمُؤْمِنُ",
  //   "ٱلْمُهَيْمِنُ",
  //   "ٱلْعَزِيزُ",
  //   "ٱلْجَبَّارُ",
  //   "ٱلْمُتَكَبِّرُ",
  //   "ٱلْخَالِقُ",
  //   "ٱلْبَارِئُ",
  //   "ٱلْمُصَوِّرُ",
  //   "ٱلْغَفَّارُ",
  //   "ٱلْقَهَّارُ",
  //   "ٱلْوَهَّابُ",
  //   "ٱلْرَّزَّاقُ",
  //   "ٱلْفَتَّاحُ",
  //   "ٱلْعَلِيمُ",
  //   "ٱلْقَابِضُ",
  //   "ٱلْبَاسِطُ",
  //   "ٱلْخَافِضُ",
  //   "ٱلْرَّافِعُ",
  //   "ٱلْمُعِزُّ",
  //   "ٱلْمُذِلُّ",
  //   "ٱلْسَّمِيعُ",
  //   "ٱلْبَصِيرُ",
  //   "ٱلْحَكَمُ",
  //   "ٱلْعَدْلُ",
  //   "ٱلْلَّطِيفُ",
  //   "ٱلْخَبِيرُ",
  //   "ٱلْحَلِيمُ",
  //   "ٱلْعَظِيمُ",
  //   "ٱلْغَفُورُ",
  //   "ٱلْشَّكُورُ",
  //   "ٱلْعَلِيُّ",
  //   "ٱلْكَبِيرُ",
  //   "ٱلْحَفِيظُ",
  //   "ٱلْمُقِيتُ",
  //   "ٱلْحَسِيبُ",
  //   "ٱلْجَلِيلُ",
  //   "ٱلْكَرِيمُ",
  //   "ٱلْرَّقِيبُ",
  //   "ٱلْمُجِيبُ",
  //   "ٱلْوَاسِعُ",
  //   "ٱلْحَكِيمُ",
  //   "ٱلْوَدُودُ",
  //   "ٱلْمَجِيدُ",
  //   "ٱلْبَاعِثُ",
  //   "ٱلْشَّهِيدُ",
  //   "ٱلْحَقُّ",
  //   "ٱلْوَكِيلُ",
  //   "ٱلْقَوِيُّ",
  //   "ٱلْمَتِينُ",
  //   "ٱلْوَلِيُّ",
  //   "ٱلْحَمِيدُ",
  //   "ٱلْمُحْصِيُ",
  //   "ٱلْمُبْدِئُ",
  //   "ٱلْمُعِيدُ",
  //   "ٱلْمُحْيِى",
  //   "ٱلْمُمِيتُ",
  //   "ٱلْحَىُّ",
  //   "ٱلْقَيُّومُ",
  //   "ٱلْوَاجِدُ",
  //   "ٱلْمَاجِدُ",
  //   "ٱلْوَاحِدُ",
  //   "ٱلْأَحَد",
  //   "ٱلْصَّمَدُ",
  //   "ٱلْقَادِرُ",
  //   "ٱلْمُقْتَدِرُ",
  //   "ٱلْمُقَدِّمُ",
  //   "ٱلْمُؤَخِّرُ",
  //   "ٱلأَوَّلُ",
  //   "ٱلْآخِرُ",
  //   "ٱلْظَّاهِرُ",
  //   "ٱلْبَاطِنُ",
  //   "ٱلْوَالِي",
  //   "ٱلْمُتَعَالِي",
  //   "ٱلْبَرُّ",
  //   "ٱلْتَّوَّابُ",
  //   "ٱلْمُنْتَقِمُ",
  //   "ٱلْعَفُوُّ",
  //   "ٱلْرَّؤُفُ",
  //   "مَالِكُ",
  //   "ٱلْمُلْكُ",
  //   "ذُو",
  //   "ٱلْجَلَالِ",
  //   "وَٱلْإِكْرَامُ",
  //   "ٱلْمُقْسِطُ",
  //   "ٱلْجَامِعُ",
  //   "ٱلْغَنيُّ",
  //   "ٱلْمُغْنِيُّ",
  //   "ٱلْمَانِعُ",
  //   "ٱلْضَّارُ",
  //   "ٱلْنَّافِعُ",
  //   "ٱلْنُّورُ",
  //   "ٱلْهَادِي",
  //   "ٱلْبَدِيعُ",
  //   "ٱلْبَاقِي",
  //   "ٱلْوَارِثُ",
  //   "ٱلْرَّشِيدُ",
  //   "ٱلْصَّبُورُ"
  // ];

  // const paragraphs = names.map((name) => {
  //   return (
  //     <span className="nameAllah">{name}</span>
  //   );
  // });

  const bg = Array.apply(null, {length: 208}).map(x => {
    return <span className="nameAllah">الله</span>
  });
  // console.log(bg)

  return (
    <div className="App">
      <div className="background" style={{opacity: "50%"}}>
        {/* {paragraphs}
        {paragraphs}
        {paragraphs.slice(0, 2)} */}
        {bg}
      </div>
      <div className="nav"><a href="/">Salah <span className="arabic">صَلاة</span></a></div>
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/salah">
          <Salah />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <div className="footer">
        <span> 
          Salah voice from 
          <a href="https://www.youtube.com/watch?v=IoOSSoL-U7E"> Islamic Media Australia</a>
        </span>
        <span>Sana voiced by Ibrahim Ibn Saad</span>
        <span>Nafl and Vitr voiced by Maaz Baig</span>
        <a href="/contact">click here to leave feedback</a>
      </div>
    </div>
  );
}

function Home() {
  const radioSelector = <RadioSelector></RadioSelector>
  
  return (
    <>
      <div className="upper-home">
        <div>
            <p>
              Please select your 
            </p>
            <p>
              Rakats
              <span className="arabic">
               ركعات
              </span>
            </p>
        </div>
      </div>
      <div className="lower-home">
        <form action="/salah">
          {radioSelector}
        </form>
      </div>
    </>
  );
}

function Salah(props) {

  const search = useLocation().search;
  // console.log("search: " + search);
  const rakat = new URLSearchParams(search).get('rakats');
  // console.log("rakats: " + rakat);
  const seq = Sequences[rakat]
  // console.log(seq);
  const rap = useRef();

  const [index, setIndex] = useState(0);
  const [rakah, setRakah] = useState(1);
  const [playing, setPlaying] = useState(false);

  if (index < 0 || index >= seq.length) {
    return (
      <Redirect push to="/" />
    );
  }

  const getPose = (i) => {
    if (index === 0) {
      return Poses.qiyam
    }
    if (i === 0 || i === 12) {
      return getPose(seq[index - 1])
    }
    // console.log(`i: ${i}, pose: ${audioPoseMap[i]}`);
    return audioPoseMap[i];
  }
 
  // console.log(`seq: ${seq}, index: ${index}, seq[index]: ${seq[index]}`);
  const pose = getPose(seq[index]);

  const onEnded = (e) => {
    // if (index + 1 < seq.length){
      setIndex(index + 1);
      // console.log(seq[index + 1]);
      if ((seq[index + 1] === 3 || seq[index + 1] === 15) && index > 3) {
        setRakah(rakah + 1);
      }
    // }
  }

  const prev = (e) => {
    setIndex(index - 1);
    if ((seq[index] === 3 || seq[index] === 15) && index > 3) {
      setRakah(rakah - 1);
    }
  }
  const playPause = (e) => {
    console.log(rap.current.audio.current);
    if (playing) {
      rap.current.audio.current.pause();
    } else {
      rap.current.audio.current.play();
    }
    setPlaying(!playing);
  }

  return (
    <>
      <div className="upper-salah">
        <div className="rakah">
          <h2>Rakah: {rakah} / {rakat}</h2>
        </div>
        <div className="pose">
          {/* <img src={pose.img}/> */}
          {pose.img}
        </div>
        <div className="name">
          <h1>
            {pose.name}
            <span className="arabic">
              {pose.arabic}
            </span>
          </h1>
        </div>
      </div>
      <div className="lower-salah">
        <div className="controls">
          <button 
          className="Option"
          onClick={prev}
          >
            {/* <img src={Icons.prev}></img> */}
            {/* {Icons.prev} */}
            <PrevIcon/>
          </button>
          <button 
          className="Option"
          onClick={playPause}
          >
            {/* <img src={Icons.play}></img> */}
            {/* {Icons.play} */}
            {playing && <PauseIcon />}
            {!playing && <PlayIcon />}
          </button>
          <button 
          className="Option"
          onClick={onEnded}
          >
            {/* <img src={Icons.next}></img> */}
            {/* {Icons.next} */}
            <NextIcon/>
          </button>
        </div>
        <div className="audioplayer">
          <AudioPlayer src={Audio[seq[index]]} autoPlay={playing} onEnded={onEnded} ref={rap} controls={false}/>
        </div>
      </div>
    </>
  );
}

function Contact(props) {
  const [body, setBody] = useState();
  const onChangeHandler = (e) => {
    console.log(e.target);
    setBody(e.target.value);
  }
  return (
    <div className="center">
      <div className="formContainer">
        <h2 className="title"> Leave me a message</h2>
        <textarea
        cols={18}
        rows={8}
        onChange={onChangeHandler}
        ></textarea>
        <a 
        href={`mailto:info@salahcompanion.us?subject=Feedback%20SalahCompanion&body=${encodeURI(body)}`}
        >
          Send
        </a>
      </div>
    </div>  
  )
}

export default App;
