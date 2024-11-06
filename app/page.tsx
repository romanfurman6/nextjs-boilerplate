/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useNatively } from "natively/useNatively";

export default function Home() {
  // Initialize services
  const natively = useNatively();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => {
        natively?.shareText("Hello from Natively")
      }}>
        Open Natively
      </button>
    </main>
  )
}
