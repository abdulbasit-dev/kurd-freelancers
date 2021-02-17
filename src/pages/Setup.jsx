import React from "react";
import Multiselect from "./../components/Multiselect";
function Setup() {
	return (
		<div className=" lg:flex lg:flex-row-reverse shadow-md md:w-2/3 mx-auto my-3 rounded-md border none">
			<div className="lg:w-2/5 bg-cover text-lg text-white py-4 px-6 md:px-12">
				<h1 className="text-3xl my-5">Complete Your Profile</h1>
				<p className="mb-3">
					Fill in your profile for employers to better understand your services
					when they visit your profile page.
				</p>
				<p>
					It is important to leave accurate information here to maximize your
					chances of getting jobs.
				</p>
				<p className="mb-3 mt-24 text-center">
					You can aslo press skip & complete your profile info later.
				</p>
				<div className="justify-center flex space-x-4 m-5">
					<button className="flex justify-center items-center w-24 text-white border border-white rounded-md focus:outline-none">
						Skip
					</button>
					<button className="bg-white flex justify-center items-center w-24 text-cover p-1 rounded-md focus:outline-none">
						Next
					</button>
				</div>
			</div>
			<div className="lg:w-3/5 m-5">
				<div className="flex flex-col w-full lg:w-4/5 mb-5">
					<label className="text-lg">Full Name</label>
					<input
						type="text"
						className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
						placeholder="Full Name"
					/>
				</div>

				<div className="flex flex-row  mb-5">
					<div className="w-2/5 mr-10">
						<label className="text-lg">City</label>
						<input
							type="text"
							className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
							placeholder="City"
						/>
					</div>
					<div className="w-3/5">
						<label className="text-lg">Phone Number</label>
						<input
							type="tel"
							className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
							placeholder="+964XXX XXX XXXX"
						/>
					</div>
				</div>
				<div className="flex items-center space-x-4 mb-5">
					<div className="flex flex-col">
						<label className="text-lg">Gender</label>
						<select
							className="cursor-pointer px-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
							name="gender"
						>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Others">Others</option>
						</select>
					</div>
					<div className="flex flex-col">
						<label className="text-lg">Age</label>
						<input
							type="number"
							className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
							placeholder="Number"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full lg:w-full mb-5">
					<label className="text-lg">Skills</label>
					<Multiselect />
				</div>
				<div className="flex items-center  space-x-4 mb-5">
					<div className="flex flex-col">
						<label className="text-lg">Language</label>
						<select
							className="cursor-pointer px-3 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
							name="language"
						>
							<option value="Kurdish">Kurdish</option>
							<option value="Arabic">Arabic</option>
							<option value="English">English</option>
						</select>
					</div>
				</div>
				<div className="flex items-center space-x-4 mb-5">
					<div className="flex flex-col mr-5">
						<label className="text-lg">Upload resume or CV</label>
						<label className="cursor-pointer px-2 py-2 flex border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
							<svg className="svg-icon w-5 mr-2" viewBox="0 0 20 20">
								<path d="M17.927,5.828h-4.41l-1.929-1.961c-0.078-0.079-0.186-0.125-0.297-0.125H4.159c-0.229,0-0.417,0.188-0.417,0.417v1.669H2.073c-0.229,0-0.417,0.188-0.417,0.417v9.596c0,0.229,0.188,0.417,0.417,0.417h15.854c0.229,0,0.417-0.188,0.417-0.417V6.245C18.344,6.016,18.156,5.828,17.927,5.828 M4.577,4.577h6.539l1.231,1.251h-7.77V4.577z M17.51,15.424H2.491V6.663H17.51V15.424z"></path>
							</svg>
							<input type="file" className="hidden" />
							Upload
						</label>
					</div>
					<div class="flex flex-col">
						<label className="text-lg">Certificate</label>
						<label className="cursor-pointer px-2 py-2 flex border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
							<svg className="svg-icon w-5 mr-2" viewBox="0 0 20 20">
								<path d="M17.927,5.828h-4.41l-1.929-1.961c-0.078-0.079-0.186-0.125-0.297-0.125H4.159c-0.229,0-0.417,0.188-0.417,0.417v1.669H2.073c-0.229,0-0.417,0.188-0.417,0.417v9.596c0,0.229,0.188,0.417,0.417,0.417h15.854c0.229,0,0.417-0.188,0.417-0.417V6.245C18.344,6.016,18.156,5.828,17.927,5.828 M4.577,4.577h6.539l1.231,1.251h-7.77V4.577z M17.51,15.424H2.491V6.663H17.51V15.424z"></path>
							</svg>
							<input type="file" className="hidden" />
							Upload
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Setup;
