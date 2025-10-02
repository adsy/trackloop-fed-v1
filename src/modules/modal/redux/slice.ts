import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from '../models';

const name = 'modal';

export const DefaultModalState: ModalState = {
  open: false,
  modalContent: null,
  size: null
};

export const modalSlice = createSlice({
  name,
  initialState: DefaultModalState,
  reducers: {
    handleResetModal: (state) => {
      state.open = false;
    },
    handleToggleModal: (state, action) => {
      state.open = action.payload.open;
      if (action.payload.modalContent) {
        state.modalContent = action.payload.modalContent;
      }

      if (action.payload.size) {
        state.size = action.payload.size;
      }
    }
  }
});

export const ModalReducer = modalSlice.reducer;
export const { handleResetModal, handleToggleModal } = modalSlice.actions;
