
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE } from "../../config";
import type { Profile } from "../types";

export const fetchProfile = createAsyncThunk("profile/fetch", async () => {
  const res = await axios.get(`${API_BASE}/profile`);
  return res.data as Profile;
});

interface ProfileState {
  data: Profile | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  data: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchProfile.pending, (s) => {
			s.loading = true;
			s.error = null;
		});
    b.addCase(fetchProfile.fulfilled, (s, a) => {
			s.loading = false;
			s.data = a.payload;
		});
    b.addCase(fetchProfile.rejected, (s, a) => {
			s.loading = false;
			s.error = a.error.message || "Failed to load summary";
		});
  },
});

export default slice.reducer;
