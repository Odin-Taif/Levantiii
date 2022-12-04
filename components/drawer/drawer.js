import Link from "next/link";
import { Drawer, Box, Typography } from "@mui/material";
import style from "./drawer.module.scss";
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
    // dispatch({
    //   type: actionType.SET_USER,
    //   user: null,
    // });
    onHover();
  };

  const handelLink = () => {
    onHover();
    setDrawerOpen(false);
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
            {authUser && (
              <>
                <span>Signed in as {existedUser.name}</span>
                <div style={{ marginTop: "4rem" }}>
                  <ul>
                    <Link href={`/users/${existedUser.id}`}>
                      <li className={style.linkWrapper} onClick={handelLink}>
                        Your profile
                      </li>
                    </Link>
                    <Link href={`/${existedUser.id}`}>
                      <li className={style.linkWrapper} onClick={handelLink}>
                        Upgrade
                      </li>
                    </Link>
                    <Link href={`/${existedUser.id}`}>
                      <li className={style.linkWrapper} onClick={handelLink}>
                        Help
                      </li>
                    </Link>
                    <li
                      className={style.linkWrapper}
                      onClick={() => signooout()}
                    >
                      Sign out
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
