import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={35}
          height={35}
          className="rounded-xl"
          draggable={false}
        />
        <span className='font-medium'>middle-ai</span>
      </Link>
  )
}
