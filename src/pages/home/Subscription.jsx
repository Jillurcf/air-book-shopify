

const Subscription = () => {
    return (
        <div className="md:flex max-w-screen-xl mx-auto mt-24 justify-around px-8 lg:px-0   ">
            <div>
                <img className="md:w-3/4 lg:w-full" src="/src/assets/Image/News letter/Isolation_Mode.png" alt="" />
            </div>
            <div>
                <h1 className="text-4xl font-bold py-4">Subscribe To Our <br />
                Newsletter!
                </h1>
                <p className="text-blue-400 py-4">Subscribe To Our Newsletter And Stay <br /> Updated</p>
                <input className="w-full rounded-xl border py-4 px-4" placeholder="Your Email" type="text" name="" id="" />
                <button className="btn btn-warning w-full py-4 mt-4">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscription;