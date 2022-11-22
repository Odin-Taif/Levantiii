import style from "./button.module.scss";
function LevantiButton({ title, action }) {
  return (
    <button onClick={() => action()} className={style.btn}>
      {title}
    </button>
  );
}

export default LevantiButton;
