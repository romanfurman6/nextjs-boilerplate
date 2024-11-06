/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import useNatively from 'natively/module/useNatively';
import { useEffect } from 'react';

export default function Home() {
  const natively = useNatively();

  useEffect(() => {
    if (natively) {
      const nativelyInfo = new natively.features.NativelyInfo();
      console.log(nativelyInfo.browserInfo());
    }
  }, [natively]);

  return <div>Check the console for browser info.</div>;
};
