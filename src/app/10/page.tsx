"use client";
import React from "react";

import { CopyBlock, dracula } from "react-code-blocks";

const block0 = `yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/react jsdom vitest `;

const block1 = `import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest-setup.js",
  },
});`;

const block2 = `import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
    cleanup();
})`;

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-white rounded-lg border shadow-lg p-10 space-y-5 w-1/2 min-w-[320px] mt-5">
        <h1 className="text-2xl font-semibold">
          Vitest + React Testing Library
        </h1>
        <div>
          <p>Additional dependencies</p>
          <CopyBlock
            language={"bash"}
            text={block0}
            theme={dracula}
            codeBlock
            showLineNumbers={false}
          />
        </div>
        <div>
          <p>vitest.config.js</p>
          <CopyBlock
            language={"js"}
            text={block1}
            theme={dracula}
            codeBlock
            showLineNumbers={false}
          />
        </div>
        <div>
          <p>vitest-setup.js</p>
          <CopyBlock
            codeTagProps={"asdf"}
            language={"js"}
            text={block2}
            showLineNumbers={false}
            theme={dracula}
            codeBlock
          />
        </div>
      </div>
    </div>
  );
}
