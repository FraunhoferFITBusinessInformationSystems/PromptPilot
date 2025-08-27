"use client";

import LikertScale from "@/components/likertscale";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { FormCombobox } from "@/components/ui/form/form-combobox";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { defineStepper } from "@stepperize/react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { TaskComponent1 } from "./taskcomponent1";
import { TaskComponent2 } from "./taskcomponent2";
import { TaskComponent3 } from "./taskcomponent3";

//Doku: https://stepperize.vercel.app/docs/react/examples/react-hook-form

const genderEnum = z.enum(["male", "female", "diverse"]);

const ageEnum = z.enum([
	"under 15 years old",
	"15 to 19 years old",
	"20 to 24 years old",
	"25 to 29 years old",
	"30 to 34 years old",
	"35 to 39 years old",
	"40 to 44 years old",
	"45 to 49 years old",
	"50 to 54 years old",
	"55 to 59 years old",
	"60 years and older",
]);

const useEnum = z.enum([
	"Never, Rarely (a few times per year)",
	"Occasionally (a few times a month)",
	"Frequently (once a week)",
	"very often (a few times a week)",
	"Daily",
]);

const jobEnum = z.enum([
	"Student",
	"Academic / Research",
	"IT / Software Development",
	"Marketing / Sales",
	"Healthcare",
	"Creative Industry",
	"Engineering",
	"Consulting",
	"Management / Administration",
	"Other",
]);

const introductionSchema = z.object({
	dummy: z.string().optional(),
});

const guidanceSchema = z.object({
	dummy: z.string().optional(),
});

const prestudySchema = z.object({
	response1: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response2: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response3: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response4: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response5: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response6: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response7: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
});

const taskSchema1 = z.object({
	task1: z.string().min(1, "Answer is required"),
	task1_org_prompt: z.string().optional(),
	task1_user_prompt: z.string().optional(),
	task1_pa_prompt: z.string().optional(),
});
const taskSchema2 = z.object({
	task2: z.string().min(1, "Answer is required"),
	task2_org_prompt: z.string().optional(),
	task2_user_prompt: z.string().optional(),
	task2_pa_prompt: z.string().optional(),
});
const taskSchema3 = z.object({
	task3: z.string().min(1, "Answer is required"),
	task3_org_prompt: z.string().optional(),
	task3_user_prompt: z.string().optional(),
	task3_pa_prompt: z.string().optional(),
});
const taskSchema4 = z.object({
	task4: z.string().min(1, "Answer is required"),
	task4_user_prompt: z.string().optional(),
});
const taskSchema5 = z.object({
	task5: z.string().min(1, "Answer is required"),
	task5_user_prompt: z.string().optional(),
});
const taskSchema6 = z.object({
	task6: z.string().min(1, "Answer is required"),
	task6_user_prompt: z.string().optional(),
});

const poststudySchema = z.object({
	response10: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response11: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response12: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response13: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response14: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response15: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response16: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response17: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response18: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	response19: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
});

const demographicSchema = z.object({
	gender: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	age: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	use: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
	job: z
		.string({ invalid_type_error: "Answer is required" })
		.min(1, "Answer is required"),
});

const completeSchema = z.object({});

export type PrestudySchema = z.infer<typeof prestudySchema>;
export type PoststudySchema = z.infer<typeof poststudySchema>;
export type TaskSchema1 = z.infer<typeof taskSchema1>;
export type TaskSchema2 = z.infer<typeof taskSchema2>;
export type TaskSchema3 = z.infer<typeof taskSchema3>;
export type TaskSchema4 = z.infer<typeof taskSchema4>;
export type TaskSchema5 = z.infer<typeof taskSchema5>;
export type TaskSchema6 = z.infer<typeof taskSchema6>;
export type DemographicSchema = z.infer<typeof demographicSchema>;
type CompleteSchema = z.infer<typeof completeSchema>;

