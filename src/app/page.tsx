"use client";

import SideBar from "@/component/web/Sidebar";
import Link from "next/link";
import { CopyBlock, atomOneDark } from "react-code-blocks";

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-blue-400 p-4 flex justify-center">
        <div className="max-w-[1600px] w-full">
          <h1 className="text-xl text-white">DNA PDF Generator</h1>
        </div>
      </div>
      <div className="justify-center flex h-full">
        <div className="flex flex-row max-w-[1600px] h-full w-full ">
          <SideBar />
          <main className="p-12 text-gray-600 w-full">
            <div className="w-full">
              <h2 className="text-4xl mb-4 pb-3 border-b border-gray-200">
                Introduction
              </h2>
              <p className="mb-8 mt-8 text-lg">
                Welcome to the documentation for our online PDF Converter. This
                web application allows you to convert your data into a PDF
                format.
              </p>

              <h2 className="mb-4 text-2xl">API Documentation</h2>
              <h3 className="mb-4 text-xl">Endpoint</h3>
              <p className="text-lg mb-4">
                The app accepts POST requests at the following endpoint:
              </p>

              <CopyBlock
                text={`
POST https://pdf-generator-two-iota.vercel.app/generate-pdf
                `}
                language={"jsx"}
                showLineNumbers={true}
                theme={atomOneDark}
              />
                <h2 className="mb-4 text-2xl mt-12">Note</h2>
                <div className="bg-red-400 p-2 px-3 rounded-lg">
                <p className="text-lg text-white italic">
                The app is currently hosted on Vercel in a serverless environment for experimental purposes only. As a result, the HTTP response is limited to a base64 encoded PDF file since Vercel does not support file writing and only permits read-only operations.
                </p>
                </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
