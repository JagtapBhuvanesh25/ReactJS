import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	let [counter, setCounter] = useState(15);
	const incval = () => {
		// if(counter<30) setCounter(counter + 1);
		// setCounter(counter + 1);
		// setCounter(counter + 1);
		// setCounter(counter + 1);

		// if(counter<30) setCounter(counter++);
		// setCounter(counter++);
		// setCounter(counter++);
		// setCounter(counter++);

		if(counter<30) setCounter((counter) => counter + 1);
		setCounter((counter) => counter + 1);
		setCounter((counter) => counter + 1);
		setCounter((counter) => counter + 1);
	}
	const decval = () => {
		if(counter>0) setCounter(--counter);
	}

	return (
		<>
		<h1>Counter: {counter}</h1>
		<button id='inc' onClick={incval}>Increase to {counter+1}</button>
		<br />
		<button id='dec' onClick={decval}>Decrese to {counter-1}</button>
		<footer>Counter is {counter} </footer>
		</>
	)
}

export default App