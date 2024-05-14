import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getAllEmployeeHaveActualDaySmallestReqDay,getAllEmployeeHaveBirthDayMonth,getAllEmployeeHaveAnniversary,getAllEmployeeHaveBenefitsPlanChange} from '../../service/APIService'


export const getVacationEmployee = createAsyncThunk(
  "getVacationEmployee",
  async () => {
    try {
      const respon = await getAllEmployeeHaveActualDaySmallestReqDay();
      return respon
    
    } catch (error) {
      throw Error(error);
    }
  }
)

export const getBirthDayMonthEmployee = createAsyncThunk(
  "getBirthDayMonth",
  async () => {
    try {
      const respon = await getAllEmployeeHaveBirthDayMonth();
      return respon
    
    } catch (error) {
      throw Error(error);
    }
  }
)
export const getAllEmployeeByAnniversary = createAsyncThunk(
  "getAnniversary",
  async ()=>{
    try {
      const data = await getAllEmployeeHaveAnniversary();
      return data
    } catch (error) {
      throw Error(error);
    }
  }
)
export const getBenefitsPlanChange = createAsyncThunk(
  "getBenefitsPlanChange",
  async () => {
    try {
      const respon = await getAllEmployeeHaveBenefitsPlanChange();
      return respon
    
    } catch (error) {
      throw Error(error);
    }
  }
)

const initialState={
  Loading:false,
  Error:"",
  Vacation:[],
  BirthDay:[],
  EmployeeeAnniversary: [],
  BenefitsPlan: []
}


const EmployeesSlice = createSlice({
  name:"Employees",
  initialState:initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
    .addCase(getVacationEmployee.pending,(state,action)=>{
      state.Loading=true;
    })
    .addCase(getBirthDayMonthEmployee.pending,(state,action)=>{
      state.Loading=true;
    })
    .addCase(getAllEmployeeByAnniversary.pending,(state,action)=>{
      state.Loading=true;
    })
    .addCase(getBenefitsPlanChange.pending,(state,action)=>{
      state.Loading=true;
    })
    .addCase(getVacationEmployee.fulfilled,(state,action)=>{
      state.Loading=false;
      state.Vacation=action.payload;
    })
    .addCase(getBirthDayMonthEmployee.fulfilled,(state,action)=>{
      state.Loading=false;
      state.BirthDay=action.payload;
    })
    .addCase(getAllEmployeeByAnniversary.fulfilled,(state,action)=>{
      state.Loading=true;
      state.EmployeeeAnniversary=action.payload;
    })
    .addCase(getBenefitsPlanChange.fulfilled,(state,action)=>{
      state.Loading=true;
      state.BenefitsPlan=action.payload;
    })
    .addCase(getVacationEmployee.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
    .addCase(getBirthDayMonthEmployee.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
    .addCase(getAllEmployeeByAnniversary.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
    .addCase(getBenefitsPlanChange.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
  }
})

export default EmployeesSlice.reducer