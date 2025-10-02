export type UseModal = () => {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useModal:UseModal = () => {
    const isOpen = false;

    const open = () => {
        console.log('open')
    }

    const close = () => {
        console.log('close')
    }

    return {
        isOpen,
        open,
        close
    }
}