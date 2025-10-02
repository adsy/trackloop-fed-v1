import { ReactNode } from 'react';

export enum ModalSize {
  mini = 'mini',
  tiny = 'tiny',
  small = 'small',
  large = 'large',
  fullScreen = 'fullscreen'
}

export type ModalContent = {
  header?: string;
  body?: ReactNode;
  actions?: ReactNode;
};

export interface ModalState {
  open: boolean;
  modalContent: null | ModalContent;
  size: null | ModalSize;
}
