import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getVacation,getBirthDayMonth} from '../../service/totalIncomeService'


export const getVacationEmployee = createAsyncThunk(
  "getVacationEmployee",
  async () => {
    try {
      const respon = await getVacation();
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
      const respon = await getBirthDayMonth();
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
}


const EmployeesSlice = createSlice({
  name:"beneFit",
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
    .addCase(getVacationEmployee.fulfilled,(state,action)=>{
      state.Loading=false;
      state.Vacation=action.payload;
    })
    .addCase(getBirthDayMonthEmployee.fulfilled,(state,action)=>{
      state.Loading=false;
      state.BirthDay=action.payload;
    })
    .addCase(getVacationEmployee.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
    .addCase(getBirthDayMonthEmployee.rejected,(state,action)=>{
      state.Loading=false;
      state.Error=action.error.message || "khong lay duoc du lieu";
    })
  }
})

export default EmployeesSlice.reducer