// Define my Steps in random order
const defineSteps1 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task1", label: "Task 1", schema: taskSchema1 },
	{ id: "task2", label: "Task 2", schema: taskSchema2 },
	{ id: "task3", label: "Task 3", schema: taskSchema3 },
	{ id: "poststudy", label: "Poststudy", schema: poststudySchema },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps2 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task3", label: "Task 1", schema: taskSchema3 },
	{ id: "task2", label: "Task 2", schema: taskSchema2 },
	{ id: "task1", label: "Task 3", schema: taskSchema1 },
	{ id: "poststudy", label: "Poststudy", schema: poststudySchema },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps3 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task2", label: "Task 1", schema: taskSchema2 },
	{ id: "task1", label: "Task 2", schema: taskSchema1 },
	{ id: "task3", label: "Task 3", schema: taskSchema3 },
	{ id: "poststudy", label: "Poststudy", schema: poststudySchema },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps4 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task2", label: "Task 1", schema: taskSchema2 },
	{ id: "task3", label: "Task 2", schema: taskSchema3 },
	{ id: "task1", label: "Task 3", schema: taskSchema1 },
	{ id: "poststudy", label: "Poststudy", schema: poststudySchema },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps5 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task1", label: "Task 1", schema: taskSchema1 },
	{ id: "task3", label: "Task 2", schema: taskSchema3 },
	{ id: "task2", label: "Task 3", schema: taskSchema2 },
	{ id: "poststudy", label: "Poststudy", schema: poststudySchema },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps6 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task3", label: "Task 1", schema: taskSchema3 },
	{ id: "task1", label: "Task 2", schema: taskSchema1 },
	{ id: "task2", label: "Task 3", schema: taskSchema2 },
	{ id: "poststudy", label: "Poststudy", schema: poststudySchema },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps7 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task4", label: "Task 1", schema: taskSchema4 },
	{ id: "task5", label: "Task 2", schema: taskSchema5 },
	{ id: "task6", label: "Task 3", schema: taskSchema6 },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps8 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task4", label: "Task 1", schema: taskSchema4 },
	{ id: "task6", label: "Task 2", schema: taskSchema6 },
	{ id: "task5", label: "Task 3", schema: taskSchema5 },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps9 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task5", label: "Task 1", schema: taskSchema5 },
	{ id: "task6", label: "Task 2", schema: taskSchema6 },
	{ id: "task4", label: "Task 3", schema: taskSchema4 },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps10 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task5", label: "Task 1", schema: taskSchema5 },
	{ id: "task4", label: "Task 2", schema: taskSchema4 },
	{ id: "task6", label: "Task 3", schema: taskSchema6 },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps11 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task6", label: "Task 1", schema: taskSchema6 },
	{ id: "task5", label: "Task 2", schema: taskSchema5 },
	{ id: "task4", label: "Task 3", schema: taskSchema4 },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];
const defineSteps12 = [
	{ id: "introduction", label: "Consent", schema: introductionSchema },
	{ id: "guidance", label: "Instructions", schema: guidanceSchema },
	{ id: "prestudy", label: "Prestudy", schema: prestudySchema },
	{ id: "task6", label: "Task 1", schema: taskSchema6 },
	{ id: "task4", label: "Task 2", schema: taskSchema4 },
	{ id: "task5", label: "Task 3", schema: taskSchema5 },
	{ id: "demographic", label: "Demographics", schema: demographicSchema },
	{ id: "complete", label: "Complete", schema: completeSchema },
];

function getOrderedSteps(sessionNumber: number) {
	switch (sessionNumber) {
		case 1:
			return defineSteps1;
		case 2:
			return defineSteps2;
		case 3:
			return defineSteps3;
		case 4:
			return defineSteps4;
		case 5:
			return defineSteps5;
		case 6:
			return defineSteps6;
		case 7:
			return defineSteps7;
		case 8:
			return defineSteps8;
		case 9:
			return defineSteps9;
		case 10:
			return defineSteps10;
		case 11:
			return defineSteps11;
		case 12:
			return defineSteps12;
	}
}

