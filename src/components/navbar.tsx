import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import logo from "@/public/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavigationMenu className="container py-6 justify-between items-center">
      <NavigationMenuList>
        <NavigationMenuItem className="flex items-center gap-2">
          <Image priority src={logo} className="w-32" alt="Logo" />
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavbarList />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const NavbarList = () => {
  return (
    <NavigationMenuList>
      <NavigationMenuItem className="p-2 py-4 font-light md:text-lg">
        <Link href="/features" legacyBehavior passHref>
          <NavigationMenuLink>
            Features
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="p-2 py-4 font-light md:text-lg">
        <Link href="/team" legacyBehavior passHref>
          <NavigationMenuLink>Team</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="p-2 py-4 font-light md:text-lg">
        <Link href="/signin" legacyBehavior passHref>
          <NavigationMenuLink>
            Sign In
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

export default Navbar;
