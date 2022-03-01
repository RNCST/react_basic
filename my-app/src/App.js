
import './App.css';
import Composition from './components/Props/composition';
import Extraction from './components/Props/Extaction/extraction';
import ClassComponent from './components/State/ClassComponent';
import FunctionalComponent from './components/State/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent/>
      <ClassComponent />
      <Composition / >
      <Extraction/>
    </div>
  );
}

export default App;
