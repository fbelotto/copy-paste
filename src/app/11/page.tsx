"use client";
import React from "react";

import { CopyBlock, dracula } from "react-code-blocks";

const block0 = `npx create-next-app@latest`;

const block1 = `yarn add react-select`;

const block2 = `npx prisma init --datasource-provider sqlite`;

const block3 = `npx prisma migrate dev --name init`;

const block4 = `yarn add -D @faker-js/faker ts-node`;
const block5 = `import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 20; i++) {
    const name = faker.person.firstName();
    await prisma.user.create({
      data: {
        name: name,
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
`;

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-white rounded-lg border shadow-lg p-10 space-y-5 w-1/2 min-w-[320px] mt-5">
        <h1 className="text-2xl font-semibold">React Select + Next + Prisma</h1>
        <div>
          <p>Projeto do Next</p>
          <CopyBlock
            language={"bash"}
            text={block0}
            theme={dracula}
            codeBlock
            showLineNumbers={false}
          />
        </div>
        <div>
          <p>React Selec</p>
          <CopyBlock
            language={"bash"}
            text={block1}
            theme={dracula}
            codeBlock
            showLineNumbers={false}
          />
        </div>
        <div>
          <p>Prisma</p>
          <CopyBlock
            language={"bash"}
            text={block2}
            theme={dracula}
            codeBlock
            showLineNumbers={false}
          />
          <CopyBlock
            language={"bash"}
            text={block3}
            theme={dracula}
            codeBlock
            showLineNumbers={false}
          />
        </div>
        <div>
          <p>Faker-js e Ts-node</p>
          <CopyBlock
            language={"bash"}
            text={block4}
            theme={dracula}
            codeBlock
            showLineNumbers={false}
          />
          <p>Seed do prima</p>
          <CopyBlock
            language={"bash"}
            text={block5}
            theme={dracula}
            codeBlock
            showLineNumbers={false}
          />
        </div>
      </div>
    </div>
  );
}
