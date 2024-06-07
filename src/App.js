
import './App.css';
import Button from './Components/Button';
import Header from './Components/Header';
import Select from './Components/Select';
import Upload from './Components/Upload';

function App() {
  const noiseReductioOptions =[
    { value: 'off', label: 'off'},
    { value: 'low', label: 'Low'},
    { value: 'medium', label: 'Medium'},
    { value: 'high', label: 'High'},
  ];

  const fileFormatOptions =[
    { value: 'png', label: 'PNG'},
    { value: 'jpeg', label: 'JPEG'},
    { value: 'svg', label: 'SVG'}
  ];

  return (
    <div className="App">
      <Header />
      <Upload />
      <Select label="Noise Reduction" options={noiseReductioOptions}/>
      <Select label="File Format" options={fileFormatOptions}/>

      <div className='button-group'>
          <Button type= "delete" label="delete"/>
          <Button type="save" label="Save"/>
      </div>
    </div>
  );
}

export default App;
