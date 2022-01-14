import {useState} from 'react'
import './App.css';

function App() {
 const [text, setText] = useState('')
 const [check, setCheck] = useState('')

 const handleInput = (e)=>{
   e.preventDefault()
   setText(e.target.value)
 }

 const handleCheck = (e)=>{
   e.preventDefault()
   const word = text.toLowerCase().split('')
   let joint = word.join('')
   let reversed = word.reverse().join('')

   if(joint === reversed){
     setCheck("Yes, it's a palindrome")
   }else{
     setCheck("Sorry, that's not palindrome")
   }
 }

  return (
    <div className="App">
      <h3>Palindrome Checker</h3>
      <form onSubmit={handleCheck}>
        <label htmlFor='word'>Palindrome: </label>
        <input 
        type='text'
        name='word'
        id='word'
        value={text}
        onChange={handleInput}/>
        <button type='submit'>Check</button>
      </form>
      <p>
        {check}
      </p>
    </div>
  );
}

export default App;
