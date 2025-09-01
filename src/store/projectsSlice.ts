
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE } from "../../config";
import type { Project, ProjectDetail } from "../types";

const API = `${API_BASE}/projects`;

export const fetchProjects = createAsyncThunk("projects/fetchAll", async () => {
  const res = await axios.get(API);
  return res.data as Project[];
});

export const fetchProjectById = createAsyncThunk("projects/fetchById", async (id: string) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data as ProjectDetail;
});

interface State {
  projects: Project[];
  detail: ProjectDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  projects: [],
  detail: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchProjects.pending, (s) => {
			s.loading = true;
			s.error = null;
			s.projects = [];
		});
    b.addCase(fetchProjects.fulfilled, (s, a) => {
			s.loading = false;
			s.projects = a.payload;
		});
    b.addCase(fetchProjects.rejected, (s, a) => {
			s.loading = false;
			s.error = a.error.message || "Failed to load projects";
		});

    b.addCase(fetchProjectById.pending, (s) => {
			s.loading = true;
			s.error = null;
			s.detail = null;
		});
    b.addCase(fetchProjectById.fulfilled, (s, a) => {
			s.loading = false;
			s.detail = a.payload;
		});
    b.addCase(fetchProjectById.rejected, (s, a) => {
			s.loading = false;
			s.error = a.error.message || "Failed to load project";
		});
  },
});

export default slice.reducer;
