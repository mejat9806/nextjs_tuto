import TestComponent from "@/component/testComponent/TestComponent";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-2 w-full">
      {children}
      <TestComponent />
    </div>
  );
}

export default layout;
