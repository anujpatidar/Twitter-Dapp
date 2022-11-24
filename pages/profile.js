import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import ProfileHeader from '../components/profile/profileHeader'
import ProfileTweets from '../components/profile/profileTweets'

const style = {
    wrapper: `flex h-screen w-screen overflow-hidden select-none bg-[#121212] text-[#f2f2f2] font-light`,
    content: ` w-full flex justify-between`,
    option: `justify-between w-1/6 mx-10 my-7 `,
    feed: `w-1/2 mr-10 mt-7`,
    widgets: 'w-1/4 mr-10 my-7 h-screen w-screen overflow-y-scroll scrollbar-hide',

}

const profile = () => {
  return (
      <div className={style.wrapper}>
          <div className={style.content}>
              <div className={style.option}>
                  <Sidebar initialSelectedIcon={'Profile'} />
              </div>
              <div className={style.feed}>
                  <ProfileHeader/>
                  <ProfileTweets/>
              </div>
              <div className={style.widgets}>
                  <Widgets />
              </div>
          </div>
      </div>
  )
}

export default profile