import Image from 'next/image'
import logo from '@/images/logo.svg'

export function Logomark(props) {
  return <Image src={logo} alt="logo" height={50} />
}

export function Logo(props) {
  return (
    <div className="">
      <Image src={logo} alt="logo" height={100} />
    </div>
  )
}
