import { configureStore } from "@reduxjs/toolkit";
import TotalIncomeReducer from '../redux/totalIncomeSlice/totalIncomeSlice'
import VacationReducer from '../redux/vacationSlice/vacationSlice'
import beneFitSlice from "./../redux/beneFitSlice/beneFitSlice";
import employeesSlice from "./../redux/EmployeesSlice/EmployeesSlice";
import personSlice from "./../redux/personSlice/personSlice";



export const store= configureStore({
    reducer: {
        totalIncome:TotalIncomeReducer,
        vacations:VacationReducer,
        beneFit:beneFitSlice,
        employees:employeesSlice,
        person:personSlice,
    }
});

