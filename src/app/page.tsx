'use client'

import BtnUrl from "@/components/btnUrl/btnUrl.component";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-white p-6 rounded shadow">
        <div className="mx-auto text-center" >
          <h1>WELCOME</h1>
        </div>
        <div className="flex justify-evenly" >
          <BtnUrl url={"/auth/login"} pdd="p-2" margin="mr-1"  bgColor={"bg-transparent"} name={"LOGIN"} />
          <BtnUrl url={"/auth/register"} pdd="p-2" margin="ml-1" bgColor={"bg-transparent"} name={"REGISTER"} />
        </div>
      </div>
    </div>
  );
}
