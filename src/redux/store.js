import { configureStore } from "@reduxjs/toolkit";
import TotalIncomeReducer from '../redux/totalIncomeSlice/totalIncomeSlice'
import VacationReducer from '../redux/vacationSlice/vacationSlice'
import beneFitSlice from "./../redux/beneFitSlice/beneFitSlice";
import employeesSlice from "./../redux/EmployeesSlice/EmployeesSlice";



export const store= configureStore({
    reducer: {
        totalIncome:TotalIncomeReducer,
        vacations:VacationReducer,
        beneFit:beneFitSlice,
        employess:employeesSlice
    }
});

