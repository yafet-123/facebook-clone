import Image from "next/image";
import React from "react";
import Stories from './Stories'

export default function Feed() {
	return(
		<div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
			<div className="mx-auto max-w-md md:max-w-lg md:max-w-2xl">
				<Stories />
				
			</div>
		</div>
	)
}
