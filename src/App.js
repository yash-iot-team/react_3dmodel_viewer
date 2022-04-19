import logo from './logo.svg';
import threed from './forklift.glb'
import './App.css';
import * as React from 'react';
import "@google/model-viewer";

function App() {
  const handleClick = () => {
    alert("Great!");
  }
  const handleTyre = () => {
    alert("Great Tyre!");
  }
  const handleStearing = () => {
    alert("Great Stearing!");
  }
  return (
    <div className="App" style={{width:'700px', height:'600px'}}>
     <model-viewer bounds="tight" enable-pan src={threed} width="100%" ar ar-modes="webxr scene-viewer quick-look" camera-controls environment-image="neutral" poster="poster.webp" shadow-intensity="1" exposure="0.46">
    <button className="Hotspot" onClick={handleClick} slot="hotspot-1" data-position="-0.0969219280461778m 4.336413547519729m -1.1851065466200073m" data-normal="-0.3244491982452165m -0.6987604756428293m -0.6375472652575989m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">HeadLight</div>
    </button><button class="Hotspot" onClick={handleTyre} slot="hotspot-2" data-position="-1.0574166226332091m 1.1109182975146572m -1.1512866444268681m" data-normal="0m 2.687177221679141e-7m -0.9999999999999639m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Tyre</div>
    </button><button class="Hotspot" onClick={handleStearing} slot="hotspot-3" data-position="0.5250902792499231m 3.3914354902212875m -0.31645731230891083m" data-normal="-0.5812132600052593m -0.8137512804254425m -1.0933469524357618e-7m" data-visibility-attribute="visible">
        <div class="HotspotAnnotation">Stearing</div>
    </button>
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt">
    </div>
</model-viewer>
    </div>
  );
}

export default App;
