import { useSelector } from 'react-redux';

export default function DisplayComponent() {

	const count = useSelector(({ counterSlice }) => counterSlice)

	return (
		<div className='component'>
			<h4> Display Count </h4>
			<h4 style={{color: 'red'}}> {count} </h4>
		</div>
	);
}
