'use client'

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}> <div className="bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat" > {children} </div></Provider>;
}
