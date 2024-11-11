/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect } from 'react';
import useNatively from 'natively/useNatively';
import { NativelyInfo } from 'natively';


export default function Home() {

  const natively = useNatively();
  const nativelyInfo = new NativelyInfo();
  console.log(nativelyInfo.browserInfo());
  // window.natively.isAndroidApp();
  useEffect(() => {
    if (natively) {
      // const nativelyInfo = new NativelyInfo();
      
      natively?.openConsole()
    }
  }, [natively]);

  return <div>Check the console for browser info.</div>;
};
