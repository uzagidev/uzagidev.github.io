import { FormEvent, useState } from "react";
import { SendIcon } from "../Icons/SendIcon";
import { SuccessIcon } from "../Icons/SuccessIcon";

type Web3FormResponse = {
	success?: boolean;
	data?: {
		name: string;
		email: string;
		message: string;
	};
	message?: string;
};
const Contact = () => {
	const [formState, setFormState] = useState({
		submitting: false,
		succeeded: false,
	});
	const [response, setResponse] = useState<Web3FormResponse>({});

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormState({ submitting: true, succeeded: false });
		const formData = new FormData(event.currentTarget);

		formData.append("access_key", "31239ddc-3933-498b-a8be-d42cc8c55299");
		formData.append(
			"subject",
			"New contact from uzagi portfolio (via web3forms)"
		);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data: Web3FormResponse = await response.json();
		setResponse(data);

		if (data.success) {
			setFormState({ submitting: false, succeeded: true });
		} else {
			setFormState({ submitting: false, succeeded: false });
			console.log("Error", data);
		}
	};

	return (
		<div id="contact" className="h-screen">
			<div className="container relative h-full py-6 mx-auto">
				<div className="text-center">
					<h1 className="text-2xl md:text-5xl font-bold text-white">
						Contact Me
					</h1>
					<p className="text-gray-200 mt-4 mb-2 px-6">
						{formState.succeeded ? (
							<span>
								<SuccessIcon className="inline mr-1 mb-1 text-lime-500" />
								Your message was sent successfully, thanks for contacting me!
							</span>
						) : (
							"For more information, please submit this form:"
						)}
					</p>
				</div>

				<div className="mt-8 px-6">
					{!formState.succeeded && (
						<form
							onSubmit={onSubmit}
							className="w-full md:w-1/3 mx-auto flex flex-col gap-4"
						>
							<input
								type="checkbox"
								name="botcheck"
								className="hidden"
								style={{ display: "none" }}
							/>
							<input
								type="hidden"
								name="from_name"
								value="uzagi-portfolio"
							></input>
							<input
								id="name"
								type="text"
								name="name"
								placeholder="Name"
								className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-lime-600 caret-lime-600 bg-transparent"
								required
							/>
							<input
								id="email"
								type="email"
								name="email"
								placeholder="Email"
								className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-lime-600 caret-lime-600 bg-transparent"
								required
							/>
							<textarea
								id="message"
								name="message"
								placeholder="Message"
								className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-lime-600 caret-lime-600 bg-transparent"
								required
							/>
							{!response.success && response.message && (
								<p className="text-red-500">{response.message}</p>
							)}
							<button
								type="submit"
								disabled={formState.submitting}
								className="w-full px-4 py-2 bg-white text-black"
							>
								{formState.submitting ? "Sending..." : "Send"}
								<SendIcon className="inline ml-1 mb-1" />
							</button>
						</form>
					)}
				</div>

				<div className="absolute w-full bottom-1 text-center">
					<p className="text-gray-400 text-sm">
						Copyright © {new Date().getFullYear()}. uzagi
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
