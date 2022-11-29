import { useState } from "react";
import Link from "next/link";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import style from "./drawer.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import { useStateValue } from "../../context/stateProvider";
import { actionType } from "../../context/reducer";
import { useAuth } from "../../context/authUserContext";
function MuiDrawer({ drawerOpen, setDrawerOpen, onHover }) {
  const { authUser, loading, signOutAndClear } = useAuth();
  const [{ existedUser }, dispatch] = useStateValue();
  const signooout = () => {
    signOutAndClear();
    window.localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    onHover();
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ style: { marginTop: "5rem" } }}
      >
        <Box
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
          sx={{ p: 2, margin: "1rem auto", padding: "2rem" }}
        >
          <Typography variant="h6" component="div">
            <button
              className={style.closeBtn}
              onClick={() => setDrawerOpen(false)}
            >
              <MdClose />
            </button>
            {existedUser && (
              <>
                <span>Signed in as {existedUser.name}</span>
                <div style={{ marginTop: "4rem" }}>
                  <ul>
                    <Link href={`users/${existedUser.id}`}>
                      <li className={style.linkWrapper} onClick={onHover}>
                        <a onClick={() => setDrawerOpen(false)}>Your profile</a>
                      </li>
                    </Link>
                    <Link href={`/${existedUser.id}`}>
                      <li className={style.linkWrapper} onClick={onHover}>
                        <a onClick={() => setDrawerOpen(false)}> Upgrade</a>
                      </li>
                    </Link>
                    <Link href={`/${existedUser.id}`}>
                      <li className={style.linkWrapper} onClick={onHover}>
                        <a onClick={() => setDrawerOpen(false)}> Help</a>
                      </li>
                    </Link>
                    <li
                      className={style.linkWrapper}
                      onClick={() => signooout()}
                    >
                      <a> Sign out</a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrawer;