interface InputProps {
	//Funktionen
	onSavePoststudy: (values: PoststudySchema) => Promise<void>;
	onSavePrestudy: (values: PrestudySchema) => Promise<void>;
	onSaveTask1: (values: TaskSchema1) => Promise<void>;
	onSaveTask2: (values: TaskSchema2) => Promise<void>;
	onSaveTask3: (values: TaskSchema3) => Promise<void>;
	onSaveTask4: (values: TaskSchema4) => Promise<void>;
	onSaveTask5: (values: TaskSchema5) => Promise<void>;
	onSaveTask6: (values: TaskSchema6) => Promise<void>;
	onSaveDemographic: (values: DemographicSchema) => Promise<void>;

	//Session
	sessionNumber: number;
}

export function App({
	onSavePoststudy,
	onSavePrestudy,
	onSaveTask1,
	onSaveTask2,
	onSaveTask3,
	onSaveTask4,
	onSaveTask5,
	onSaveTask6,
	onSaveDemographic,
	sessionNumber,
}: InputProps) {
	const { useStepper, steps } = defineStepper(
		...(getOrderedSteps(sessionNumber) ?? []),
	);
	const stepper = useStepper();

	const form = useForm({
		mode: "onTouched",
		resolver: zodResolver(stepper.current.schema),
	});

	const onSubmit = (values: z.infer<typeof stepper.current.schema>) => {
		if (stepper.current.id === "introduction") {
			stepper.next();
		}
		if (stepper.current.id === "guidance") {
			stepper.next();
		}
		if (stepper.current.id === "prestudy") {
			onSavePrestudy(values as PrestudySchema);
			stepper.next();
		}
		if (stepper.current.id === "task1") {
			onSaveTask1(values as TaskSchema1);
			stepper.next();
		}
		if (stepper.current.id === "task2") {
			onSaveTask2(values as TaskSchema2);
			stepper.next();
		}
		if (stepper.current.id === "task3") {
			onSaveTask3(values as TaskSchema3);
			stepper.next();
		}
		if (stepper.current.id === "task4") {
			onSaveTask4(values as TaskSchema4);
			stepper.next();
		}
		if (stepper.current.id === "task5") {
			onSaveTask5(values as TaskSchema5);
			stepper.next();
		}
		if (stepper.current.id === "task6") {
			onSaveTask6(values as TaskSchema6);
			stepper.next();
		}
		if (stepper.current.id === "poststudy") {
			onSavePoststudy(values as PoststudySchema);
			stepper.next();
		}
		if (stepper.current.id === "demographic") {
			onSaveDemographic(values as DemographicSchema);
			stepper.next();
		}
	};

	return (
		<Form {...form}>
			<form
				// @ts-ignore
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div className="space-y-6 p-6 mt-8 border rounded-lg shadow-lg">
					<div className="flex justify-between">
						{/* <h2 className="text-lg font-medium">Survey</h2> */}
						<div className="flex items-center gap-2">
							<span className="text-sm text-muted-foreground">
								Step {stepper.current.index + 1} of {steps.length}
							</span>
							<div />
						</div>
					</div>
					<nav aria-label="Checkout Steps" className="group my-4">
						<ol
							className="flex items-center justify-between gap-2"
							aria-orientation="horizontal"
						>
							{stepper.all.map((step, index, array) => (
								<Fragment key={step.id}>
									<li className="flex items-center gap-4 flex-shrink-0">
										<Button
											type="button"
											role="tab"
											variant={
												index <= stepper.current.index ? "default" : "secondary"
											}
											aria-current={
												stepper.current.id === step.id ? "step" : undefined
											}
											aria-posinset={index + 1}
											aria-setsize={steps.length}
											aria-selected={stepper.current.id === step.id}
											className="flex size-10 items-center justify-center rounded-full"
											// onClick={() => stepper.goTo(step.id)}
										>
											{index + 1}
										</Button>
										<span className="text-sm font-medium">{step.label}</span>
									</li>
									{index < array.length - 1 && (
										<Separator
											className={`flex-1 ${
												index < stepper.current.index
													? "bg-primary"
													: "bg-muted"
											}`}
										/>
									)}
								</Fragment>
							))}
						</ol>
					</nav>
					<div className="space-y-4">
						{stepper.switch({
							introduction: () => <IntroductionComponent />,
							guidance: () => (
								<GuidanceComponent sessionNumber={sessionNumber} />
							),
							prestudy: () => <PreStudyComponent />,
							task1: () => (
								<TaskComponent1
									task={"task1"}
									register={form.register("task1")}
									help={true}
								/>
							),
							task2: () => (
								<TaskComponent2
									task={"task2"}
									register={form.register("task2")}
									help={true}
								/>
							),
							task3: () => (
								<TaskComponent3
									task={"task3"}
									register={form.register("task3")}
									help={true}
								/>
							),
							task4: () => (
								<TaskComponent1
									task={"task1"}
									register={form.register("task4")}
									help={false}
								/>
							),
							task5: () => (
								<TaskComponent2
									task={"task2"}
									register={form.register("task5")}
									help={false}
								/>
							),
							task6: () => (
								<TaskComponent3
									task={"task3"}
									register={form.register("task6")}
									help={false}
								/>
							),
							poststudy: () => <PostStudyComponent />,
							demographic: () => <DemographicComponent />,
							complete: () => <CompleteComponent />,
						})}
						<br />
						{!stepper.isLast ? (
							<div className="flex justify-end gap-4">
								{/* <Button
									type="button"
									variant="secondary"
									onClick={stepper.prev}
									disabled={stepper.isFirst}
								>
									Back
								</Button> */}
								<Button type="submit">Next</Button>
							</div>
						) : (
							<div className="flex justify-end gap-4">
								{/* <Button type="button" onClick={stepper.reset}>Reset</Button>
								<Button type="button" variant="secondary" onClick={stepper.prev}>
									Back
								</Button> 
								<Button type="submit">Complete</Button>*/}
							</div>
						)}
					</div>
				</div>
			</form>
		</Form>
	);
}

