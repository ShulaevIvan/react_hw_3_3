import './App.css';
import './components/MessageHistory/MessageHistory.css';
import MessageHistory from './components/MessageHistory/MessageHistory';
import messages from './components/MessageHistory/Data';

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>  
    </div>
  );
}

export default App;
