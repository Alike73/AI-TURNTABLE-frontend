
import { createSlice } from '@reduxjs/toolkit';

export const audioSlice = createSlice({
    name: 'audioItems',

    initialState: {
        selectedRecord: null,
        isPlaying: false,
        playEqualizer: false,
        activeArm: false,
        currentTime: 0,
        showHeroPlayer: false,
        resetAnimation: false,
        volume: 50,
        duration: 0,
        isSeeking: false,
        hovered: false,
    },
    reducers: {
        selectRecord: (state, action) => {
            state.selectedRecord = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setPlayEqualizer: (state, action) => {
            state.playEqualizer = action.payload;
        },
        setActiveArm: (state, action) => {
            state.activeArm = action.payload;
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setShowHeroPlayer: (state, action) => {
            state.showHeroPlayer = action.payload;
        },
        setResetAnimation: (state, action) => {
            state.resetAnimation = action.payload;
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setIsSeeking: (state, action) => {
            state.isSeeking = action.payload;
        },
        setHovered: (state, action) => {
            state.hovered = action.payload;
        },
    },
    
});

export const getIsPlayingAudio = state => state.audioItems.isPlaying;
export const getPlayEqualizer = state => state.audioItems.playEqualizer;
export const getActiveArm = state => state.audioItems.activeArm;
export const getCurrentTime = state => state.audioItems.currentTime;
export const getHeroPlayer = state => state.audioItems.showHeroPlayer;
export const getResetAnimation = state => state.audioItems.resetAnimation;
export const getVolume = state => state.audioItems.volume;
export const getSelectedRecord = state => state.audioItems.selectedRecord;
export const getDuration = state => state.audioItems.duration;
export const getIsSeeking = state => state.audioItems.isSeeking;
export const getHovered = state => state.audioItems.hovered;

export const { 
    setIsPlaying, setPlayEqualizer, setActiveArm, 
    setCurrentTime, setShowHeroPlayer, 
    setResetAnimation, setVolume, selectRecord, 
    setDuration, setIsSeeking, setHovered } = audioSlice.actions;
export default audioSlice.reducer;