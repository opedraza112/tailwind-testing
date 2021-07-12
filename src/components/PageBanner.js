import React from 'react'

function PageBanner() {
  return (
    <div className="mt-8 lg:px-8 px-4 py-8 bg-gray-50">
      <div className="container mx-auto overflow-hidden lg:grid md:grid-cols-5 md:gap-4">
        <div className="col-span-3 pt-8 w-9/12">
          <div className='text-left text-section'>
            <h2 className="text-5xl font-extrabold text-white sm:text-4xl heading-title">
              <span className="block text-gray-700">Your Mission 👋</span>
            </h2>
            <p className="mt-4 text-lg text-black">
              Join us for 10 days to create the kind of online course that your students will get kind of addicted to -- 
              but in a good way -- that makes it up to 16 times more profitable than the norm!
            </p>
          </div>
        </div>
        <div className="col-span-2 mt-4 lg:mt-0">
          <img
            className="object-cover"
            src="https://xpc-api-prod.s3-us-west-1.amazonaws.com/users/20/courses/95705/1621624009981.mg1"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  );
}

export default PageBanner;