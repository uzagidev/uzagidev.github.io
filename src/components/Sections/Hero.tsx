const Hero = () => {
	return (
		<div
			id="hero"
			className="container-md h-screen relative -translate-y-16 pt-16 -z-10 flex flex-col md:flex-row justify-center items-center md:justify-around md:items-center gap-16"
		>
			<div className="px-6 md:mt-0">
				<h1 className="text-5xl font-bold text-white">Hi, I'm uzagi</h1>
				<p className="mt-6 text-xl bg-lime-600 p-1 -rotate-3">
					- a full-stack developer.
				</p>
			</div>
			<div className="h-96 w-96 bg-green-100"></div>
		</div>
	);
};

export default Hero;
