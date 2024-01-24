import {Card} from './components/Card.jsx';
import './App.css';
import data from './assets/mock-data.json';

function App() {
  return (
    <div className = 'App'>
      <div>
        {data.map(item => 
          <Card title = {item.title}
                text = {item.text}
                currentLikes = {item.currentLikes}
                />
          )}
      </div>
    </div>
  );
}

export default App;
