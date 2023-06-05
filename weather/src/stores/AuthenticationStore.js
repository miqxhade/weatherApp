import create from 'zustand';
import { persist, devtools } from "zustand/middleware";

const token = create(
  persist(
    devtools((set) => ({
      bearer: null,
      setBearer: (d) => set(() => ({ bearer: d })),
      resetBearer: () => set(() => ({ bearer: null })),
    })),
    {
      name: "bearerToken",
    }
  )
);

const user = create(
  devtools((set) => ({
    data: {},
    setData: (d) => set(() => ({ data: d })),
  }))
);

const isLogin = create(
  persist(
    (set) => ({
      status: false,
      setStatus: (d) => set(() => ({ status: d })),
    }),
    {
      name: "status",
    }
  )
);

export { token, isLogin, user };