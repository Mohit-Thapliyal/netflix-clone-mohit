import Head from "next/head";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Header from "./Header";
import Modal from "./Modal";

interface Props {
  children: React.ReactNode;
  title: string
}
const Layout = ({ children, title }: Props) => {
  const showModal = useRecoilValue(modalState)
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${showModal && 'overflow-hidden'}`}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {children}
      
      {showModal && <Modal/>}
    </div>
  );
};

export default Layout;
