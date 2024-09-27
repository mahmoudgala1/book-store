import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useAuthStore } from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";

export default function UserMenu() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img alt="" src="../avatar.png" className="h-10 w-10 rounded-full" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 w-full"
          >
            Your Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <button
            onClick={handleLogOut}
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 w-full text-left"
          >
            Sign out
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
