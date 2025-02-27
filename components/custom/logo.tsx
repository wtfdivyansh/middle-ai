import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo({size}: {size?: "sm" | "md" | "lg"}) {
  let logoSize = 35;
  let textSize = 'font-medium';

  if (size === 'md') {
    logoSize = 45;
    textSize = 'text-lg font-semibold';
  } else if (size === 'lg') {
    logoSize = 55;
    textSize = 'text-2xl font-bold';
  }

  return (
    <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={logoSize}
          height={logoSize}
          className="rounded-xl"
          draggable={false}
        />
        <span className={textSize}>middle-ai</span>
      </Link>
  )
}
