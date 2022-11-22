import Head from "next/head";
import Link from "next/link";
import style from "../styles/pageNotfound.module.scss";
const NotFound = () => {
  return (
    <div>
      <Head>
        <title> |= 404 </title>
        <meta name="keywords" content="page is not found" />
      </Head>
      <div className={style.container}>
        <Link href="/"> Take me home </Link>
      </div>
    </div>
  );
};

export default NotFound;
