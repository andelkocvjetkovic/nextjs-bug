'use client'
import { useRouter } from "next/navigation";
import { Button } from "@/app/_button/Button";

export default function Page() {

  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => { router.push("/404") }}
      >
        Not Found
      </Button>
    </>
  );
}
