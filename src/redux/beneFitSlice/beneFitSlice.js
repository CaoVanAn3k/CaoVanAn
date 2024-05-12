import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getAllBenefits,getAllEmployeeBenefits,getBenefitsPlan} from '../../service/totalIncomeService'
import axios from "axios";


export const getBeneFil = createAsyncThunk(
  "getBeneFil",
  async () => {
    try {
      const respon = await getAllBenefits();
      return respon
    
    } catch (error) {
      throw Error(error);
    }
  }
)

export const getAllEmployeesBeneFitSliceCondition = createAsyncThunk(
  "getAllBeneFitSliceCondition",
  async (type,value) => {
    try {
      const respon = await getAllEmployeeBenefits(type,value);
      return respon
    
    } catch (error) {
      throw Error(error);
    }
  }
)

export const getBenefitsPlanChange = createAsyncThunk(
  "getBenefitsPlanChange",
  async () => {
    try {
      const respon = await getBenefitsPlan();
      return respon
    
    } catch (error) {
      throw Error(error);
    }
  }
)


const initialState={
  Loading:false,
  Error:"",
  BeneFil:[],
  BeneFilPhan:[]
}


const beneFitSlice = createSlice({
  name:"beneFit",
  initialState:initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
    .addCase(getBeneFil.pending,(state,action)=>{
      state.Loading=true;
    })
    .addCase(getAllEmployeesBeneFitSliceCondition.pending,(state,action)=>{
      state.Loading=true;
    })
    .addCase(getBenefitsPlanChange.pending,(state,action)=>{
      state.Loading=true;
    })
    .addCase(getBeneFil.fulfilled,(state,action)=>{
      state.Loading=false;
      state.BeneFil=action.payload;
    })
    .addCase(getAllEmployeesBeneFitSliceCondition.fulfilled,(state,action)=>{
      state.Loading=false;
      state.BeneFil=action.payload;
    })
    .addCase(getBenefitsPlanChange.fulfilled,(state,action)=>{
      state.Loading=false;
      state.BeneFilPhan=action.payload;
    })
    .addCase(getBeneFil.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
    .addCase(getAllEmployeesBeneFitSliceCondition.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
    .addCase(getBenefitsPlanChange.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
  }
})

export default beneFitSlice.reducer