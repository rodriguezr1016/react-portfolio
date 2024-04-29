import FlipCard from "../component/FlipCard";
function About () {
    const photos = [
        '/gym.JPG'
    ]
    return (
        <div className="about">
            {/* <div className="space">
            </div> */}
            <div className="aboutSummary">
                <h1>
                    About Me
                </h1>
                <h2>
                 I am a fullstack developer based out of central California. What I lack in experience I make up for in my work ethic and my ability to learn and adapt to new technologies rather quickly. Although I am new to web development, I am more than ready to put my skills to the test.
                </h2>
                {/* <FlipCard photos={photos}></FlipCard> */}
                <h2>
                Aside from web development I enjoy being outside, taking trips to the beach, going to the gym, and spending time with my wife. I am also very passionate about music with some of my favorites being Tyler the Creator and Kendrick Lamar
                </h2>
            </div>
            <div className="skills">
                <h1>
                    Skills
                </h1>
                <div className="icons">
                    <img src="/react.png" alt="" />
                    <img src="/aws.png" alt="" />
                    <img src="/javascript.png" alt="" />
                    <img src="/mongodb.png" alt="" />
                    <img src="/mysql.png" alt="" />
                    <img src="/vite.png" alt="" />
                    <img src="/nodejs.png" alt="" />
                </div>
            </div>

        </div>
    )
};

export default About;