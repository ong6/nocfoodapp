import Image from 'next/image'
import logo from '@/images/logo.png'

export function Logomark(props) {
  return <Image src={logo} alt="logo" height={50} />
}

export function Logo(props) {
  return (
    <div className="">
      <Image
        src={logo}
        alt="logo"
        height={100}
        className="hover:rotate-45 hover:transition-all"
      />
    </div>
  )
}
