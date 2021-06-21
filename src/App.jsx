
import moduleCss from './App.module.css';
import Checkbox from './components/Checkbox';
import Inputbox from './components/Inputbox';

function App() {
  return (
    <div className={moduleCss.container}>
      <div className={moduleCss.title}>Todo List</div>
      <Inputbox />
      <Checkbox />
    </div>


  )
}

export default App;
