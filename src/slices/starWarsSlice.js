// src/slices/starWarsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch characters with pagination
export const fetchCharacters = createAsyncThunk('starWars/fetchCharacters', async (pageUrl) => {
  const response = await axios.get(pageUrl);
  return response.data;
});

// Async thunk to fetch character detail
export const fetchCharacterDetail = createAsyncThunk('starWars/fetchCharacterDetail', async (name) => {
  const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
  return response.data.results[0];
});

const starWarsSlice = createSlice({
  name: 'starWars',
  initialState: {
    characters: [],
    characterDetail: null,
    status: 'idle',
    next: null,
    previous: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characters = action.payload.results;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchCharacterDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacterDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characterDetail = action.payload;
      })
      .addCase(fetchCharacterDetail.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default starWarsSlice.reducer;
