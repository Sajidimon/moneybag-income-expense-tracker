import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/7QyBkss/expense-tracker.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
                        <p className="mb-5 text-white">Want to Take Control of Your Money, Anytime, Anywhere? <span className="font-bold text-yellow-500">Moneybag</span> can be Your Ultimate Expense Manager.</p>
                        <Link to='/register'><button className="btn btn-primary">Registration Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;