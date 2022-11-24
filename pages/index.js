import { useContext } from 'react'
import {TwitterContext} from '../context/TwitterContext'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import Image from 'next/image'
import metamaskLogo from '../assets/metamask.png'
import errorImg from '../assets/error.png'



const style = {
  wrapper: `flex h-screen w-screen overflow-hidden select-none bg-[#121212] text-[#f2f2f2] font-light`,
  content: ` w-full flex justify-between`,
  option: `justify-between w-1/6 mx-10 my-7 `,
  feed:`w-1/2 mr-10 `,
  widgets: 'w-1/4 mr-10 my-7 h-screen w-screen overflow-y-scroll scrollbar-hide',
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,

}
export default function Home() {
  const {appStatus, connectWallet} = useContext(TwitterContext)
  const app = (status = appStatus) => {
    switch (status) {
      case 'connected':
        return userLoggedIn

      case 'notConnected':
        return noUserFound

      case 'noMetaMask':
        return noMetaMaskFound

      case 'error':
        return error

      default:
        return loading
    }
  }

  const userLoggedIn = (
    <div className={style.content}>
      <div className={style.option}>
        <Sidebar/>
      </div>
      <div className={style.feed}>
        <Feed/>
      </div>
      <div className={style.widgets}>
        <Widgets />
      </div>
    </div>
     
  )
  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div
        className={style.walletConnectButton}
        onClick={() => connectWallet()}
      >
        Connect Wallet
      </div>
      <div className={style.loginContent}>Connect to Metamask.</div>
    </div>
  )

  const noMetaMaskFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div className={style.loginContent}>
        <a
          target='_blank'
          rel='noreferrer'
          href={`https://metamask.io/download.html`}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  )
  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImg} width={250} height={200} />
      <div className={style.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  )

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading...</div>
    </div>
  )

  return (
    <div className={style.wrapper}>{app(appStatus)}</div>
  )
}