import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import BasicMenu from "./BasicMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      {/* Left */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <BasicMenu/>

        <ul className="hidden space-x-4 md:flex">
          <li className={`headerLink ${router.pathname === '/' ? 'font-semibold': ""}`} >
            <Link href={'/'}>Home</Link>
          </li>
          <li className={`headerLink ${router.pathname === '/tv_shows' ? 'font-semibold': ""}`} >
            <Link href={'/tv_shows'}>TV Shows</Link>
          </li>
          <li className={`headerLink ${router.pathname === '/movies' ? 'font-semibold': ""}`} >
            <Link href={'/movies'}>Movies</Link>
          </li>
          <li className={`headerLink ${router.pathname === '/new_and_popular' ? 'font-semibold': ""}`} >
            <Link href={'/new_and_popular'}>New & Popular</Link>
          </li>
          <li className={`headerLink ${router.pathname === '/my_list' ? 'font-semibold': ""}`} >
            <Link href={'/my_list'}>My List</Link>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 text-sm font-light">
        {/* <SearchIcon/> */}
        <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <img
          onClick={() => {
            confirm("Do you really wanna sign out?")===true ? logout() : null;
          }}
          src="https://rb.gy/g1pwyx"
          alt="user"
          className="cursor-pointer rounded"
        />
      </div>
    </header>
  );
};

export default Header;
