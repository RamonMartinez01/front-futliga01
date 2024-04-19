import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_BASE_URL from "../../utils/apiConfig";

const fixturesSlice = createSlice({
    name: 'partidos',
    initialState: null,
    reducers: {
        setPartidos: (currentValue, action) => action.payload
    }
})

export const { setPartidos } = fixturesSlice.actions

export default fixturesSlice.reducer

export const getfixturesThunk = () => (dispatch) => {
    const url = `${API_BASE_URL}`
    axios.get(url)
        .then(res => {
            const partidos = res.data.response;
            dispatch(setPartidos(partidos))
        })
        .catch(err => console.log(err))
}