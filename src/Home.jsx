import './App.css';
import './Sam.css';
import Sidebar from "./Components/Sidebar";

function Home() {
    return (
        <div className="Home">
            <Sidebar />
            <div className='app home'>
                <h1 className="heading-home">CoGro - Collaboration, Connect, and Grow.</h1>
                <span className='home-banner'></span>
                <span className='text-home'>
                The ascent of social media is directly linked to the exponential surge in content creation. What was once merely a pastime or hobby has now evolved into a full-fledged profession for many. 

                The social ecosystem, whether in the digital realm or real life, thrives on the power of collaborations and meaningful connections or very rarely, luck.
                When you're driven by the urgency to connect for mutual growth, the latter option often falls short.

                CoGro, the platform that bridges the gap for creators of all levels, enabling them to discover like-minded individuals eagerly awaiting an account like theirs to make contact. 
                This is not a market where you need to stumble upon your product or spend hours looking around for that one thing you had in mind; it's a vast and meticulously navigabl
                </span>
            </div>
        </div>
    );
}

export default Home;