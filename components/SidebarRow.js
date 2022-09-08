import Image from "next/image";
import React from "react";

export default function SidebarRow({ src, Icon, title }) {
	// in this it takes the src for the image , the icon and title
	// if there is image it will print the Image tag so if there is no source it will no print
	// the same goes to Icon
	return(
		<div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
			{src && (
		        <Image
		          	className="rounded-full"
		          	src={src}
		          	width={30}
		          	height={30}
		          	layout="fixed"
		        />
		    )}
		    {Icon && <Icon className="h-8 w-8 text-blue-500" />}
		    <p className="hidden sm:inline-flex font-medium">{title}</p>
		</div>
	)
}

