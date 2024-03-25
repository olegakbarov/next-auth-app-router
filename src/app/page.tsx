"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserInput } from "@/providers/UserInput";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [q, setQ] = useState("");
  const router = useRouter();
  const { updateUserInput, startStreaming } = useUserInput();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQ(e.target.value);
      updateUserInput(e.target.value);
    },
    [updateUserInput],
  );

  const onClick = useCallback(() => {
    startStreaming();
    router.push("/search");
  }, [router, startStreaming]);

  useEffect(() => {
    router.prefetch("/search");
  }, [router]);

  return (
    <>
      <Input value={q} onChange={onChange} />
      <Button onClick={onClick}>Search</Button>
    </>
  );
}
