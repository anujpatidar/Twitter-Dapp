import { Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'
import { useRouter } from 'next/router'


const style = {
    wrapper: `w-min flex items-center rounded-[100px] pl-5  py-2.5 cursor-pointer hover:text-[#1da1f2] transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-xl mr-4`,
    textGeneral: `flex items-center font-regular`,
    textActive: `flex items-center text-[#1da1f2] font-regular`,
}


function SidebarOption({
    text,
    Icon,
    isActive,
    setSelected,
    redirect,
}) {
    const router = useRouter()
    return(
        <div className={style.wrapper}
        onClick={() => {
            setSelected(text)
            router.push(redirect)
        }}
        >
          <div className={`${isActive ? style.textActive : style.textGeneral}`}>
          <div className={style.iconContainer}>
           <Icon />
          </div>
           {text}
          </div>
        </div >
    )
}

export default SidebarOption