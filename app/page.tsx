/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { NativelyInfo, useNatively, NativelyCamera } from 'natively';

export default function Home() {


  const camera = new NativelyCamera()
const open_camera_callback = function (resp: any) {
    console.log(resp.base64); // base64 string of media file
    console.log(resp.content_type); // "image/png"
    console.log(resp.size); // "1024" <- file size in KB
};
const type = "photo" // "photo"/"video"
const quality = "high" // "high"/"medium"/"low"
const cameraType = "FRONT" // "FRONT"/"BACK"
camera.showCamera(type, quality, cameraType, open_camera_callback);


  
  const natively = useNatively(); // === window.natively 
  // window.natively.openConsole();
  natively.openConsole();
  const info = new NativelyInfo();
  const browserInfo = info.browserInfo();
  const openConsole = () => {
    natively.openConsole();
  };
  console.log(browserInfo);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <text>Check the console for browser info. isNativeApp: {browserInfo.isNativeApp ? "true" : "false"}</text>
      <button onClick={openConsole}>Open Console</button>
    </div>  
  );
}