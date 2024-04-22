import { configureStore } from "@reduxjs/toolkit";
import fixtures from './slices/fixtures.slice'

export default configureStore({
    reducer: {
        fixtures,
    }
})