import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline'

import {
    CalendarIcon,
    ClockIcon,
    ComputerDesktopIcon,
    UsersIcon,
} from "@heroicons/react/24/solid";
import SidebarRow from "./SidebarRow";
function Sidebar() {
    // it take the active is it active or not and icon max-w-[600px] max width 600px and [600px] means
    // custom class that are not found in tailwindcss
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />      
        </div>
    );
}

export default Sidebar;