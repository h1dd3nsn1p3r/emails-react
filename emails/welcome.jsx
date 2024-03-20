import * as React from "react";
import { Html, Text, Hr, Button } from "@react-email/components";

const WelcomeEmail = () => {
	return (
		<Html>
			<Text>Welcome to our platform!</Text>
			<Hr />
			<Button href="https://example.com">
				Click here to get started
			</Button>
		</Html>
	);
};

export default WelcomeEmail;
