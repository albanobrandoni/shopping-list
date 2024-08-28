import './App.css';
import imagenLogo from './images/logo.png'
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="task-application">
      <div className='logo-container'>
        <img 
          className='logo' 
          src={imagenLogo} 
          alt='Imagen del logo' />
      </div>
      <div className='main-task-list'>
        <h1>Mi Lista</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