// Introduction
function IntroductionComponent() {
	return (
		<>
			<Card className="mt-4 p-4">
				<div className="mb-4">
					<h2 className="text-md font-bold">Welcome!</h2>
					<div className="text-sm text-muted-foreground">
						Thank you for taking part in this study. Please take a moment to
						read the instructions carefully before you begin.
					</div>
				</div>
				<h2 className="text-md font-bold">Payment Information:</h2>
				<div className="text-sm text-muted-foreground">
					If you decide to stop your voluntary participation by closing the
					browser window, we will have to exclude you from all payments. There
					are some attention checks throughout the study. Failure to pass the
					attention checks will lead to eliminating your questionnaire from the
					study, and, therefore, you will not receive any payment.
					<br />
					<b>
						We reserve the right to exclude questionnaires with random or
						otherwise non-serious responses.
					</b>
					<br />
					<b>
						ATTENTION: The top 10% of participants will receive a bonus payment!
					</b>
				</div>
				<br />
				<h2 className="text-md font-bold">
					Please also consider the following technical note:
				</h2>
				<div className="text-sm text-muted-foreground">
					To navigate between study pages, please only use the displayed buttons
					and <b>do not</b> click the back/forth function of the browser or refresh the page.
					Participation in this study is voluntary. There are no foreseeable
					risks associated with this study, and you can withdraw from the study
					at any time.
					<br />
					<b>
						You have to do the study on your own without any external help. Use a desktop or laptop computer.
					</b>
					<br />
					<b>Your data will be treated strictly confidential</b> and will only
					be analyzed in anonymized form. Your decisions and actions cannot be
					traced back to you personally. Your individual privacy will be
					maintained in all published and written data resulting from the study.
				</div>
				<br />
				<h2 className="text-md font-bold">Contact information:</h2>
				<div className="text-sm text-muted-foreground">
					Leopold Müller, leopold.johann.mueller@fit.fraunhofer.de,
					Wittelsbacherring 10, 95444 Bayreuth, Germany
				</div>
				<br />
				<div className="text-sm text-muted-foreground">
					<b>
						By clicking "Next" you confirm that you have read and understood the
						information above and that you voluntarily consent to participate in
						this study.
					</b>{" "}
					We appreciate your participation - let's get started!
				</div>
			</Card>
		</>
	);
}

