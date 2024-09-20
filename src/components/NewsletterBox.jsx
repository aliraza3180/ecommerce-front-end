import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now and Get 20% Off
      </p>
      <p className="text-gray-400 mt-3">
        Join our community today and enjoy 20% off your first subscription!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2  flex items-center border gap-3 mx-auto my-6 pl-3 "
      >
        <input
          type="email"
          className="w-full outline-none sm:flex-1"
          placeholder="Enter your Email"
          required
        />
        <button
          type="submit"
          className="text-white text-xs bg-black px-10 py-4 hover:bg-red-900 transition-all duration-500"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
