
import './App.css';
import Header from './components/Header/Header';
import MemeberStats from './components/MembersStats/MemeberStats';

function App() {
  return (
    <div >
      {/* header section called by header component  */}
      <Header></Header>
       {/* tour member info and contribution section  */}
      <MemeberStats></MemeberStats>
    </div>
  );
}

export default App;
