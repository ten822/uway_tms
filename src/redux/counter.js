import {createSlice} from '@reduxjs/toolkit';

const name = 'counter';
const initialState = {value: 0};
const reducers = {
	increment: (state) => {state.value += 1;},
	decrement: (state) => {state.value -= 1;},
	multiple: (state) => {state.value = state.value*3;}
};

export const counterSlice = createSlice({
	name,
	initialState,
	reducers
});

export const {increment, decrement, multiple} = counterSlice.actions;

export default counterSlice.reducer;