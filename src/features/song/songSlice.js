import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

const initialState = {arr:
  [
  {id:1,name:"la la la",author:"dudi"},
 {id:2,name:"utyuty",author:"dany"},
 {id:3,name:"vvvv",author:"chany"},
 {id:4,name:"sdfsd",author:"moshe"}
]
 ,selectedSong:null
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    addSong: (state,action) => {
        action.payload.id = state.arr.length;
        state.arr.push(action.payload);
},
    removeSong: (state,action) => {
      let id=action.payload
        let index=state.arr.findIndex(item=>item.id===id);
        state.arr.splice(index,1)
},
    selectedSong: (state,action)=>{
        state.selectedSong=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addSong,removeSong,selectedSong } = songSlice.actions

export default songSlice.reducer