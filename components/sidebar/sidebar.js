import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import style from "./sidebar.module.scss";

const SideBar = ({ setDrawerOpen, drawerOpen }) => {
  return (
    <div>
      <ul className={style.sideBarMenu}>
        <li className={style.sideBarItem}>
          <Link href="/">
            <a onClick={() => setDrawerOpen(false)}> Home</a>
          </Link>
        </li>
        <li className={style.sideBarItem}>
          <Link href="/">
            <a onClick={() => setDrawerOpen(false)}> Services</a>
          </Link>
        </li>
        <li className={style.sideBarItem}>
          <Link href="/about">
            <a onClick={() => setDrawerOpen(false)}> $tore</a>
          </Link>
        </li>
        <li className={style.sideBarItem}>
          <Link href="/about">
            <a onClick={() => setDrawerOpen(false)}> About</a>
          </Link>
        </li>
        <li className={style.sideBarItem}>
          <Link href="/about">
            <a onClick={() => setDrawerOpen(false)}> Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
