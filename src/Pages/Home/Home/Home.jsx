import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1 className="text-3xl text-center font-bold text-green-600">বিসমিল্লাহির রাহমানির রাহীম</h1>
            <h3 className="text-xl text-center font-bold text-green-400">জিকিরের দুনিয়াতে আপনাকে স্বাগতম
            </h3>
            <h3 className="text-xl text-center font-bold text-green-400">সকাল ও সন্ধ্যায় দোয়া ও জিকিরের লিস্ট সমূহ
            </h3>
            <Link to='/subhanAllah'><li>প্রতি ফরজ নামাযের পর ঃ </li></Link>
            <Link to='/kul'><li>৩ কূল (সকাল - সন্ধ্যায় ৩ বার) ঃ </li></Link>

            
        </div>
    );
};

export default Home;