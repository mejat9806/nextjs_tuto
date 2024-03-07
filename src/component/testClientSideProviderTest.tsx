"use client";
import { ReactNode } from "react";
//this for useContext and redux react query
function TestClientSideProviderTest({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default TestClientSideProviderTest;
