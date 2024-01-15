import Link from "next/link";
import { auth } from "../(auth)/auth";
import { redirect } from "next/navigation";
import { PlasticButton } from "@/components/PlasticButton";
import { Zap } from "lucide-react";

export default async function DashBoard() {
  const session = await auth();

  // fixme callback url
  if (!session) redirect("/api/auth/signin?callbackUrl=/dashboard");

  return (
    <main className="flex item-center justify-center h-[300px] pt-10">
      <PlasticButton icon={<Zap />} text={"Engines On"} />
    </main>
  );
}
