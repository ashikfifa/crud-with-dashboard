import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL= process.env.REACT_APP_API_URL
const API_URL = "http://localhost:3001/users";

type User = {
  id?: number;
  email: string;
  phone: string;
  status: string;
  date: string | Date;
};

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const CreateUser = createAsyncThunk<User, User>(
  "users/create",
  async (newUser) => {
    const response = await axios.post(API_URL, newUser);
    return response.data;
  }
);

export const updateUser = createAsyncThunk<User, User>(
  "users/update",
  async (updatedUser) => {
    const response = await axios.put(
      `${API_URL}/${updatedUser.id}`,
      updatedUser
    );
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/delete",
  async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    rows: [],
    status: "idle",
    error: null,
    statusCounts: {},
    monthCounts: {},
  } as any,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.rows.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.rows.findIndex(
          (item: any) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.rows[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.rows = state.rows.filter(
          (User: any) => User.id !== action.payload
        );
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rows = action.payload;

        const statusCounts: Record<string, number> = {};
        const monthCounts: Record<string, number> = {};

        action.payload.forEach((User: any) => {
          const status = User.status || "Unknown";
          statusCounts[status] = (statusCounts[status] || 0) + 1;
          const date = new Date(User.date);
          const month = date.toLocaleString("default", {
            month: "long",
            year: "numeric",
          });
          monthCounts[month] = (monthCounts[month] || 0) + 1;
        });

        state.statusCounts = statusCounts;
        state.monthCounts = monthCounts;
      });
  },
});

export default usersSlice.reducer;
