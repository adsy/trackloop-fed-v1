import { combineReducers } from '@reduxjs/toolkit';

export const AppReducer = combineReducers({
});

export type MiddlewareState = ReturnType<typeof AppReducer>;