// Guidance
function GuidanceComponent({ sessionNumber }: { sessionNumber: number }) {
	return (
		<>
			{sessionNumber >= 1 && sessionNumber <= 6 && (
				<Card className="mt-4 p-4">
					<div className="text-sm text-muted-foreground mb-4">
						<b>Important Terms:</b> A <b>Large Language Model (LLM)</b> is an AI system trained to generate text based on your <b>prompt</b>. A <b>prompt</b> is the instruction you give to the LLM to tell it what to do.
					</div>

					<h2 className="text-md font-bold">What will you do?</h2>
					<div className="text-sm text-muted-foreground mb-4">
						You'll complete a few short questions and work on{" "}
						<b>three separate tasks</b>.<br />
						For each task, your goal is to guide the LLM to solve the task correctly.
						However, you won't do this alone:
						<br />
						You'll receive support from a <b>PromptAssistant</b> that helps you
						formulate the prompt.
						<br />
						<br />
						Here's how it works: <br />
						<ul className={"list-disc list-inside"}>
							<li>You'll describe what you want the LLM to do.</li>
							<li>
								The PromptAssistant may ask follow-up questions to better
								understand your intent.
							</li>
							<li>
								The PromptAssistant will suggest a prompt that you can review
								before it is submitted to the LLM.
							</li>
						</ul>
						<br />
						<b>
							Only the LLM can solve the task—the PromptAssistant is there to
							help you give the best possible instructions.
						</b>
					</div>
					<h2 className="text-md font-bold">Important Notes</h2>
					<div className="text-sm text-muted-foreground">
						<ul className={"list-disc list-inside"}>
							<li>
								<span role="img" aria-label="brain">
									🧠
								</span>{" "}
								<b>No memory</b>: The LLM has no access to previous
								conversations or chat history.
							</li>
							<li>
								<span role="img" aria-label="writing hand">
									✍️
								</span>{" "}
								<b>One shot only</b>: You will <b>not</b> have a chance to
								chat further or refine the LLM's answer. Your single prompt
								must contain all the details the LLM needs. 
								<br />
								<b>Plan carefully</b>, as there are no second tries.
							</li>
							<li>
								<span role="img" aria-label="arrows">
									🔄
								</span>{" "}
								<b>Tasks are independent</b>: Each task is standalone. What you
								write or decide in one task will <b>not carry over</b> to the
								next.
							</li>
							<li>
								<span role="img" aria-label="no-entry">
									🚫
								</span>{" "}
								<b>No copy-pasting</b>: You are <b>not allowed</b> to copy the task descriptions. Always use <b>your own words</b> when formulating prompts.
							</li>
						</ul>
					</div>
				</Card>
			)}
			{sessionNumber >= 7 && sessionNumber <= 12 && (
				<Card className="mt-4 p-4">
					<div className="text-sm text-muted-foreground mb-4">
						<b>Important Terms:</b> A <b>Large Language Model (LLM)</b> is an AI system trained to generate text based on your <b>prompt</b>. A <b>prompt</b> is the instruction you give to the LLM to tell it what to do.
					</div>

					<h2 className="text-md font-bold">What will you do?</h2>
					<div className="text-sm text-muted-foreground mb-4">
						You'll complete a few short questions and work on{" "}
						<b>three separate tasks</b>.<br />
						For each task, your job is to <b>write a single prompt</b> that
						guides the LLM to solve the task correctly.
						<br />
						<br />
						<b>
							Only the LLM can solve the task—you're responsible for giving the
							right instructions.
						</b>
					</div>
					<h2 className="text-md font-bold">Important Notes</h2>
					<div className="text-sm text-muted-foreground">
						<ul className={"list-disc list-inside"}>
							<li>
								<span role="img" aria-label="brain">
									🧠
								</span>{" "}
								<b>No memory</b>: The LLM has no access to previous
								conversations or chat history.
							</li>
							<li>
								<span role="img" aria-label="writing hand">
									✍️
								</span>{" "}
								<b>One shot only</b>: You will <b>not</b> have a chance to
								chat further or refine the LLM's answer. Your single prompt
								must contain all the details the LLM needs. 
								<br />
								<b>Plan carefully</b>, as there are no second tries.
							</li>
							<li>
								<span role="img" aria-label="arrows">
									🔄
								</span>{" "}
								<b>Tasks are independent</b>: Each task is standalone. What you
								write or decide in one task will <b>not carry over</b> to the
								next.
							</li>
							<li>
								<span role="img" aria-label="no-entry">
									🚫
								</span>{" "}
								<b>No copy-pasting</b>: You are <b>not allowed</b> to copy the task descriptions. Always use <b>your own words</b> when formulating prompts.
							</li>
						</ul>
					</div>
				</Card>
			)}
		</>
	);
}

