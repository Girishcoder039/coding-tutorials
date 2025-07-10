import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Table1 from './components/Table1';
import SmallCard from './components/SmallCard';
import image1 from './images/LinkedInCoverPhoto.png'
import Increment from './components/Increment';
import IncDec from './components/Inc_Dec';

function App() {
  return (<div>
    <Form1></Form1>
    <Form2></Form2>
    <Table1></Table1>
    <div>
      <SmallCard title='abcd' body='bbbb' image={image1} >cccccc</SmallCard>
      <SmallCard title='zxyv' body='nnnn' children='ccccc' image='/LinkedInCoverPhoto.png'></SmallCard>
    </div>
    <Increment></Increment>
    <IncDec></IncDec>
  </div>
  );
}

export default App;
