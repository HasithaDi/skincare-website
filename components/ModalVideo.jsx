import React from 'react'

import ReactPlayer from 'react-player'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <button className="relative w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-accent">
          <Image src="/assets/home/play.svg" width={36} height={36} alt="play"/>
          </button>
          <span className=" text-lg font-primary">Watch Video</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer 
        width={"100%"} 
        height={"100%"} 
        url="https://youtu.be/Bsa9EVEZax0?si=8ZuuKSun5JDS4Se2"
        muted
        />
      </DialogContent>
    </Dialog>
  )
}

export default ModalVideo
