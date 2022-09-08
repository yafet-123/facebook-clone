import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
    BellIcon,
    ChatBubbleBottomCenterIcon,
    ChevronDoubleDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewColumnsIcon
} from '@heroicons/react/24/solid'

import {
    FlagIcon,
    PlayIcon,
    DocumentMagnifyingGlassIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Header(){
    // sticky make the navbar stick on the top and shadow-md is for box-shadow 
    // box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) 
    // hidden md:inline-flex hidden md:inline-flex small screen hidden in large screen it is 
    // inline-flex outline-none make border none and
    // flex-grow means specifies how much of the remaining space in the flex container 
    // should be assigned to the item Whitespace refers to characters which are used to provide 
    // horizontal or vertical space between other characters
    // icon means to have the all tailwind class write here we can write on global css and write the class here
    return(
        <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="flex items-center">
                <Image 
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <div className="hidden md:inline-flex ml-5 items-center rounded-full bg-gray-100 p-2">
                    <DocumentMagnifyingGlassIcon className="h-5 text-gray-600" />
                    <input 
                        className="hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 shrink"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>

            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            <div className="flex items-center sm:space-x-2 justify-end">
                <Image 
                    src="https://links.papareact.com/5me"
                    className="rounded-full cursor-pointer"
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">
                    Yafet
                </p>
                <ViewColumnsIcon className="icon" />
                <ChatBubbleBottomCenterIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDoubleDownIcon className="icon" />
            </div>
        </header>
    )
}
