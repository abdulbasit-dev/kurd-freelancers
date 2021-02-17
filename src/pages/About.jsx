import React from "react";

function About() {
	return (
		<div className="">
			<div className=""></div>
			<h2 className="text-5xl text-center border-b border-gray-400 font-bold p-3 w-2/4 mx-auto">
				Our Goals
			</h2>

			<div className="flex space-x-6 mx-auto lg:w-3/4 mt-5 justify-center">
				<div className="border border-gray-500 p-2 w-1/4 rounded-md ">
					<h3 className=" ">Text</h3>
					<p className="text-lg">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nam
						tempore possimus recusandae odit ratione aut? Incidunt accusantium
						possimus explicabo.
					</p>
				</div>
				<div className="border border-gray-500 p-2 w-1/4 rounded-md ">
					<h3>Text</h3>
					<p className="text-lg">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nam
						tempore possimus recusandae odit ratione aut? Incidunt accusantium
						possimus explicabo.
					</p>
				</div>
				<div className="border border-gray-500 p-2 w-1/4 rounded-md ">
					<h3>Text</h3>
					<p className="text-lg">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo nam
						tempore possimus recusandae odit ratione aut? Incidunt accusantium
						possimus explicabo.
					</p>
				</div>
			</div>
			<div className="bg-gray-200 mt-5 py-5">
				<div className="flex mx-auto lg:w-3/4 mt-3 space-x-8">
					<div className="my-3 lg:w-2/4 space-y-10">
						<h1 className="text-xl">Leave us a message</h1>
						<p className="text-sm my-3">
							Torquatos nostros? quos tu tam crudelis fuisse, nihil oportere
							nimium nos causae confidere, sed animo etiam erga nos causae
							confidere, sed uti oratione perpetua malo quam ostendis sed quia
							dolor repellendus temporibus autem.
						</p>
						<div className="flex ">
							<div className="lg:w-1/3">
								<svg
									width="55"
									height="57"
									viewBox="0 0 55 57"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13.749 23.32C13.749 15.3444 19.9613 8.90625 27.6571 8.90625C35.3529 8.90625 41.5651 15.3444 41.5651 23.32C41.5651 32.9292 27.6571 47.343 27.6571 47.343C27.6571 47.343 13.749 32.9292 13.749 23.32ZM36.9301 23.3199C36.9301 18.0349 32.804 13.7107 27.6581 13.7107C22.5584 13.7107 18.386 18.0349 18.386 23.3199C18.386 28.653 22.5584 32.9291 27.6581 32.9291C32.804 32.9291 36.9301 28.653 36.9301 23.3199Z"
										fill="#212B36"
									/>
									<mask
										id="mask0"
										mask-type="alpha"
										maskUnits="userSpaceOnUse"
										x="13"
										y="8"
										width="29"
										height="40"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13.749 23.32C13.749 15.3444 19.9613 8.90625 27.6571 8.90625C35.3529 8.90625 41.5651 15.3444 41.5651 23.32C41.5651 32.9292 27.6571 47.343 27.6571 47.343C27.6571 47.343 13.749 32.9292 13.749 23.32ZM36.9301 23.3199C36.9301 18.0349 32.804 13.7107 27.6581 13.7107C22.5584 13.7107 18.386 18.0349 18.386 23.3199C18.386 28.653 22.5584 32.9291 27.6581 32.9291C32.804 32.9291 36.9301 28.653 36.9301 23.3199Z"
											fill="white"
										/>
									</mask>
									<g mask="url(#mask0)"></g>
								</svg>
								<p className="text-sm">
									9094 Bay Meadows Street Conyers, GA 30012
								</p>
							</div>
							<div className="lg:w-1/3">
								<svg
									width="55"
									height="57"
									viewBox="0 0 55 57"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M37.8124 48.0938C40.4392 48.0938 42.7401 47.1441 44.593 45.0339C45.6722 43.7888 46.3442 42.3327 46.3442 40.8978C46.3442 39.8426 45.9573 38.8297 45.0003 38.1122L38.7491 33.5119C37.7921 32.8366 36.998 32.4989 36.2649 32.4989C35.3486 32.4989 34.5138 33.0476 33.5771 33.9972L32.1314 35.4744C31.9074 35.7065 31.6224 35.812 31.3576 35.812C31.0522 35.812 30.7468 35.6854 30.5432 35.5799C29.2807 34.8835 27.1223 32.9632 25.1065 30.8951C23.111 28.8271 21.258 26.5902 20.6064 25.2819C20.5046 25.0497 20.3825 24.7543 20.3825 24.4378C20.3825 24.1634 20.4639 23.8891 20.6879 23.657L22.1336 22.1165C23.0295 21.1457 23.5793 20.3016 23.5793 19.3309C23.5793 18.5712 23.2332 17.7482 22.5612 16.7564L18.1833 10.3623C17.4707 9.3494 16.4729 8.90625 15.3734 8.90625C14.0295 8.90625 12.6448 9.53933 11.4435 10.7422C9.46835 12.7047 8.59277 15.1315 8.59277 17.8115C8.59277 23.868 13.0521 31.2117 18.9367 37.2892C24.8214 43.3879 31.9685 48.0938 37.8124 48.0938Z"
										fill="#212B36"
									/>
								</svg>
								<ul className="text-sm">
									<li>+229-955-5388-336</li>
									<li>+229-955-5373-360</li>
								</ul>
							</div>
							<div className="lg:w-1/3">
								<svg
									width="54"
									height="58"
									viewBox="0 0 54 58"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M27.0361 30.0653C27.7254 30.0653 28.3643 29.7281 29.1042 28.9472L43.7322 13.6662C43.1101 13.0273 41.9499 12.7256 40.2854 12.7256H13.2151C11.8027 12.7256 10.8107 13.0096 10.2558 13.5952L24.9679 28.9472C25.6909 29.7104 26.3299 30.0653 27.0361 30.0653ZM8.8598 40.4479L20.7472 28.0421L8.82617 15.6363C8.57396 16.1332 8.43945 16.9851 8.43945 18.2097V37.8035C8.43945 39.0636 8.57396 39.951 8.8598 40.4479ZM45.1599 40.4303C45.4289 39.9156 45.5634 39.046 45.5634 37.8036V18.2099C45.5634 17.0208 45.4289 16.1688 45.1935 15.6897L33.3061 28.0422L45.1599 40.4303ZM40.7894 43.3055C42.2017 43.3055 43.1769 43.0216 43.7318 42.4536L31.609 29.7816L30.4993 30.9707C29.3391 32.1421 28.2462 32.6745 27.0356 32.6745C25.8082 32.6745 24.7153 32.1421 23.572 30.9707L22.4454 29.7816L10.3563 42.4359C10.9952 43.0216 12.1049 43.3055 13.7191 43.3055H40.7894Z"
										fill="#212B36"
									/>
								</svg>
								<ul className="text-sm">
									<li>office@mail.com</li>
									<li>support@mail.com</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="lg:w-2/4">
						<div className="flex flex-col w-full lg:w-4/5 mb-5">
							<label className="text-lg">Full Name</label>
							<input
								type="text"
								className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
								placeholder="Full Name"
							/>
						</div>
						<div className="flex flex-col w-full lg:w-4/5 mb-5">
							<label className="text-lg">Email Adress</label>
							<input
								type="mail"
								className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
								placeholder="Full Name"
							/>
						</div>
						<div className="flex flex-col w-full lg:w-4/5 mb-5">
							<label className="text-lg">Message</label>
							<textarea
								className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
								placeholder="Full Name"
								name=""
								id=""
								cols="30"
								rows="10"
							></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
