"use client";

import { useUserInput } from "@/providers/UserInput";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userInput } = useUserInput();

  return (
    <>
      <h1>{userInput}</h1>
      <div>{children}</div>
    </>
  );
};

export default Layout;
