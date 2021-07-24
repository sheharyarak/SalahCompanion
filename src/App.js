import { useState } from 'react';
import RadioSelector from './RakatSelector';
import {Poses, Sequences} from './Helper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import './App.css'
import ReactAudioPlayer from "react-audio-player";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/salah">
          <Salah />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  const radioSelector = <RadioSelector></RadioSelector>
  const names = [
    "الله",
    "ٱلْرَّحْمَـانُ",
    "ٱلْرَّحِيْمُ",
    "ٱلْمَلِكُ",
    "ٱلْقُدُّوسُ",
    "ٱلْسَّلَامُ",
    "ٱلْمُؤْمِنُ",
    "ٱلْمُهَيْمِنُ",
    "ٱلْعَزِيزُ",
    "ٱلْجَبَّارُ",
    "ٱلْمُتَكَبِّرُ",
    "ٱلْخَالِقُ",
    "ٱلْبَارِئُ",
    "ٱلْمُصَوِّرُ",
    "ٱلْغَفَّارُ",
    "ٱلْقَهَّارُ",
    "ٱلْوَهَّابُ",
    "ٱلْرَّزَّاقُ",
    "ٱلْفَتَّاحُ",
    "ٱلْعَلِيمُ",
    "ٱلْقَابِضُ",
    "ٱلْبَاسِطُ",
    "ٱلْخَافِضُ",
    "ٱلْرَّافِعُ",
    "ٱلْمُعِزُّ",
    "ٱلْمُذِلُّ",
    "ٱلْسَّمِيعُ",
    "ٱلْبَصِيرُ",
    "ٱلْحَكَمُ",
    "ٱلْعَدْلُ",
    "ٱلْلَّطِيفُ",
    "ٱلْخَبِيرُ",
    "ٱلْحَلِيمُ",
    "ٱلْعَظِيمُ",
    "ٱلْغَفُورُ",
    "ٱلْشَّكُورُ",
    "ٱلْعَلِيُّ",
    "ٱلْكَبِيرُ",
    "ٱلْحَفِيظُ",
    "ٱلْمُقِيتُ",
    "ٱلْحَسِيبُ",
    "ٱلْجَلِيلُ",
    "ٱلْكَرِيمُ",
    "ٱلْرَّقِيبُ",
    "ٱلْمُجِيبُ",
    "ٱلْوَاسِعُ",
    "ٱلْحَكِيمُ",
    "ٱلْوَدُودُ",
    "ٱلْمَجِيدُ",
    "ٱلْبَاعِثُ",
    "ٱلْشَّهِيدُ",
    "ٱلْحَقُّ",
    "ٱلْوَكِيلُ",
    "ٱلْقَوِيُّ",
    "ٱلْمَتِينُ",
    "ٱلْوَلِيُّ",
    "ٱلْحَمِيدُ",
    "ٱلْمُحْصِيُ",
    "ٱلْمُبْدِئُ",
    "ٱلْمُعِيدُ",
    "ٱلْمُحْيِى",
    "ٱلْمُمِيتُ",
    "ٱلْحَىُّ",
    "ٱلْقَيُّومُ",
    "ٱلْوَاجِدُ",
    "ٱلْمَاجِدُ",
    "ٱلْوَاحِدُ",
    "ٱلْأَحَد",
    "ٱلْصَّمَدُ",
    "ٱلْقَادِرُ",
    "ٱلْمُقْتَدِرُ",
    "ٱلْمُقَدِّمُ",
    "ٱلْمُؤَخِّرُ",
    "ٱلأَوَّلُ",
    "ٱلْآخِرُ",
    "ٱلْظَّاهِرُ",
    "ٱلْبَاطِنُ",
    "ٱلْوَالِي",
    "ٱلْمُتَعَالِي",
    "ٱلْبَرُّ",
    "ٱلْتَّوَّابُ",
    "ٱلْمُنْتَقِمُ",
    "ٱلْعَفُوُّ",
    "ٱلْرَّؤُفُ",
    "مَالِكُ",
    "ٱلْمُلْكُ",
    "ذُو",
    "ٱلْجَلَالِ",
    "وَٱلْإِكْرَامُ",
    "ٱلْمُقْسِطُ",
    "ٱلْجَامِعُ",
    "ٱلْغَنيُّ",
    "ٱلْمُغْنِيُّ",
    "ٱلْمَانِعُ",
    "ٱلْضَّارُ",
    "ٱلْنَّافِعُ",
    "ٱلْنُّورُ",
    "ٱلْهَادِي",
    "ٱلْبَدِيعُ",
    "ٱلْبَاقِي",
    "ٱلْوَارِثُ",
    "ٱلْرَّشِيدُ",
    "ٱلْصَّبُورُ"
  ];

  const paragraphs = names.map((name) => {
    return (
      <p className="nameAllah">{name}</p>
    );
  });
  return (
    <div className="App">
      <div className="background">
        {paragraphs}
        {paragraphs}
        {paragraphs.slice(0, 2)}
      </div>
      <div className="nav">Salah صلاح</div>
      <div className="upper-home">
        <div>
            <p>
              Please select your 
            </p>
            <p>
              Rakats ركعات
            </p>
        </div>
      </div>
      <div className="lower-home">
        <form action="/salah">
          {radioSelector}
        </form>
      </div>
      <div className="footer">
        <span> 
          Voice from 
          <a href="https://www.youtube.com/watch?v=IoOSSoL-U7E"> Islamic Media Australia</a>
        </span>
      </div>
    </div>
  );
}

