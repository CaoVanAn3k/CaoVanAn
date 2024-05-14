import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEmployeeByVacation as getAllEmployeeByVacationApi,getAllEmployeeVacationCondition } from "../../service/APIService";


export const getAllEmployeeByVacation = createAsyncThunk(
  "getAllEmployeeByVacation",
  async ()=>{
    try {
      const data = await getAllEmployeeByVacationApi();
      return data
    } catch (error) {
      throw Error(error);
    }
  }
)

export const getAllEmployeeByVacationAndCondition = createAsyncThunk(
  "getAllEmployeeByVacationAndCondition",
  async (data)=>{
    try {
      const response = await getAllEmployeeVacationCondition(data.type,data.value);
      return response
    } catch (error) {
      throw Error(error);
    }
  }
)



const initialState={
  Error:"",
  Loading:false,
  EmployeesVacation:[]

}
export const VacationReducer=createSlice({
    name:"Vacation",
    initialState:initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
      builder
      .addCase(getAllEmployeeByVacation.pending,(state,action)=>{
        state.Loading=true;
      })
      .addCase(getAllEmployeeByVacationAndCondition.pending,(state,action)=>{
        state.Loading=true;
      })
      .addCase(getAllEmployeeByVacation.fulfilled,(state,action)=>{
        state.Loading=false;
        state.EmployeesVacation=action.payload;
      })
      .addCase(getAllEmployeeByVacationAndCondition.fulfilled,(state,action)=>{
        state.Loading=false;
        state.EmployeesVacation=action.payload;
      })
      .addCase(getAllEmployeeByVacation.rejected,(state,action)=>{
        state.Loading=false;
        state.Error=action.error.message || "loi khong lay duoc du lieu";
      })
      .addCase(getAllEmployeeByVacationAndCondition.rejected,(state,action)=>{
        state.Loading=false;
        state.Error=action.error.message || "loi khong lay duoc duoc";
      })
    }
  })

  export default VacationReducer.reducer


  