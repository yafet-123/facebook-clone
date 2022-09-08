import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import { useSession } from "next-auth/client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function InPutBox(){
	const { session } = useSession()

	return(
		<div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      		<div className="flex space-x-4 p-4 items-center">
		        <Image className="rounded-full" src={session.user.image} width={40} height={40} layout="fixed"/>
		        <form className="flex flex-1">
		          	<input
		            	className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
		            	type="text"
		            	placeholder={`What's on your mind, ${session.user.name}?`}
		            	ref={inputRef}
		          	/>
			        <button hidden onClick={sendPost}>
			        	Submit
			        </button>
		        </form>

        		{imageToPost && (
		        	<div
		            	onClick={removeImage}
		            	className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
		          	>
            			<img className="h-10 object-contain " src={imageToPost} alt="" />
            			<p className="text-xs text-red-500 text-center">Remove</p>
          			</div>
        		)}
      		</div>

      		<div className="flex justify-evenly p-3 border-t">
		        <div className="inputIcon">
		          	<VideoCameraIcon className="h-7 text-red-500" />
		          	<p className="text-xs sm:text-sm xl:text-base">Live Video</p>
		        </div>

        		<div onClick={() => filepickerRef.current.click()} className="inputIcon">
          			<CameraIcon className="h-7 text-green-400" />
          			<p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          			<input onChange={addImageToPost} ref={filepickerRef} type="file" hidden />
        		</div>

        		<div className="inputIcon">
          			<FaceSmileIcon className="h-7 text-yellow-300" />
          			<p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
       			</div>
      		</div>
    	</div>
	)
}