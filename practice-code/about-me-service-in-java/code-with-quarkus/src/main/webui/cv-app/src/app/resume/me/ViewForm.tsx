"use client";
import "client-only";
import Link from 'next/link';
import { useEffect, useState } from "react";

export interface FormDataProps {
  firstName: string
  lastName: string
}


export default async function ViewForm({data}: {data: string[]}) {
  const [resumeData, setResumeData] = useState<string[]>([]);

  useEffect(()=> {
    setResumeData(() => [...data]);
  }, [data]);


  return (
    <>
      <section className='flex flex-col gap-4 border-2 border-gray-600 pl-8 pr-12 py-12 rounded'>
        <form method="post" className='flex flex-col gap-2 items-start'>
          <Link href="/">
            <h6 className='flex text-green-600'>back</h6>
          </Link>
          <h2 className='font-semibold text-lg'>Please fill in your details below</h2>
          <label htmlFor="fname" className='flex flex-col gap-1'>
            <span>First name</span>
            <input type="text" name='fname' id='fname'  readOnly={true} className='px-2 py-3' />
          </label>
          <label htmlFor="lname" className='flex flex-col gap-1'>
            <span>Last name</span>
            <input type="text" name='lname' id='lname' readOnly={true} className='px-2 py-3' />
          </label>
          OUtput data
          {resumeData.map((message)=> (
            <div key={message}>NEW MESSAGE: {message}</div>
          ))}
        </form>
      </section>
    </>
  )
}
