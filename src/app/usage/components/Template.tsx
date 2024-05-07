
'use client'

import React from 'react'
import { CopyBlock, atomOneDark } from 'react-code-blocks'
import { contractData, receipt, usage, usageReceipt } from './usage'

export default function Template() {
  return (
    <div>
        <p className="text-md lg:text-lg mb-8">
        Here`s how to generate a receipt PDF. You can use another promise-based
        HTTP client to send data to the server, and in this example, we`ll use
        the Axios library.
      </p>
      <p className="text-md lg:text-lg mb-4 font-bold">Example Code</p>
      <div>
        <CopyBlock
          text={usageReceipt}
          language={"jsx"}
          codeBlock
          showLineNumbers={true}
          theme={atomOneDark}
        />
      </div>

      <div className="mt-12">
        <p className="text-md lg:text-lg font-bold mb-4">Sample Data to generate Receipt PDF</p>
        <div className="h-[600px] text-sm">
          <CopyBlock
            text={receipt}
            language={"jsx"}
            showLineNumbers={true}
            
            theme={atomOneDark}
            wrapLongLines={true}
          />
        </div>
      </div>
    </div>
  )
}
