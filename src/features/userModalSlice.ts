import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const userModalSlice = createSlice({
    name: "deliveryModal",
    initialState: {
        editOr: false,
    } as any,
    reducers: {
        setEditOr(state, action: PayloadAction<boolean>) {
            state.editOr = action.payload;
          },
    },
})

export const { setEditOr } = userModalSlice.actions;
export default userModalSlice.reducer;