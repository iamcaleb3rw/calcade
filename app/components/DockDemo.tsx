import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";
import reactImage from '@/public/react.png'
import jsImage from '@/public/js.png'
import nextJSImage from '@/public/nextjs.svg'
import tailwindImage from '@/public/tailwindcss.svg'
export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="relative z-20">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
            <Image alt="react" src={reactImage} />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
            <Image alt="react" src={jsImage} />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
            <Image alt="nextjs" src={nextJSImage} />
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <Image alt="tailwind" src={tailwindImage} />
        </DockIcon>
      </Dock>
    </div>
  );
}


