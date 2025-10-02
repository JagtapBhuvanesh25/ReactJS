import './App.css'
import Card from './Card'

function App() {
	const obj1 = {
		username: "Bhuvanesh",
		album_no: 4,
		year: 2025
	}
	const obj2 = {
		username: "Kanha",
		album_no: 5,
		year: 2027
	}
	return (
		<>
			<h1 className='bg-amber-700 text-black rounded-xl'>Tailwind demo</h1>
			<Card album_name="C and C" myobj={obj1}/>
			<Card album_name="C With H" myobj={obj2}/>
		</>
	)
}
export default App
