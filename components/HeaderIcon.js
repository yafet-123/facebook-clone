function HeaderIcon({ active, Icon }) {
  // it take the active is it active or not and icon 
  // active:border-b-2 active:border-blue-500 make when u click it or when it is active it mke border bottom and 
  //  active ? "text-blue-500" : "text-gray-500" if it is active change the color to blue-500 if not change the 
  // color into text-gray-500
  return (
    <div className="flex items-center md:px-10 sm:h-14 cursor-pointer md:hover:bg-gray-100 rounded-xl group active:border-b-2 active:border-blue-500">
      <Icon
        className={`${
          active ? "text-blue-500" : "text-gray-500"
        }  text-center h-5 sm:h-7 mx-auto my-auto group-hover:text-blue-500`}
      />
    </div>
  );
}

export default HeaderIcon;