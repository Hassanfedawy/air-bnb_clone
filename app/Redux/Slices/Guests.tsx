// Slices/Guests.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface guestsState {
    location: string;
    startDate: Date;
    endDate: Date;
    number: number;
    searchValue:string;
    apartments: [],  // Add this line

}

const initialState: guestsState = {
    location: "",
    startDate: new Date(),
    endDate: new Date(),
    number: 1,
    searchValue:"",
    apartments: [],  // Add this line

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
        setApartments: (state, action) => {
            state.apartments = action.payload; // Handle setting apartments
        }
    },
});

export const { setLocation, setStartDate, setEndDate, setGuests,setApartments } = guestSlice.actions;
export default guestSlice.reducer;
