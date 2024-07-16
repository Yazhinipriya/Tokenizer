import {useState} from 'react' 
import './App.css';
import chakra from './chakra.png';

function App() {

  const [text, settext] = useState('');
  const [CharCount, setCharCount] = useState(0);
  const [WordCount, setWordCount] = useState(0);
  const [TokenCount, setTokenCount] = useState(0);

  const handleChange = (e) => {
    settext(e.target.value);
  };
  
  const counter = () => {
    setCharCount(text.length);
    setWordCount(text.split(" ").length);
    setTokenCount(countTokens(text));
  };

  const countTokens = (text) => {
    const tokens = text.split(" ");
    let tokenCount = 0;
    
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].length > 4) {
        tokenCount += 2;
      } 
       else if(tokens[i].length < 2){
        tokenCount += 0;
      }
    }

    return tokenCount;
  };



  const clearTextarea = () => {
    settext('');
  };
  return (
    
  <>
  <div className="img">
      <img src={chakra} alt="My Logo" style={{ width: '100px', height: '50px',width:'180px' }} />
    </div>
    <div className="bod">
          <h1 class="h1">
        Token Estimator
      </h1>
      <div className="editor">
        <div>
          This tool calculate the number of tokens in a given text or document.</div>
        <div>  This estimation is particularly useful in natural language processing </div>
         <div> tasks and machine translation where the number of tokens may</div>
         <div> impact computational resources, model performance, or pricing</div>
         <div> models for certain services.</div>
        </div>
    </div>
    <br/><br/>
<center>
        <div className="App">
    <textarea placeholder='Enter Your Text' value={text}  onChange={(e) => settext(e.target.value) } className="tx" >    
      </textarea>
      </div> <br/>
      <button className='button2' onClick={clearTextarea}>Clear</button> 
    <button className='button1' onClick={counter}>Generate</button>
  <div className="align">
  <div className="rectangle">
      <div className="content">
        <h2>Tokens</h2>
        <p>{TokenCount}</p>
      </div>
    </div>
    <div className="rectangle" >
      <div className="content">
        <h2>Characters</h2>
        <p>{CharCount}</p>
      </div>
    </div>
<div className="rectangle">
<div className="content">
  <h2>Words</h2>
  <p>{WordCount}</p>
</div>
</div>
</div>
</center>
</>
)
  };
export default App;
