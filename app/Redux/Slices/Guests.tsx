// Slices/Guests.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface guestsState {
    location: string;
    startDate: Date;
    endDate: Date;
    number: number;
}

const initialState: guestsState = {
    location: "",
    startDate: new Date(),
    endDate: new Date(),
    number: 1,
};

const guestSlice = createSlice({
    name: "Guests",
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setStartDate: (state, action: PayloadAction<Date>) => {
            state.startDate = action.payload;
        },
        setEndDate: (state, action: PayloadAction<Date>) => {
            state.endDate = action.payload;
        },
        setGuests: (state, action: PayloadAction<number>) => {
            state.number = action.payload;
        },
    },
});

export const { setLocation, setStartDate, setEndDate, setGuests } = guestSlice.actions;
export default guestSlice.reducer;
