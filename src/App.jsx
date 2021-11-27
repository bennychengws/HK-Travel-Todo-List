
import moduleCss from './App.module.css';
import Inputbox from './components/Inputbox';

function App() {
  return (
    <div style={{ 
      backgroundImage: `url("https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2021/03/worldwide-travel-insurance.jpg")`, 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'
    }}>
      <div className={moduleCss.container}>
        <div className={moduleCss.title}>HK Travel Todo List</div>
        <Inputbox />
      </div>
    </div>
  )
}

export default App;
