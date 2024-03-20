import * as React from "react";
import {
	Body,
	Tailwind,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import Header from "../components/header";
import Footer from "../components/footer";

const TicketStatusChangedEmail = () => {
  return (
		<Tailwind
		config={{
        theme: {
         fontFamily: {
					sans: ["-apple-system", "BlinkMacSystemFont", "Inter", '"Arial"', "Helvetica", '"Helvetica Neue"', "Helvetica", "sans-serif"],
				 }
        },
      }}
		>
			<Html className={htmlClass}>
			<Head>
				<title>Ticket Created</title>
			</Head>
			<Preview>
				Welcome to Cream Code Help Desk.
			</Preview>
			<Body className={bodyClass}>
				<Container className={containerClass}>
					<Section className={sectionClass}>
						<Header />
						<Text className={pClass}>
							Dear Customer,
						</Text>
						<Text className={pClass}>
							This is an automated email to confirm that the status of your ticket has been updated to <strong>Public</strong>.
						</Text>
            <Text className={pClass}>
							Public tickets are visible to everyone and can be found in the help desk tickets section. It also helps other users to find the solution to their problems.
						</Text>
						<Button className={buttonClass} href="https://help.creamcode.org/ticket/slug">
							Visit Ticket
						</Button>
						<Text className={pClass}>
							If you wish to change the status of your ticket then please visit our help desk and update the status from the ticket dashboard.
						</Text>
            <Text className={pClass}>
							You are receiving this email because you have created a ticket in our support help desk. If you wish not to receive any ticket email updates then please update your communication preference from help desk dashboard {" > "} 
							<Link href="https://help.creamcode.org/dashboard/tickets/create/" className={linkClass}>
								 profile settings.
							</Link>
						</Text>
						<Text className={pClass}>
							Best regards,<br />
							— Cream Code Team
						</Text>
						<Footer />
					</Section>
				</Container>
			</Body>
			</Html>
		</Tailwind>
  );
};

export default TicketStatusChangedEmail;

const htmlClass = "relative m-0 p-0 font-sans font-normal text-base w-full overflow-hidden bg-gray-100 mx-auto box-border";

const bodyClass = "relative font-sans font-normal text-base w-full mx-auto p-0 ps-4 pe-4 box-border"

const containerClass = "relative bg-white border-solid border border-gray-200 rounded-lg p-6 mt-8 m-8 w-full max-w-3xl mx-auto shadow-sm box-border";

const sectionClass = "relative w-full";

const pClass = "relative text-gray-600 font-sans font-normal text-base mt-6 mb-6 w-full box-border";

const buttonClass = "relative block w-full text-center text-white bg-blue-600 font-sans font-medium text-sm py-4 px-4 rounded-lg shadow-sm box-border";

const linkClass = "relative text-blue-500 font-sans font-normal text-base underline box-border";

//const hrClass = "relative w-full border-t border-gray-200 mt-8 mb-8 box-border";

//const colophonClass = "relative text-gray-300 font-sans font-xs font-normal  mt-4 mb-4 w-full box-border";
