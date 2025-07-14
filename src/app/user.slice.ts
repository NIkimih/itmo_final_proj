import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  email: string;
  test: number
}

const initialState: UserState = {
  email: "",
  test: 123
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    cleanUser: (state) => {
      state.email = ""
    }
  },
})

export const { setUser, cleanUser } = userSlice.actions

export default userSlice.reducer