import * as React from "react";
import { Tailwind, Hr, Link, Text } from "@react-email/components";
import Logo from "./logo";

export default function Header() {
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
				<Text className="block w-full relative text-gray-600 font-sans font-normal text-base m-0 p-0">
					<Link
						href="https://help.creamcode.org"
						className="inline-flex items-center"
					>
						<Logo />
					</Link>
				</Text>
				<Hr className="block relative w-full border-t border-gray-100 mt-4 mb-6" />
			</Tailwind>
		</>
	);
}
