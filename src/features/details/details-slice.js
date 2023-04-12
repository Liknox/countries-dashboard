import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// thunk
export const loadCountryByName = createAsyncThunk(
	"@@details/load-country-by-name",
	(name, { extra: { client, api } }) => {
		return client.get(api.searchByCountry(name))
	}
)

export const loadNeighborsByBorder = createAsyncThunk(
	"@@details/load-neighbors",
	(borders, { extra: { client, api } }) => {
		return client.get(api.filterByCode(borders))
	}
)

const initialState = {
	currentCountry: null,
	status: "idle",
	error: null,
	neighbors: [],
}

const detailsSlice = createSlice({
	name: "@@details",
	initialState,
	reducers: {
		clearDetails: () => initialState,
	},
	extraReducers: {
		[loadCountryByName.pending]: state => {
			state.status = "loading"
			state.error = null
		},
		[loadCountryByName.rejected]: (state, action) => {
			state.status = "rejected"
			state.error = action.payload || action.meta.error
		},
		[loadCountryByName.fulfilled]: (state, action) => {
			state.status = "received"
			state.currentCountry = action.payload.data[0]
		},
		[loadNeighborsByBorder.fulfilled]: (state, action) => {
			state.neighbors = action.payload.data.map(e => e.name)
		},
	},
	// extraReducers: builder => {
	// 	builder
	// 		.addCase(loadCountryByName.pending, state => {
	// 			state.status = "loading"
	// 			state.error = null
	// 		})
	// 		.addCase(loadCountryByName.rejected, (state, action) => {
	// 			state.status = "rejected"
	// 			state.error = action.payload || action.meta.error
	// 		})
	// 		.addCase(loadCountryByName.fulfilled, (state, action) => {
	// 			state.status = "received"
	// 			state.currentCountry = action.payload.data[0]
	// 		})
	// 		.addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
	// 			state.neighbors = action.payload.data.map(e => e.name)
	// 		})
	// },
})

export const { setCountry, setLoading, setError, setNeighbors, clearDetails } = detailsSlice.actions
export const detailsReducer = detailsSlice.reducer

// selectors
export const selectCurrentCountry = state => state.details.currentCountry
export const selectDetails = state => state.details
export const selectNeighbors = state => state.details.neighbors
