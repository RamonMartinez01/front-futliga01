import { configureStore } from "@reduxjs/toolkit";
import partidos from './slices/fixtures.slice'

export default configureStore({
    reducer: {
        partidos,
    }
})