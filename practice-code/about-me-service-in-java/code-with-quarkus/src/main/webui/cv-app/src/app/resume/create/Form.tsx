'use client'
import { SyntheticEvent, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export interface FormDataProps {
  firstName: string
  lastName: string
}

export default function Form() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      fname: { value: string };
      lname: { value: string };
    }
    let firstName = target.fname.value;
    let lastName = target.lname.value;

    if (!firstName) {
      console.error("Enter your first name");
      alert("Enter your first name");
      return;
    }
    if (!lastName) {
      console.error("Enter your last name");
      alert("Enter your last name");
      return;
    }
    const data: FormDataProps = {
      firstName,
      lastName
    };
    const formData = JSON.stringify(data);

    try {
      const response = await axios.post('http://localhost:3000/api/resume/create', formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        });
      if (response.status === 201) {
        console.log("Pushed messages to topic successful")
        alert("Pushed messages to topic successful")
        setFirstName("");
        setLastName("");
      }
    } catch (error: any) {
      console.error(error?.message || error);
    }
  }

  return (
    <>
      <section className='flex flex-col gap-4 border-2 border-gray-600 pl-8 pr-12 py-12 rounded'>
        <form method="post" className='flex flex-col gap-2 items-start' onSubmit={handleSubmit}>
          <Link href="/">
            <h6 className='flex text-green-600'>back</h6>
          </Link>
          <h2 className='font-semibold text-lg'>Please fill in your details below</h2>
          <label htmlFor="fname" className='flex flex-col gap-1'>
            <span>First name</span>
            <input type="text" name='fname' id='fname' value={firstName} className='px-2 py-3' onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label htmlFor="lname" className='flex flex-col gap-1'>
            <span>Last name</span>
            <input type="text" name='lname' id='lname' value={lastName} className='px-2 py-3' onChange={(e) => setLastName(e.target.value)} />
          </label>
          <button
            type='submit'
            className='bg-green-500 py-2 px-4 rounded hover:bg-green-600 transition-all duration-200'
          >Create my bio</button>
        </form>
        <section className='bg-gray-300 rounded pl-2 py-1 flex flex-col gap-2'>
          Output
          <hr />
          <div>
            First Name: {firstName && firstName}
          </div>
          <div>
            Last Name: {lastName && lastName}
          </div>
        </section>
      </section>
    </>
  )
}
