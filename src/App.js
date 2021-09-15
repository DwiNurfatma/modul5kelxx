import logo from './logo.svg';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <div>
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
      <button onClick={() => setShow(true)} className="btn-openModal">Open Modal</button>
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
}

export default App;