//Fragen 1
function PreStudyComponent() {
	const {
		register,
		formState: { errors },
	} = useFormContext<PrestudySchema>();

	return (
		<>
			<div className="text-sm text-muted-foreground">
				Please indicate how much you agree or disagree with the following
				statements.
			</div>
			<LikertScale
				label="More knowledge on how to formulate prompts will lead to better results when collaborating with LLMs."
				register={register("response1")}
				errors={errors.response1?.message}
			/>
			<LikertScale
				label="I would like to get supported in formulating my prompts."
				register={register("response2")}
				errors={errors.response2?.message}
			/>
			<LikertScale
				label="Advice on where my prompt can be improved (e.g. writing style) would help me improve my prompt."
				register={register("response3")}
				errors={errors.response3?.message}
			/>
			<LikertScale
				label="Concise and easy to understand instructions on how to improve my prompt would help me improve my prompt."
				register={register("response4")}
				errors={errors.response4?.message}
			/>
			<LikertScale
				label="Please answer with disagree."
				register={register("response5")}
				errors={errors.response5?.message}
			/>
			<LikertScale
				label="Information about modifications made would to verify whether modifications to the prompt have led to improvements."
				register={register("response6")}
				errors={errors.response6?.message}
			/>
			<LikertScale
				label="I would like to keep my autonomy in the decision process regarding which prompt is sent to the LLM."
				register={register("response7")}
				errors={errors.response7?.message}
			/>
		</>
	);
}