function Salah(props) {

  const search = useLocation().search;
  // console.log("search: " + search);
  const rakat = new URLSearchParams(search).get('rakats');
  // console.log("rakats: " + rakat);
  const seq = Sequences[rakat]
  // console.log(seq);
  const [index, setIndex] = useState(0);
  const pose = Poses[seq[index]];
  const onEnded = (e) => {
    if (index + 1 < seq.length){
      setIndex(index + 1);
    }
  }

  const names = [
    "الله",
    "ٱلْرَّحْمَـانُ",
    "ٱلْرَّحِيْمُ",
    "ٱلْمَلِكُ",
    "ٱلْقُدُّوسُ",
    "ٱلْسَّلَامُ",
    "ٱلْمُؤْمِنُ",
    "ٱلْمُهَيْمِنُ",
    "ٱلْعَزِيزُ",
    "ٱلْجَبَّارُ",
    "ٱلْمُتَكَبِّرُ",
    "ٱلْخَالِقُ",
    "ٱلْبَارِئُ",
    "ٱلْمُصَوِّرُ",
    "ٱلْغَفَّارُ",
    "ٱلْقَهَّارُ",
    "ٱلْوَهَّابُ",
    "ٱلْرَّزَّاقُ",
    "ٱلْفَتَّاحُ",
    "ٱلْعَلِيمُ",
    "ٱلْقَابِضُ",
    "ٱلْبَاسِطُ",
    "ٱلْخَافِضُ",
    "ٱلْرَّافِعُ",
    "ٱلْمُعِزُّ",
    "ٱلْمُذِلُّ",
    "ٱلْسَّمِيعُ",
    "ٱلْبَصِيرُ",
    "ٱلْحَكَمُ",
    "ٱلْعَدْلُ",
    "ٱلْلَّطِيفُ",
    "ٱلْخَبِيرُ",
    "ٱلْحَلِيمُ",
    "ٱلْعَظِيمُ",
    "ٱلْغَفُورُ",
    "ٱلْشَّكُورُ",
    "ٱلْعَلِيُّ",
    "ٱلْكَبِيرُ",
    "ٱلْحَفِيظُ",
    "ٱلْمُقِيتُ",
    "ٱلْحَسِيبُ",
    "ٱلْجَلِيلُ",
    "ٱلْكَرِيمُ",
    "ٱلْرَّقِيبُ",
    "ٱلْمُجِيبُ",
    "ٱلْوَاسِعُ",
    "ٱلْحَكِيمُ",
    "ٱلْوَدُودُ",
    "ٱلْمَجِيدُ",
    "ٱلْبَاعِثُ",
    "ٱلْشَّهِيدُ",
    "ٱلْحَقُّ",
    "ٱلْوَكِيلُ",
    "ٱلْقَوِيُّ",
    "ٱلْمَتِينُ",
    "ٱلْوَلِيُّ",
    "ٱلْحَمِيدُ",
    "ٱلْمُحْصِيُ",
    "ٱلْمُبْدِئُ",
    "ٱلْمُعِيدُ",
    "ٱلْمُحْيِى",
    "ٱلْمُمِيتُ",
    "ٱلْحَىُّ",
    "ٱلْقَيُّومُ",
    "ٱلْوَاجِدُ",
    "ٱلْمَاجِدُ",
    "ٱلْوَاحِدُ",
    "ٱلْأَحَد",
    "ٱلْصَّمَدُ",
    "ٱلْقَادِرُ",
    "ٱلْمُقْتَدِرُ",
    "ٱلْمُقَدِّمُ",
    "ٱلْمُؤَخِّرُ",
    "ٱلأَوَّلُ",
    "ٱلْآخِرُ",
    "ٱلْظَّاهِرُ",
    "ٱلْبَاطِنُ",
    "ٱلْوَالِي",
    "ٱلْمُتَعَالِي",
    "ٱلْبَرُّ",
    "ٱلْتَّوَّابُ",
    "ٱلْمُنْتَقِمُ",
    "ٱلْعَفُوُّ",
    "ٱلْرَّؤُفُ",
    "مَالِكُ",
    "ٱلْمُلْكُ",
    "ذُو",
    "ٱلْجَلَالِ",
    "وَٱلْإِكْرَامُ",
    "ٱلْمُقْسِطُ",
    "ٱلْجَامِعُ",
    "ٱلْغَنيُّ",
    "ٱلْمُغْنِيُّ",
    "ٱلْمَانِعُ",
    "ٱلْضَّارُ",
    "ٱلْنَّافِعُ",
    "ٱلْنُّورُ",
    "ٱلْهَادِي",
    "ٱلْبَدِيعُ",
    "ٱلْبَاقِي",
    "ٱلْوَارِثُ",
    "ٱلْرَّشِيدُ",
    "ٱلْصَّبُورُ"
  ];

  const paragraphs = names.map((name) => {
    return (
      <p className="nameAllah">{name}</p>
    );
  });

  return (
    <div className="App">
      <div className="background">
        {paragraphs}
        {paragraphs}
        {paragraphs.slice(0, 2)}
      </div>
      <div className="nav"><p className="title">Salah صلاح</p></div>
      <div className="upper-salah">
        <div className="pose">
          <img src={pose.img}/>
        </div>
        <div className="name">
          <h1>{pose.name}</h1>
        </div>
      </div>
      <div className="lower-salah">
        <ReactAudioPlayer src={pose.mp3} autoPlay controls onEnded={onEnded} />
      </div>
      <div className="footer">
        <span> 
          Voice from 
          <a href="https://www.youtube.com/watch?v=IoOSSoL-U7E"> Islamic Media Australia</a>
        </span>
      </div>
    </div>
  );
}

export default App;
