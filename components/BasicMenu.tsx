import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="md:hidden">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        Browse
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className={`${router.pathname === '/'&&"!cursor-default"}`}>
          <Link href={"/"} className={`${router.pathname === '/'&&"!cursor-default !font-normal !text-white"}`}>Home</Link>
        </MenuItem>
        <MenuItem className={`${router.pathname === '/tv_shows'&&"!cursor-default"}`}>
          <Link href={"/tv_shows"} className={`${router.pathname === '/tv_shows'&&"!cursor-default !font-normal !text-white"}`}>TV Shows</Link>
        </MenuItem>
        <MenuItem className={`${router.pathname === '/movies'&&"!cursor-default"}`}>
          <Link href={"/movies"} className={`${router.pathname === '/movies'&&"!cursor-default !font-normal !text-white"}`}>Movies</Link>
        </MenuItem>
        <MenuItem className={`${router.pathname === '/new_and_popular'&&"!cursor-default"}`}>
          <Link href={"/new_and_popular"} className={`${router.pathname === '/new_and_popular'&&"!cursor-default !font-normal !text-white"}`}>New & Popular</Link>
        </MenuItem>
        <MenuItem className={`${router.pathname === '/my_list'&&"!cursor-default"}`}>
          <Link href={"/my_list"} className={`${router.pathname === '/my_list'&&"!cursor-default !font-normal !text-white"}`}>My List</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default BasicMenu;
