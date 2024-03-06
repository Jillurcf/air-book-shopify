const Featured = () => {
  return (
  <div className="max-w-screen-xl mx-auto lg:mt-24 md:mt-44 mt-[500px]">
    <h1 className="lg:text-4xl lg:text-start text-center md:text-4xl text-2xl font-bold p-4 lg:mt-0">Featured Destinations</h1>
      <div className=" grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/1nQTcBF/Rectangle-181.png"
            alt="image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
         
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magni!</p>
          <div className="card-actions">
            <button className="btn btn-warning">View More</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/WfLnrBN/Rectangle-18-11.png"
            alt="image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
         
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quis.</p>
          <div className="card-actions">
            <button className="btn btn-warning">View More</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/GkjFgbq/Rectangle-18-22.png"
            alt="image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
    
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, nihil!</p>
          <div className="card-actions">
            <button className="btn btn-warning">View More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Featured;
