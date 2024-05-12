import { createSlice, createAsyncThunk, buildCreateSlice } from "@reduxjs/toolkit";
import { getAllEmployees,getAllEmployeeTotalIncomeByCondition } from "../../service/totalIncomeService";
export const getEmployeesByTotalIncome =createAsyncThunk(
  "getEmployeesByTotalIncome",
  async ()=>{
    try {
     const data = await getAllEmployees();
     return data
      
    } catch (error) {
      throw new Error(error);
    }
  }
)

export const getAllEmployeesByTotalIncomeCondition =createAsyncThunk(
  "getAllEmployeesTotalIncomeCondition",
  async (type,value)=>{
    try {
     const data = await getAllEmployeeTotalIncomeByCondition(type,value);
     return data
      
    } catch (error) {
      throw new Error(error);
    }
  }
)

const initialState={
  Loading:false,
  Error:"",
  EmployessTotalIncome:[]
}


const TotalIncomeSlice=createSlice({
  name:"TotalIncome",
  initialState:initialState,

  reducers:{

  },
  extraReducers:(builder)=>{
    builder
    .addCase(getEmployeesByTotalIncome.pending,(state,action)=>{
      state.Loading =true;
    })
    .addCase(getAllEmployeesByTotalIncomeCondition.pending,(state,action)=>{
      state.Loading =true;
    })
    .addCase(getEmployeesByTotalIncome.fulfilled,(state,action)=>{
      state.Loading =false;
      state.EmployessTotalIncome=action.payload;
    })
    .addCase(getAllEmployeesByTotalIncomeCondition.fulfilled,(state,action)=>{
      state.Loading =false;
      state.EmployessTotalIncome=action.payload;
    })
    .addCase(getEmployeesByTotalIncome.rejected,(state,action)=>{
      state.Loading =false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
    .addCase(getAllEmployeesByTotalIncomeCondition.rejected,(state,action)=>{
      state.Loading =false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
  }


  
})
export default TotalIncomeSlice.reducer





