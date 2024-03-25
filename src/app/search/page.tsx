"use client";

import { useUserInput } from "@/providers/UserInput";

export default function Search() {
  const { result } = useUserInput();

  return <>search results: {result}</>;
}
