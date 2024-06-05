import Image from "next/image"

export default function AuthLayout({ 
  children,
 }: Readonly<{
  children: React.ReactNode
}>){  
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex justify-center items-center">{children}</div>
      <div className="w-1/2">
        <Image
          src={'/img/bg-image.jpg'}
          width={3571}
          height={5356}
          alt="bg-auth"
          className="h-screen w-full"
        />
      </div>
    </div>
  )
}