//Fragen 2
function PostStudyComponent() {
	const {
		register,
		formState: { errors },
	} = useFormContext<PoststudySchema>();

	return (
		<>
			<div className="text-sm text-muted-foreground">
				Please indicate how much you agree or disagree with the following
				statements about working with the prompt assistant.
			</div>
			<LikertScale
				label="The advice on where my prompt can be improved (e.g. writing style) helped me to formulate my prompts."
				register={register("response10")}
				errors={errors.response10?.message}
			/>
			<LikertScale
				label="The guided questions to add information helped me formulate my prompts."
				register={register("response11")}
				errors={errors.response11?.message}
			/>
			<LikertScale
				label="The summary helped me to check where and how my prompt had improved with the changes made by the prompt assistant."
				register={register("response12")}
				errors={errors.response12?.message}
			/>
			<LikertScale
				label="Through the always adjustable prompt, I kept my autonomy regarding which prompt is sent to the LLM."
				register={register("response13")}
				errors={errors.response13?.message}
			/>
			<hr />
			<LikertScale
				label="The prompt assistant saved time for me to fulfill the task."
				register={register("response14")}
				errors={errors.response14?.message}
			/>
			<LikertScale
				label="The prompt assistant improved the quality of my solution."
				register={register("response15")}
				errors={errors.response15?.message}
			/>
			<LikertScale
				label="The interface is easy to use."
				register={register("response16")}
				errors={errors.response16?.message}
			/>
			<LikertScale
				label="The prompt assistant is applicable to all kinds of tasks."
				register={register("response17")}
				errors={errors.response17?.message}
			/>
			<LikertScale
				label="The prompt assistant provides consistent support throughout the tasks."
				register={register("response18")}
				errors={errors.response18?.message}
			/>
			<LikertScale
				label="I would always like to use the prompt assistant from now on."
				register={register("response19")}
				errors={errors.response19?.message}
			/>
		</>
	);
}

//Abschlussfragen
function DemographicComponent() {
	const {
		control,
		formState: { errors },
	} = useFormContext<DemographicSchema>();

	return (
		<>
			<div className="text-sm text-muted-foreground">
				Some generic questions to finish the survey.
			</div>
			<div className="grid md:grid-cols-2 gap-2 pt-4">
				<div className="grid gap-1">
					<FormField
						control={control}
						name="gender"
						render={({ field }) => (
							<FormCombobox
								label="What is your gender?"
								value={field.value}
								onChange={field.onChange}
								options={genderEnum.options.map((item) => ({
									value: String(item),
									label: String(item),
								}))}
								placeholder="Please select..."
								required
							/>
						)}
					/>
				</div>
				<div className="grid gap-1">
					<FormField
						control={control}
						name="age"
						render={({ field }) => (
							<FormCombobox
								label="What is your age?"
								value={field.value}
								onChange={field.onChange}
								options={ageEnum.options.map((item) => ({
									value: String(item),
									label: String(item),
								}))}
								placeholder="Please select..."
								required
							/>
						)}
					/>
				</div>
			</div>
			<div className="grid md:grid-cols-2 gap-2 pt-4">
				<div className="grid gap-1">
					<FormField
						control={control}
						name="use"
						render={({ field }) => (
							<FormCombobox
								label="How often do you use LLMs as assistants?"
								value={field.value}
								onChange={field.onChange}
								options={useEnum.options.map((item) => ({
									value: String(item),
									label: String(item),
								}))}
								placeholder="Please select..."
								required
							/>
						)}
					/>
				</div>
				<div className="grid gap-1">
					<FormField
						control={control}
						name="job"
						render={({ field }) => (
							<FormCombobox
								label="What best describes your current field of work?"
								value={field.value}
								onChange={field.onChange}
								options={jobEnum.options.map((item) => ({
									value: String(item),
									label: String(item),
								}))}
								placeholder="Please select..."
								required
							/>
						)}
					/>
				</div>
			</div>
		</>
	);
}

//Finish
function CompleteComponent() {
	return (
		<>
			<div className="items-center justify-center flex flex-col space-y-4">
				<b>
					Thank you for your participation!
					<br />
					You can now return to Prolific.
				</b>
				<br />
				<Link href="https://app.prolific.com/submissions/complete?cc=C10C4RHQ">
					<Button variant="secondary">
						<ExternalLink className="h-5 w-5" />
					</Button>
				</Link>
				<br />
				<div className="text-sm text-muted-foreground">
					If the link does not work, use the following code in Prolific:
					<br />
					<div className="border rounded-lg p-6 shadow-md flex items-center justify-center">
						<b className="text-lg">Code: C10C4RHQ</b>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
