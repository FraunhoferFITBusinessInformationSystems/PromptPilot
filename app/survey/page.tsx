"use server";

import { redirect } from "next/navigation";
import {
	setDemographic,
	setPoststudy,
	setPrestudy,
	setProlificId,
	setTask1,
	setTask2,
	setTask3,
	setTask4,
	setTask5,
	setTask6,
} from "./action";
import App from "./survey";
import type {
	DemographicSchema,
	PoststudySchema,
	PrestudySchema,
	TaskSchema1,
	TaskSchema2,
	TaskSchema3,
	TaskSchema4,
	TaskSchema5,
	TaskSchema6,
} from "./survey";
//https://nextjs.org/blog/security-nextjs-server-components-actions
import "server-only";

export default async function Page(props: {
	params: Promise<{ id: string }>;
	searchParams?: Promise<{
		PROLIFIC_PID?: string;
		TASK?: string;
		SESSION?: string;
	}>;
}) {
	const url = process.env.NEXT_PUBLIC_SITE_URL;
	const searchParams = await props.searchParams;
	let prolific_pid = "";
	if (searchParams?.PROLIFIC_PID) {
		prolific_pid = searchParams.PROLIFIC_PID;
	} else {
		prolific_pid = "noID";
	}

	// Check if SESSION_NUMBER exists
	if (!searchParams?.TASK || !searchParams?.SESSION) {
		// Generate a random session number between 1 and 12
		const sessionNumber = Math.floor(Math.random() * 12) + 1;
		const sessionID = await setProlificId(prolific_pid, sessionNumber);

		// Update the URL with SESSION_NUMBER
		redirect(
			`${url}/survey?PROLIFIC_PID=${prolific_pid}&TASK=${sessionNumber}&SESSION=${sessionID}`,
		);
	}

	// SESSION_NUMBER exists, proceed with rendering
	const sessionNumber = Number.parseInt(searchParams.TASK, 10);
	const sessionID = searchParams.SESSION;

	// console.log(sessionNumber);
	// console.log(sessionID);

	async function onSavePrestudy(values: PrestudySchema): Promise<void> {
		"use server";
		await setPrestudy(values, sessionID);
	}
	async function onSavePoststudy(values: PoststudySchema): Promise<void> {
		"use server";
		await setPoststudy(values, sessionID);
	}
	async function onSaveTask1(values: TaskSchema1): Promise<void> {
		"use server";
		await setTask1(values, sessionID);
	}
	async function onSaveTask2(values: TaskSchema2): Promise<void> {
		"use server";
		await setTask2(values, sessionID);
	}
	async function onSaveTask3(values: TaskSchema3): Promise<void> {
		"use server";
		await setTask3(values, sessionID);
	}
	async function onSaveTask4(values: TaskSchema4): Promise<void> {
		"use server";
		await setTask4(values, sessionID);
	}
	async function onSaveTask5(values: TaskSchema5): Promise<void> {
		"use server";
		await setTask5(values, sessionID);
	}
	async function onSaveTask6(values: TaskSchema6): Promise<void> {
		"use server";
		await setTask6(values, sessionID);
	}
	async function onSaveDemographic(values: DemographicSchema): Promise<void> {
		"use server";
		await setDemographic(values, sessionID);
	}

	return (
		<>
			<App
				onSavePoststudy={onSavePoststudy}
				onSavePrestudy={onSavePrestudy}
				onSaveTask1={onSaveTask1}
				onSaveTask2={onSaveTask2}
				onSaveTask3={onSaveTask3}
				onSaveTask4={onSaveTask4}
				onSaveTask5={onSaveTask5}
				onSaveTask6={onSaveTask6}
				onSaveDemographic={onSaveDemographic}
				sessionNumber={sessionNumber}
			/>
		</>
	);
}
