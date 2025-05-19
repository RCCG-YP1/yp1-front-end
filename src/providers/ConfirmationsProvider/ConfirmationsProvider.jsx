"use client";

import { useState } from "react";
import context from "./context";
import Button from "@/components/button";
import Modal from "@/components/modal";

const generateId = (() => {
	let id = 0;
	return () => ++id;
})();

const ConfirmationsProvider = props => {
	const [confirmations, setConfirmations] = useState([]);

	const confirm = (message, options) =>
		new Promise(resolve => {
			setConfirmations(confirmations => [
				...confirmations,
				{
					id: generateId(),
					message,
					open: true,
					respond: resolve,
					theme: options?.theme || "dark",
					title: options?.title || "Confirm",
					confirmText: options?.confirmText || "Ok",
					cancelText: options?.cancelText || "Cancel",
				},
			]);
		});

	const closeAndRespond = (confirmation, response) => {
		confirmation.respond(response);
		setConfirmations(confirmations =>
			confirmations.filter(c => c.id !== confirmation.id)
		);
	};

	return (
		<context.Provider value={confirm}>
			{props.children}

			{confirmations.map(confirmation => (
				<Modal
					theme={confirmation?.theme || "dark"}
					key={confirmation.id}
					title={confirmation?.title || "Confirm"}
					isOpen
					onClose={() => closeAndRespond(confirmation, false)}
				>
					<p className="text-center md:text-left">{confirmation.message}</p>
					<div className="flex justify-end gap-4 pt-8">
						<Button
							className="min-w-[100px]"
							variant="outline"
							onClick={() => closeAndRespond(confirmation, false)}
						>
							{confirmation?.cancelText || "Cancel"}
						</Button>
						<Button
							className="min-w-[100px]"
							onClick={() => closeAndRespond(confirmation, true)}
						>
							{confirmation?.confirmText || "Ok"}
						</Button>
					</div>
				</Modal>
			))}
		</context.Provider>
	);
};

export default ConfirmationsProvider;
