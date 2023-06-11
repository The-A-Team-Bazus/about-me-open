import "server-only"
import React from "react"
import ViewForm from "./ViewForm";
import { getResumeData } from "../me/getData";


export default async function ViewResume() {
  const resumeData = await getResumeData();

  return (
    <>
        <div>View your resume here, streamed from apache kafka</div>
        {/* @ts-expect-error Async Server Component */}
        <ViewForm  data={resumeData}/>
    </>
  );
}