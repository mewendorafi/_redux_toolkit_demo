import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/counterSlice'

export default function DispatchComponent() {

	const dispatch = useDispatch()

	const handleIncrement = () => {
		dispatch(increment())
	}
	const handleDecrement = () => {
		dispatch(decrement())
	}
	const handleReset = () => {
		dispatch(reset())
	}

	return (
		<div className='component'>
			<h4> Dispatch Actions To Reducers </h4>
			<button className='button' onClick={() => handleIncrement()}> + 1 </button>
			<button className='button' onClick={() => handleDecrement()}> - 1 </button>
			<button className='button' onClick={() => handleReset()}> Reset </button>
		</div>
	);
}
