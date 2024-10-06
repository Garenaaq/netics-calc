import { create } from "zustand";

const getStoredName = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("username") || "";
    }
    return "";
};

export const useUserStore = create((set) => ({
    username: getStoredName(),
    setUsername: (name) => {
        set({ username: name });
        localStorage.setItem("username", name);
    },
}));
