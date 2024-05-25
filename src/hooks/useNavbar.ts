import { create } from 'zustand';

interface NavbarStore {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useNavbar = create<NavbarStore>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true })
}));

export default useNavbar;
