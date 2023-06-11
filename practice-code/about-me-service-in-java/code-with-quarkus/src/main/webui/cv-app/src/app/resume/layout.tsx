import React from 'react'

function layout({children} : {children:React.ReactNode}) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-12 gap-8">
        {children}
      </main>
    </>
  )
}

export default layout