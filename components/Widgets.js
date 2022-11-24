import {BiSearch} from 'react-icons/bi'
import { news, whoToFollow } from '../lib/static'

const style ={
  wrapper: `mx-10 flex-[1] p-4 `,

  searchBar: `flex items-center justify-between h-[80px] px-7 mb-4 bg-[#191d20] p-2 rounded-2xl`,
  search:`bg-[#1da1f2] rounded-xl`,
  searchIcon: `m-3`,
  inputBox: `bg-transparent text-sm outline-none`,
  section: `mt-8 overflow-hidden `,
  title: `p-2 flex justify-between mb-6 font-medium `,
  see: `font-regular text-xs text-[#1da1f2]`,
  showMore: `p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#262d37]`,
  item: `flex items-center p-3 my-3 bg-[#191d20] rounded-2xl cursor-pointer`,
  newsItemsLeft: `flex-1 ml-3`,
  newsItemCategory: `text-[#8899a6] text-xs mb-1 font-regular`,
  newsItemTitle: `text-sm font-medium`,
  newsItemRight: `w-1/5 `,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px] object-cover`,
  profileDetails: `flex-1`,
  name: `font-medium text-base`,
  handle: `text-[#8899a6] text-sm`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-medium`,

}

const Widgets = () => {
  return (
    <div classname={style.wrapper}>
      <div className={style.searchBar}>
        <input type="text" placeholder="Search on Twitter" className={style.inputBox}/>
        <div className={style.search}>
           <BiSearch className={style.searchIcon}/>
        </div>
      </div>
      <div className={style.scroll}>
         <div className={style.section}>
            <div className={style.title}>What's trending
            <span className={style.see}>See all</span>
            </div>
            {news.map((item, index) => (
             <div key={index} className={style.item}>
                <div className={style.newsItemRight}>
                  <img
                    src={item.image}
                    alt={item.category}
                    className={style.newsItemImage}
                  />
                </div>
               <div className={style.newsItemsLeft}>
                 <div className={style.newsItemCategory}>{item.category}</div>
                 <div className={style.newsItemTitle}>{item.title}</div>
               </div>
             </div>
            ))}
         </div>
         <div className={style.section}>
           <div className={style.title}>Who to follow
             <span className={style.see}>See all</span>
           </div>
           {whoToFollow.map((item, index) => (
             <div key={index} className={style.item}>
               <div className={style.followAvatarContainer}>
                 <img
                   src={item.avatar}
                   alt={item.handle}
                   className={style.followAvatar}
                 />
               </div>
               <div className={style.profileDetails}>
                 <div className={style.name}>{item.name}</div>
                 <div className={style.handle}>{item.handle}</div>
               </div>
               <div className={style.followButton}>Follow</div>
             </div>
           ))}
         </div>
      </div>
    </div>
  )
}

export default Widgets