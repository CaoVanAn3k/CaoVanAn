import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getAllPersonNotEmployee} from '../../service/APIService'

export const getAllPerson=createAsyncThunk(
    "getAllPerson",
    async ()=>{
      try {
        const data = await getAllPersonNotEmployee();
        return data
      } catch (error) {
        throw new Error(error);
      }
    }
)

const initialState={
  Loading:false,
  Error:"",
  Personals:[]
}


const PersonSlice = createSlice({
  name:"person",
  initialState:initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
        .addCase(getAllPerson.pending,(state)=>{
            state.Loading=true;
        })
        .addCase(getAllPerson.fulfilled,(state,action)=>{
            state.Loading=false;
            state.Personals=action.payload;
        })
        .addCase(getAllPerson.rejected,(state,action)=>{
            state.Loading=false;
            state.Error=action.error.message || "Have error when i trying to fulfill";
        })
  }
})

export default PersonSlice.reducer