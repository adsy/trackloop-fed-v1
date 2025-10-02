import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from './store';

export const useAppState: TypedUseSelectorHook<AppState> = useSelector;
