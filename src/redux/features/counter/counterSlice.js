import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1 ;
            // state.count = state.count + 1 ;
        }
    }
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;