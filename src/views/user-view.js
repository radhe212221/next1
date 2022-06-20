import {  useRouter } from "next/router";
import React from "react";

export default function UserView(data) {
  const router=useRouter()
  return (
    <>
      <button onClick={()=>router.push("/")}>back</button>
      <div>UserView : {JSON.stringify(data?.data)}</div>
    </>
  );
}
