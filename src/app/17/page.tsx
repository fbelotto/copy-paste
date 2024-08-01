"use client";
import React from "react";

import { CopyBlock, dracula } from "react-code-blocks";

const block0 = `docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5433:5432 -d --rm postgres:latest`;

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-white rounded-lg border shadow-lg p-10 space-y-5 w-1/2 min-w-[320px] mt-5">
        <h1 className="text-2xl font-semibold">Postgres + Docker + Dbeaver</h1>
        <div>
          <p>Rodando o postgres com docker</p>
          <CopyBlock
            language={"bash"}
            text={block0}
            theme={dracula}
            codeBlock
            showLineNumbers={false}
          />
        </div>
      </div>
    </div>
  );
}
