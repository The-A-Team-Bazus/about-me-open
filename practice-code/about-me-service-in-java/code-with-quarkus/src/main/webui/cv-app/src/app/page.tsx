import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 gap-12">
      <h1 className='font-bold text-3xl'>Welcome to your resume manager</h1>
      <div className='flex flex-row gap-8'>
        <Link href='/resume/create'>
          <button
            className='py-3 px-3 bg-blue-600 text-white font-semibold rounded-lg'
          >
            Create resume
          </button>
        </Link>
        <Link href='/resume/me'>
          <button
            className='py-3 px-3 bg-blue-600 text-white font-semibold rounded-lg'
          >
            View resume
          </button>
        </Link>
      </div>
    </main>
  )
}
