'use client';
import { Button } from "@/app/_button/Button";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Button
        onClick={() => { router.push("/") }}
      >
        Home
      </Button>
    </div>
  )
}

export default NotFound;
