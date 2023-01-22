import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json"

const arrayColors = ["#ff6961", "#fdfd96", "#77dd77", "#84b6f4", "#fdcae1", "#7052ff", "#d06aff", "#ff81ff", "#d6ebc1", "#6c29e9", "#f7e031", "#f16072", "#06062f", "#eb68b0", "#5b2438", "#78e12d", "#ff7360", "#ff8862", "#ffb96d", "#5fad22", "#cdd552", "#af004a", "#870c6a", "#e6ba7c", "#00c9f3", "#ffff51", "#b93af8", "#cf9a79", "#559623", "#7bcd65", "#bf8d00", "#00e3d7", "#ff8884", "#6384b6", "#f50400", "#80c4d9", "#97574f", "#ac6900", "#8f9629", "#bf8d00", "#00c8f1", "#7765ce", "#6f4787", "#d6a735", "#00dc82", "#988921", "#121df7", "#da6967", "#beb500", "#85d6a4", "#4c96f5", "#ae140d"];

function App() {

	const getRamdom = (arrayElements) => {
		const quantityValues = arrayElements.length
		const randomIndex = Math.floor(Math.random() * quantityValues) 
		return arrayElements[randomIndex]
	};

	const [quote, setQuote] = useState(getRamdom(db))
	const [color, setColor] = useState(getRamdom(arrayColors))
	

	const newQuote = () => {
		setQuote(getRamdom(db))
		setColor(getRamdom(arrayColors))
	}

	return (
		<div className="App" style={{backgroundColor: color}}>
			<QuoteBox
				quote = {quote}
				newQuote = {newQuote}
				color = {color}
			/>
		</div>
	);
}

export default App;


