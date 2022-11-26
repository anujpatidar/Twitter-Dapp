import Post from "../Post"
import { useContext} from 'react'
import { TwitterContext } from '../../context/TwitterContext'

const style = {
    wrapper: `flex-1 h-full  overflow-hidden `,
    feed: `w-full h-[15.8rem] rounded-3xl flex-1 overflow-y-scroll scrollbar-hide `,
}



const ProfileTweets = () => {
    const { currentAccount, currentUser } = useContext(TwitterContext)
    const { tweets } = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
      <div className={style.feed}>
          {currentUser.tweets?.map((tweet, index) => (
              <Post
                  key={index}
                  displayName={currentUser.name === 'Unnamed'
                      ? `${currentUser.walletAddress.slice(
                          0,
                          4,
                      )}...${currentUser.walletAddress.slice(41)}`
                      : currentUser.name}
                  userName={`${currentAccount.slice(0, 4)}...${currentAccount.slice(-4)}`}
                  avatar={currentUser.profileImage}
                  text={tweet.tweet}
                  tweetImage={tweet.tweetImage}
                  isProfileImageNft={currentUser.isProfileImageNft}
                  timestamp={tweet.timestamp}
              />
          ))}
      </div>
    </div>
  )
}

export default ProfileTweets