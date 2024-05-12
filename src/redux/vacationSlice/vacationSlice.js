import { createSlice,createAsyncThunk,buildCreateSlice } from "@reduxjs/toolkit";
import { getAllVacation,getAllEmployeeVacation } from "../../service/totalIncomeService";


export const getVacationReducer = createAsyncThunk(
  "getVacation",
  async ()=>{
    try {
      const data = await getAllVacation();
      return data
    } catch (error) {
      throw Error(error);
    }
  }
)

export const getAllVacationReducer = createAsyncThunk(
  "getAllVacation",
  async (type,value)=>{
    try {
      const data = await getAllEmployeeVacation(type,value);
      return data
    } catch (error) {
      throw Error(error);
    }
  }
)

export const getAnniversaryReducer = createAsyncThunk(
  "getAnniversary",
  async ()=>{
    try {
      const data = await getAnniversary();
      return data
    } catch (error) {
      throw Error(error);
    }
  }
)

const initialState={
  Error:"",
  Loading:false,
  EmployeesVacation:[],
  EmployeeeAnniversary:[],

}
export const VacationReducer=createSlice({
    name:"Vacation",
    initialState:initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
      builder
      .addCase(getVacationReducer.pending,(state,action)=>{
        state.Loading=true;
      })
      .addCase(getAllVacationReducer.pending,(state,action)=>{
        state.Loading=true;
      })
      .addCase(getAnniversaryReducer.pending,(state,action)=>{
        state.Loading=true;
      })
      .addCase(getVacationReducer.fulfilled,(state,action)=>{
        state.Loading=false;
        state.EmployeesVacation=action.payload;
      })
      .addCase(getAllVacationReducer.fulfilled,(state,action)=>{
        state.Loading=false;
        state.EmployeesVacation=action.payload;
      })
      .addCase(getAnniversaryReducer.fulfilled,(state,action)=>{
        state.Loading=false;
        state.EmployeeeAnniversary=action.payload;
      })
      .addCase(getVacationReducer.rejected,(state,action)=>{
        state.Loading=false;
        state.Error=action.error.message || "loi khong lay duoc du lieu";
      })
      .addCase(getAllVacationReducer.rejected,(state,action)=>{
        state.Loading=false;
        state.Error=action.error.message || "loi khong lay duoc duoc";
      })
      .addCase(getAnniversaryReducer.rejected,(state,action)=>{
        state.Loading=false;
        state.Error=action.error.message || "loi khong lay duoc duoc";
      })
    }
  })

  export default VacationReducer.reducer


  