import { useEffect, useState } from "react";
import style from "./profileModal.module.scss";
import { MdAdd } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SignOut, AddItemModal } from "../../auth/signOut/signOut";

function ProfileModal({ user, onClose, show, logout }) {
  const [showAddItem, setShowAddItem] = useState(false);
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanUp() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });
  if (!show) {
    return null;
  }
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  return (
    <>
      <div className={style.modal} onClick={onClose}>
        <div
          className={style.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={style.modalBtn} onClick={onClose}>
            <AiOutlineArrowLeft />
          </button>
          <div className={style.modalBody}>
            <div className={style.menuContainer}>
              {user && user.email === "mjd.reklam@gmail.com" ? (
                <div
                  className={style.item}
                  onClick={() => setShowAddItem(true)}
                >
                  Add New Item
                  <MdAdd />
                </div>
              ) : (
                <></>
              )}
              <SignOut logout={logout} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileModal;
