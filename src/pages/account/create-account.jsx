import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/forms/input";
import BackBtn from "@/components/back-btn";
import Button from "@/components/button/index";
import GoogleIcon from "@/assets/icons/google-icon";
export default function Account() {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev);
	};

	const [isFocused, setIsFocused] = useState(false); // Track focus state
	const [password, setPassword] = useState(""); // Track password value

	const passwordRequirements = [
		"At least 8 characters",
		"Contains uppercase and lowercase letters",
	];
	return (
		<div className="min-h-screen text-left">
			<div className="container mx-auto max-w-sm  py-8 rounded-lg shadow-md">
				{/* Logo Section */}
				<div className=" mb-6 flex items-center gap-1">
					<BackBtn />
					<img
						src="/images/logo.png"
						alt="Believer's Bridge Logo"
						className="h-16"
					/>
				</div>

				{/* Title */}
				<h2 className=" text-lg font-semibold text-gray-300 mb-4">
					Create your Believer&apos;s Bridge account.
				</h2>
				<Link to="/sign-in" className=" text-sm text-secondary  cursor-pointer">
					Already have an account
				</Link>

				{/* create account form */}
				<form className="mt-11">
					<div className="mb-4">
						<Input
							id="username"
							placeholder="Email address"
							className="text-[13px]"
						/>
					</div>

					<div className="mb-4">
						<div className="relative">
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Create password"
								value={password}
								onChange={e => setPassword(e.target.value)}
								onFocus={() => setIsFocused(true)} // Show requirements on focus
								onBlur={() => setIsFocused(false)}
								className="text-[13px]"
							/>
							<button
								type="button"
								onClick={togglePasswordVisibility}
								className="absolute inset-y-0 right-2 text-[10px] text-gray-300"
							>
								SHOW
							</button>
						</div>
						{isFocused && (
							<ul className="mt-2 text-sm text-secondary">
								{passwordRequirements.map((requirement, index) => (
									<li key={index} className="flex items-center gap-2">
										<span>•</span>
										{requirement}
									</li>
								))}
							</ul>
						)}
					</div>

					<Link to="/personal-information">
						<Button type="submit" className="w-full mt-10">
							Create my account
						</Button>
					</Link>
				</form>

				{/* Or Divider */}
				<div className="flex items-center my-4">
					<div className="flex-grow h-px bg-gray-300"></div>
					<span className="px-2 text-sm text-gray-600">or</span>
					<div className="flex-grow h-px bg-gray-300"></div>
				</div>

				{/* Google Login */}
				<Button color="white" variant="contained" className="w-full ">
					<GoogleIcon />
					Continue with Google
				</Button>
			</div>
		</div>
	);
}
