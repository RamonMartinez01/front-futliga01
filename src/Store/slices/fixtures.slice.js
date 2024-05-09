import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_BASE_URL from "../../utils/apiConfig";

const fixturesSlice = createSlice({
    name: 'fixtures',
    initialState: null,
    reducers: {
        setFixtures: (currentValue, action) => action.payload
    }
})

export const { setFixtures } = fixturesSlice.actions

export default fixturesSlice.reducer

export const getfixturesThunk = () => (dispatch) => {
    const url = `${API_BASE_URL}`
    return axios.get(url)
        .then(res => {
            const fixtures = res.data.response;
            dispatch(setFixtures(fixtures))
            return fixtures;
        })
        .catch(err => {
            console.error('Error fething fixtures:', err );
            throw err;
        });
    }