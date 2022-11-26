
import TweetBox from "./home/TweetBox"
import Post from "../components/Post"
import { useContext } from "react"
import { TwitterContext } from "../context/TwitterContext"

const style = {
    wrapper: `flex-1 relative h-screen overflow-hidden `,
    header: `sticky top-7 h-[70px] fixed  z-1  flex justify-between items-center bg-[#121212]`,
    headerTitle: `text-xl font-medium ml-4 flex-1`,
    feed: `w-full h-full mt-7 flex-1 overflow-y-scroll scrollbar-hide `,
    heading: ` text-base font-medium my-5 mx-7`,
}



function Feed() {
    const {tweets} = useContext(TwitterContext)
    
    return (

        <div className={`${style.wrapper}`}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>

            </div>
            
                 <div className={style.feed}>
                     <TweetBox/>
                      <div className={style.heading}>Recent Tweets</div>
                        {tweets.map((tweet, index) => (
                         <Post
                                key={index}
                                displayName={
                                    tweet.author.name === 'Unnamed'
                                        ? `${tweet.author.walletAddress.slice(
                                            0,
                                            4,
                                        )}...${tweet.author.walletAddress.slice(41)}`
                                        : tweet.author.name
                                }
                                userName={`${tweet.author.walletAddress.slice(
                                    0,
                                    4,
                                )}...${tweet.author.walletAddress.slice(41)}`}
                                text={tweet.tweet}
                                tweetImage={tweet.tweetImage}
                                avatar={tweet.author.profileImage}
                                isProfileImageNft={tweet.author.isProfileImageNft}
                                timestamp={tweet.timestamp}
                            />
                         
                        ))}
                 </div>
            
        </div>
    )
}

export default Feed