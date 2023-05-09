import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import { apiEndpoint } from '../config'
import axios from 'axios'


export interface TicketState {
  ticketList: TicketInfo[]
}

const initialState: TicketState = {
  ticketList: [],
}

export const fetchTicketList = createAsyncThunk(
    'ticket/fetchTicketList',
    async () => {
      const response = await axios.get(apiEndpoint.tickets.tickets)
      return response.data
    }
  )



export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTicketList.fulfilled, (state, action) => {
      // Add user to the state array
      state.ticketList = action.payload
    })
  },

})



// Action creators are generated for each case reducer function
export const { } = ticketSlice.actions

export default ticketSlice.reducer
