import React from 'react'
import Image from "next/image";

export default function Menu() {
  return (
    <div id="menu">
        <section className="p-16 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
          {/* IMAGE CONTAINER */}
        <div className="w-full flex-1 relative">
          <Image
            src="/slide1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
         {/* TEXT CONTAINER */}
         <div className="py-8 flex-1 flex items-end justify-center flex-col gap-8 text-orange-400">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold">
            La Poke
            </h1>
            <p className='md:pl-16 text-right'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae praesentium impedit dolor illum ex nisi corrupti architecto doloremque officiis, perferendis tenetur temporibus eligendi eius laudantium deleniti aperiam totam, quaerat asperiores?</p>
          <button className="bg-orange-400 text-white py-4 px-8">Ordina ora</button>
        </div>
        </section>
        <section className="p-16 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
        {/* TEXT CONTAINER */}
          <div className="py-8 flex-1 flex items-start justify-center flex-col gap-8 text-orange-400">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold">
            La Pizza
            </h1>
            <p className='md:pr-16 text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae praesentium impedit dolor illum ex nisi corrupti architecto doloremque officiis, perferendis tenetur temporibus eligendi eius laudantium deleniti aperiam totam, quaerat asperiores?</p>
          <button className="bg-orange-400 text-white py-4 px-8">Le pizze</button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="w-full flex-1 relative">
          <Image
            src="/slide1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        </section>
        <section className="p-16 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
          {/* IMAGE CONTAINER */}
        <div className="w-full flex-1 relative">
          <Image
            src="/slide1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
         {/* TEXT CONTAINER */}
         <div className="py-8 flex-1 flex items-end justify-center flex-col gap-8 text-orange-400">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold">
            La Poke
            </h1>
            <p className='md:pl-16 text-right'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae praesentium impedit dolor illum ex nisi corrupti architecto doloremque officiis, perferendis tenetur temporibus eligendi eius laudantium deleniti aperiam totam, quaerat asperiores?</p>
          <button className="bg-orange-400 text-white py-4 px-8">Ordina ora</button>
        </div>
        </section>
        <section className="p-16 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
        {/* TEXT CONTAINER */}
          <div className="py-8 flex-1 flex items-start justify-center flex-col gap-8 text-orange-400">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold">
            La Pizza
            </h1>
            <p className='md:pr-16 text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae praesentium impedit dolor illum ex nisi corrupti architecto doloremque officiis, perferendis tenetur temporibus eligendi eius laudantium deleniti aperiam totam, quaerat asperiores?</p>
          <button className="bg-orange-400 text-white py-4 px-8">Le pizze</button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="w-full flex-1 relative">
          <Image
            src="/slide1.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        </section>
  </div>
  )
}
