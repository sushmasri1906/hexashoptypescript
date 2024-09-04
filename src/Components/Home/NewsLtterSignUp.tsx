const NewsletterSignup = () => {
	return (
		<div className="container bg-orange-400 backdrop-blur-sm py-10 px-4 sm:px-8">
			<div className="space-y-6 max-w-xl mx-auto">
				<h1 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
					Get Notified About New Products
				</h1>
				<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
					<input
						data-aos="fade-up"
						type="text"
						placeholder="Enter your email"
						className="w-full p-3 rounded-lg text-black"
					/>
					<button className="bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewsletterSignup;
