import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: count => ++count,
		decrement: count => (count > 0 ? --count : 0),
		reset: () => 0,
	},
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
