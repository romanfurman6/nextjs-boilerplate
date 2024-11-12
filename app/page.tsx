'use client';
import useNatively from 'natively/useNatively';
import { NativelyInfo } from 'natively';

export default function Home() {

  const natively = useNatively();
  const info = new NativelyInfo();
  const browserInfo = info.browserInfo();
  const openConsole = () => {
    natively.openConsole();
  };
  console.log(browserInfo);
  return (
    <div>
      Check the console for browser info. isNativeApp: {browserInfo.isNativeApp ? "true" : "false"}
      <button onClick={openConsole}>Open Console</button>
    </div>
  );
};
