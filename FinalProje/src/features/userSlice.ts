import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    EventInfo: {
        title: string,
        eventStart: string,
        eventEnd: string,
        adress: string,
        price: string,
        place: string,
        category: string,
        eventInfo: string,
        latitudeX: number,
        longitudeY: number,
        filterEvent: string
        filterEventCategory: string
    },
}

const initialState: UserState = {
    EventInfo: {
        title: "",
        eventStart: "",
        eventEnd: "",
        adress: "",
        price: "",
        place: "",
        category: "",
        eventInfo: "",
        latitudeX: 0,
        longitudeY: 0,
        filterEvent: "",
        filterEventCategory: ""
    }
}

export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {

        addTitle: (state, action: PayloadAction<string>) => {
            state.EventInfo.title = action.payload
        },
        addEventStart: (state, action: PayloadAction<string>) => {
            state.EventInfo.eventStart = action.payload
        },
        addEventEnd: (state, action: PayloadAction<string>) => {
            state.EventInfo.eventEnd = action.payload
        },
        addAdrees: (state, action: PayloadAction<string>) => {
            state.EventInfo.adress = action.payload
        },
        addPlace: (state, action: PayloadAction<string>) => {
            state.EventInfo.place = action.payload
        },
        addPrice: (state, action: PayloadAction<string>) => {
            state.EventInfo.price = action.payload
        },
        addCategory: (state, action: PayloadAction<string>) => {
            state.EventInfo.category = action.payload
        },
        addEventInfo: (state, action: PayloadAction<string>) => {
            state.EventInfo.eventInfo = action.payload
        },
        addLatitudeXInfo: (state, action: PayloadAction<number>) => {
            state.EventInfo.latitudeX = action.payload
        },
        addLongitudeYInfo: (state, action: PayloadAction<number>) => {
            state.EventInfo.longitudeY = action.payload
        },
        addFilterEvent: (state, action: PayloadAction<string>) => {
            state.EventInfo.filterEvent = action.payload
        },
        addFilterEventCategory: (state, action: PayloadAction<string>) => {
            state.EventInfo.filterEventCategory = action.payload
        }
    }
})

export const { addFilterEventCategory, addFilterEvent, addLatitudeXInfo, addLongitudeYInfo, addTitle, addEventStart, addEventEnd, addAdrees, addPlace, addPrice, addCategory, addEventInfo } = userSlice.actions

export default userSlice.reducer