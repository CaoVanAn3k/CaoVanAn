import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getAllEmployeeByBenefit,getAllEmployeeBenefitsWithCondition} from '../../service/APIService'


export const getAllEmployeeWithBenefit = createAsyncThunk(
  "getAllEmployeeWithBenefit",
  async () => {
    try {
      const respon = await getAllEmployeeByBenefit();
      return respon
    
    } catch (error) {
      throw Error(error);
    }
  }
)

export const getAllEmployeesBeneFitSliceCondition = createAsyncThunk(
  "getAllBeneFitSliceCondition",
  async (data) => {
    try {
      const respon = await getAllEmployeeBenefitsWithCondition(data.type,data.value);
      return respon
    
    } catch (error) {
      throw Error(error);
    }
  }
)
const initialState={
  Loading:false,
  Error:"",
  Benefits:[]
}


const beneFitSlice = createSlice({
  name:"beneFit",
  initialState:initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
    .addCase(getAllEmployeeWithBenefit.pending,(state,action)=>{
      state.Loading=true;
    })
    .addCase(getAllEmployeesBeneFitSliceCondition.pending,(state,action)=>{
      state.Loading=true;
    })
    .addCase(getAllEmployeeWithBenefit.fulfilled,(state,action)=>{
      state.Loading=false;
      state.Benefits=action.payload;
    })
    .addCase(getAllEmployeesBeneFitSliceCondition.fulfilled,(state,action)=>{
      state.Loading=false;
      state.Benefits=action.payload;
    })
    .addCase(getAllEmployeeWithBenefit.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
    .addCase(getAllEmployeesBeneFitSliceCondition.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
  }
})

export default beneFitSlice.reducer