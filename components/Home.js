import Dispatch from './Dispatch';
import Display from './Display';

function Home() {
	return (
		<main className='main'>
			<div>
				<h1>Redux Toolkit</h1>
				<p>1. Initialiser le store (global state) </p>
				<p>2. Créer les slices (morceaux de store) et les reducers (actions prédéfinies sur le global state)</p>
				<p>3. Créer la communication entre le store et les composants React</p>
				<p>4. Enjoy 🤓</p>
			</div>
			<div>
				<Display />
				<Dispatch />
			</div>
		</main>
	);
}

export default Home;
