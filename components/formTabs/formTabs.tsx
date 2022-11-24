import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Login from "../auth/signIn/loginIn";
import { motion } from "framer-motion";
import style from "./formTabs.module.scss";
import SignUp from "../auth/signUp/signUp";

function FormTabs() {
  return (
    <div className={style.container}>
      <Tab.Group>
        <Tab.List className={style.tabList}>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <motion.button
                className={
                  selected ? style.categorySelected : style.categoryNotSelected
                }
              >
                Sign In
              </motion.button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <motion.button
                className={
                  selected ? style.categorySelected : style.categoryNotSelected
                }
              >
                Sign Up
              </motion.button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={style.tabContainer}>
          <Tab.Panel>
            <Login />
          </Tab.Panel>
          <Tab.Panel>
            <SignUp />
          </Tab.Panel>
          {/* ... */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default FormTabs;
