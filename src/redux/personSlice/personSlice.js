import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPersonNotEmployee,
  updatePersonToEmployee as updatePersonToEmployeeAPI,
  addNewPerson as addNewPersonAPI,
} from "../../service/APIService";

export const getAllPerson = createAsyncThunk("getAllPerson", async () => {
  try {
    const data = await getAllPersonNotEmployee();
    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const addNewPerson = createAsyncThunk("addNewPerson", async (data) => {
  try {
    const response = await addNewPersonAPI(data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
});

export const updatePersonToEmployee = createAsyncThunk(
  "updatePersonToEmployee",
  async (data) => {
    try {
      const response = await updatePersonToEmployeeAPI(data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  },
);

const initialState = {
  Loading: false,
  Error: "",
  Personals: [],
};

const PersonSlice = createSlice({
  name: "person",
  initialState: initialState,
  reducers: {
    updatePersonalListAfterBecomeToEmployee: (state, action) => {
      state.Personals = state.Personals.filter(
        (person) => person.personalId === action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPerson.pending, (state) => {
        state.Loading = true;
      })
      .addCase(updatePersonToEmployee.pending, (state) => {
        state.Loading = true;
      })
      .addCase(addNewPerson.pending, (state) => {
        state.Loading = true;
      })
      .addCase(getAllPerson.fulfilled, (state, action) => {
        state.Loading = false;
        state.Personals = action.payload;
      })
      .addCase(updatePersonToEmployee.fulfilled, (state) => {
        state.Loading = false;
      })
      .addCase(addNewPerson.fulfilled, (state) => {
        state.Loading = false;
      })
      .addCase(getAllPerson.rejected, (state, action) => {
        state.Loading = false;
        state.Error =
          action.error.message || "Have error when i trying to fulfill";
      })
      .addCase(updatePersonToEmployee.rejected, (state, action) => {
        state.Loading = false;
        state.Error =
          action.error.message || "Have error when i trying to fulfill";
      })
      .addCase(addNewPerson.rejected, (state, action) => {
        state.Loading = false;
        state.Error =
          action.error.message || "Have error when i trying to fulfill";
      });
  },
});

export const { updatePersonalListAfterBecomeToEmployee } = PersonSlice.actions;
export default PersonSlice.reducer;
