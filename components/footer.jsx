import * as React from "react";
import { Tailwind, Hr, Link, Text } from "@react-email/components";

export default function Footer() {
	return (
		<>
			<Tailwind
				config={{
					theme: {
						fontFamily: {
							sans: [
								"-apple-system",
								"BlinkMacSystemFont",
								"Inter",
								'"Arial"',
								"Helvetica",
								'"Helvetica Neue"',
								"Helvetica",
								"sans-serif",
							],
						},
					},
				}}
			>
				<Hr className="block relative w-full border-t border-gray-100 mt-12 mb-6" />
				<Text className="block w-full relative text-base text-gray-500 font-sans font-normal text-base m-0 p-0">
					© Cream Code — 44600 Kathmandu, Nepal.
				</Text>
			</Tailwind>
		</>
	);
}
