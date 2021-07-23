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
import './App.css';
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
  return (
    <div className="App">
      {/* <div className="nav">SalahCompanion</div>
      <div className="center">
        <div className="content">
          <form action="salah">
            <div className="upper">
              Rakats:
              <div className="center">
                {radioSelector}
              </div>
            </div>
          </form>
        </div>
      </div> */}
      <div className="nav">SalahCompanion</div>
      <div className="upper-home">
          Please select your Rakats
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
  return (
    <div className="App">
      <div className="nav">SalahCompanion</div>
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
