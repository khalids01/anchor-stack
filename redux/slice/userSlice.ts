import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface InitialState{
        id: string | null;
}

const initialState : InitialState = {
        id: null
}

export const UserIdSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId: (state: InitialState, action: PayloadAction<typeof initialState.id>) =>{
            state.id = action.payload
        }
    }
})

export const {setUserId} = UserIdSlice.actions

export default UserIdSlice.reducer