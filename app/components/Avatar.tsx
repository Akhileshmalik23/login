import Image from 'next/image'
import React from 'react'

interface AvatarProps{
  src: string | null | undefined
}
const Avatar :React.FC<AvatarProps> =({src})=> {
  return (
    <Image
    src={src || "/images/placeholder.jpg"}
    alt="avatar"
    width={30}
    height={30}
    className="rounded-full"
 />
  )
}
export default Avatar