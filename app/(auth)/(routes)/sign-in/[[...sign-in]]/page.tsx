"use client"
import { SignIn } from "@clerk/nextjs";

export default function Page() {

  return (
   <div className="absolute bottom-0 mb-10">
      <SignIn/>
    </div>
  );
}
