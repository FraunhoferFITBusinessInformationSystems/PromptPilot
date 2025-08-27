"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Textarea } from "@/components/ui/textarea";
import { Bot } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { type UseFormRegisterReturn, useFormContext } from "react-hook-form";
import { sendChatRequest } from "./action";

export interface TaskComponentProps {
	task: string;
	register: UseFormRegisterReturn<string>;
	help: boolean;
}

//After Copy, change the function name to TaskComponent(X) where X is the task number
export function TaskComponent1(params: TaskComponentProps) {
	const { setValue } = useFormContext();
	const [prompt1, setPrompt1] = useState("");
	const [prompt2, setPrompt2] = useState("");
	const [ollamaOut1, setOllamaOut1] = useState<{ questions: string[] } | null>(
		null,
	);
	const [ollamaOut2, setOllamaOut2] = useState("");
	const [ollamaOut21, setOllamaOut21] = useState("");
	const [ollamaOut3, setOllamaOut3] = useState("");
	const [responses, setResponses] = useState<{ [key: string]: string }>({});
	const [stepper, setStepper] = useState(0);

	useEffect(() => {
		if (!params.help) {
			setStepper(4);
		}
	}, [params.help]);

	// Update the form field value whenever prompt1 changes
	useEffect(() => {
		setValue(`${params.task}_org_prompt`, prompt1); // Set the value of the form field
	}, [prompt1, setValue, params.task]);
	useEffect(() => {
		let task = params.task;
		if (!params.help) {
			switch (params.task) {
				case "task1":
					task = "task4";
					break;
				case "task2":
					task = "task5";
					break;
				case "task3":
					task = "task6";
					break;
			}
		}
		setValue(`${task}_user_prompt`, prompt2); // Set the value of the form field
	}, [prompt2, setValue, params.task, params.help]);
	useEffect(() => {
		setValue(`${params.task}_pa_prompt`, ollamaOut2); // Set the value of the form field
	}, [ollamaOut2, setValue, params.task]);
	useEffect(() => {
		if (ollamaOut3 !== "") {
			let task = params.task;
			if (!params.help) {
				switch (params.task) {
					case "task1":
						task = "task4";
						break;
					case "task2":
						task = "task5";
						break;
					case "task3":
						task = "task6";
						break;
				}
			}
			setValue(`${task}`, ollamaOut3); // Set the value of the form field
		}
	}, [ollamaOut3, setValue, params.task, params.help]);

	function analysePrompt() {
		if (prompt1.trim() === "") {
			alert("Prompt cannot be empty!"); // Show an error message
			return; // Stop further execution
		}

		const fetchData = async () => {
			const data = await sendChatRequest({
				systemPrompt: `You are a helpful Prompt Engineering Assistant. 
				Your job is to analyze the user's request, figure out what information is missing, 
				and propose clarifying questions in JSON format, e.g.:
				
				{
				  "questions": [
					"...",
					"..."
				  ]
				}
				
				Do not include extra explanations; only the JSON.`,
				userPrompt: `The user wants to do the following:
				${prompt1}
				1. Please identify any missing details or ambiguities.
				2. Provide a JSON object with a key 'questions' containing a list of clarifying questions.`,
			});

			setOllamaOut1(JSON.parse(data.response));
		};
		fetchData();
		setStepper(1);
	}

	function synthesisPrompt() {
		const fetchData = async () => {
			const data = await sendChatRequest({
				systemPrompt: `You are a helpful Prompt Engineering Assistant.

				Your task is to generate a refined, high-quality prompt based on the user's original request and their answers to clarifying questions. 
				Follow these prompt-engineering best practices:

				1. **Be Clear and Explicit**: Clearly define the task and avoid ambiguity.
				2. **Provide Context**: Include any relevant background, target audience, or specific details.
				3. **Specify Format and Structure**: If applicable, mention the desired output format (e.g., bullet points, paragraphs, tables).
				4. **Set Constraints**: Indicate word count, tone (formal, casual, persuasive), and style (concise, descriptive).
				5. **Include Edge Cases**: Specify what to avoid (e.g., technical jargon) if necessary.
				6. **Ensure the Prompt is Self-Contained**: The prompt should be complete and understandable on its own.

				**Instructions**:
				- Combine the user's original task with the additional details they provided.
				- Make the final prompt concise, well-structured, and explicit.
				- Use plain text for the output without additional explanations or comments.

				Output **only** the refined prompt in plain text without intro.`,
				userPrompt: `Original user request:
				${prompt1}

				Clarifying question answers:
				${answersString}

				Now, please create the final refined prompt.`,
			});
			const dataPromptChange = await sendChatRequest({
				systemPrompt: `You are a helpful Prompt Engineering Assistant.

				Your task is to generate a summary of adjustments between a refined prompt and an user's original request. 

				**Instructions**:
				- Use plain text for the output without additional explanations or comments.
				- Use only a single sentence for what you find.

				Output **only** the adjustments made to the prompt in plain text without intro.`,
				userPrompt: `Original user request:
				${prompt1}

				the refined prompt:
				${data.response}

				Now, please create the summary of the adjustments.`,
			});
			setOllamaOut2(data.response);
			setPrompt2(data.response);
			setOllamaOut21(dataPromptChange.response);
		};
		let answersString = "";
		for (const [key, value] of Object.entries(responses)) {
			answersString += `- ${ollamaOut1?.questions[Number(key)]}: ${value}`;
		}
		if (answersString.trim() === "") {
			alert("Response cannot be empty!"); // Show an error message
			return; // Stop further execution
		}
		fetchData();
		setStepper(2);
	}

	useEffect(() => {
		setPrompt2(ollamaOut2);
	}, [ollamaOut2]);

	function executePrompt() {
		if (prompt2.trim() === "") {
			alert("Prompt cannot be empty!"); // Show an error message
			return; // Stop further execution
		}
		const fetchData = async () => {
			const data = await sendChatRequest({
				systemPrompt: `You are a helpful assistant that responds to the user's prompt`,
				userPrompt: prompt2,
			});
			setOllamaOut3(data.response);
		};
		fetchData();
		setStepper(3);
	}

	// @ts-ignore
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			// analysePrompt();
		}
	};
	// @ts-ignore
	const handleKeyDown2 = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			// executePrompt();
		}
	};
	// @ts-ignore
	const handleKeyDown3 = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			// synthesisPrompt();
		}
	};

	const handleResponseChange = (index: number, value: string) => {
		setResponses((prevResponses) => ({
			...prevResponses,
			[index]: value,
		}));
	};

	return (
		<>
			<div className="grid grid-cols-2 gap-4">
				<div>
					{/* Task 1 */}
					{params.task === "task1" && (
					<>
						<h3>
						<b>Task: Market Research Report Generation</b>
						</h3>
						<div
						className="text-sm text-muted-foreground pt-2"
						onCopy={(e) => {
							e.preventDefault(); // Prevent the default copy behavior!
							alert("Copying is not allowed for this content."); // Optional: Show an alert
						}}
						>
						Scenario
						<br />
						You are a Market Intelligence Analyst at InsightPulse, a high-growth startup at the
						forefront of AI-driven market research automation. Your team has recently launched
						InsightPulse AI, a platform that transforms how market research is conducted by
						generating real-time, insight-rich reports using LLMs, news analytics, and
						financial data integration.
						<br />
						<br />
						The platform is positioned as a cost-effective and immediate alternative to
						traditional market intelligence firms, which often deliver reports that are
						expensive, slow, and outdated by the time they’re released. Your tool has already
						begun attracting attention from early adopters in sectors like private equity,
						consulting, competitive intelligence, and corporate strategy teams at mid-size and
						enterprise-level companies.
						<br />
						<br />
						David, the co-founder, is a former investment analyst at a global hedge fund. He’s
						passionate about democratizing access to timely insights and reducing the barriers
						to high-quality market research. He wants to increase brand visibility, attract
						early-stage investors, and expand the user base—particularly among strategy teams,
						boutique consulting firms, and seed-stage VCs.
						<br />
						<br />
						Get the LLM to write a LinkedIn post on behalf of David. The goal is to attract
						potential users and investors by clearly communicating the pain points that
						InsightPulse AI solves for (e.g. cost, speed, insight freshness, manual labor).
						Also integrate who the product is for, how InsightPulse AI compares to major market
						research solutions or intelligence platforms (e.g., Gartner, CB Insights,
						AlphaSense, PitchBook), as well as realistic use cases that demonstrate its
						business impact (e.g. speeding up due diligence, supporting go-to-market strategy,
						identifying competitive threats). End with a subtle but clear call-to-action (e.g.,
						try the beta, book a demo, or connect to learn more).
						</div>
					</>
					)}
					{/* Task 2 */}
					{params.task === "task2" && (
					<>
						<h3>
						<b>Task: Customer Persona Development</b>
						</h3>
						<div
						className="text-sm text-muted-foreground pt-2"
						onCopy={(e) => {
							e.preventDefault(); // Prevent the default copy behavior
							alert("Copying is not allowed for this content."); // Optional: Show an alert
						}}
						>
						<b>Scenario</b>
						<br />
						You’re working as a Marketing Associate at a fast-growing startup that specializes
						in eco-friendly personal care products. Your company has gained traction among
						environmentally conscious consumers and is known for using sustainable packaging,
						cruelty-free ingredients, and carbon-neutral shipping. You’re currently preparing
						for the launch of a new line of refillable shampoo and body wash, and the Head of
						Marketing has asked you to help develop a detailed customer persona to guide product
						positioning, branding, and promotional strategies.
						<br />
						<br />
						The product line will be launched in two key test markets:
						<br />
						1. Urban areas in the U.S. and Canada, where there’s a rising trend in low-waste
						living and refill stores.
						<br />
						2. Suburban neighborhoods with high concentrations of millennial families, where
						interest in clean beauty and family-safe ingredients is growing.
						<br />
						<br />
						Initial surveys and social media insights suggest that your early adopters are
						likely to be:
						<br />
						• 25–42 years old, highly engaged with sustainability topics.
						<br />
						• Frequent users of Instagram, YouTube, and eco-lifestyle blogs.
						<br />
						• Interested in wellness, clean beauty, and minimalism.
						<br />
						• Willing to pay a premium for products that align with their values.
						<br />
						• Concerned about plastic waste and corporate greenwashing.
						<br />
						<br />
						Get the LLM to write a one-page customer persona for a potential buyer of the
						refillable shampoo product. Your persona should reflect a realistic and
						marketing-relevant profile, grounded in the context above. Be sure to include a
						name, age, and short background story as well as location and lifestyle. Also
						integrate core values and daily routines, pain points, personal motivations, media
						habits, and buying behavior.
						</div>
					</>
					)}
					{/* Task 3 */}
					{params.task === "task3" && (
					<>
						<h3>
						<b>Task: Thematic Storytelling Blog Post</b>
						</h3>
						<div
						className="text-sm text-muted-foreground pt-2"
						onCopy={(e) => {
							e.preventDefault(); // Prevent the default copy behavior
							alert("Copying is not allowed for this content."); // Optional: Show an alert
						}}
						>
						<b>Scenario</b>
						<br />
						NovaNatura GmbH is a manufacturer of sustainable consumer goods with a diverse product
						portfolio across various market segments. Below are descriptions of five selected
						products, each assigned to one of the four categories of the BCG portfolio: Poor Dog,
						Question Mark, Star, or Cash Cow. Additionally, each product’s annual revenue (in
						million euros) is provided to indicate its economic significance.
						<br />
						<br />
						• Product “EcoBite” is a typical Poor Dog, generating €5 million in annual revenue.
						<br />
						• Product “PlantUp” is classified as a Question Mark and generates €18 million in
						annual revenue.
						<br />
						• Product “GreenFuel” lies between the Question Mark and Star categories and generates
						€22 million in annual revenue.
						<br />
						• Product “SolarPure” is a Star, with annual revenue of €35 million.
						<br />
						• Product “DairyPro” is categorized as a Cash Cow and, with €50 million in annual
						revenue, is the highest-grossing product in the portfolio.
						<br />
						<br />
						Get the LLM to develop a targeted investment strategy for the product “PlantUp,”
						currently classified as a Question Mark. Consider the role and position of the other
						products in NovaNatura GmbH’s portfolio. What synergies, internal resources, or
						financial support from other products (e.g., DairyPro or SolarPure) could be leveraged
						to strengthen PlantUp? What strategic goals could be achieved through investing in
						this product?
						</div>
					</>
					)}
					<br />
					<hr />
					<br />
					<h3>
						<b>
							{ollamaOut3 !== "" &&
								"Your answer was automaticly saved. Please continue to the next task."}
						</b>
					</h3>
					{/* <FormTextArea register={params.register} label={""} /> */}
					{!ollamaOut3 &&
						useFormContext().formState.errors[params.register.name]
							?.message && (
							<span className="text-sm text-destructive">
								Please finish the task before continuing.
								<br />
								{String(
									useFormContext().formState.errors[params.register.name]
										?.message || "",
								)}
							</span>
						)}
				</div>
				<div>
					<Card className="p-4">
						{stepper === 0 && (
							<>
								<h3>
									<b>
										Assistant: How can I help you? Please describe your task.
									</b>
								</h3>
								<div className="flex items-center gap-2 mb-4">
									<div className="flex-1 mt-4">
										<Input
											type="text"
											placeholder="Enter Prompt here..."
											onChange={(e) => setPrompt1(e.target.value)}
											onKeyDown={handleKeyDown}
											// biome-ignore lint/suspicious/noExplicitAny: fixed code
											onPaste={(e: any) => {
												e.preventDefault();
												return false;
											}}
										/>
									</div>
									<Button
										className="mt-4"
										type="button"
										variant="outline"
										autoFocus
										onClick={() => analysePrompt()}
									>
										<Bot className="h-5 w-5" />
										<b>Get Help</b>
									</Button>
								</div>
								{/* {ollamaOut && (
									<Card className="p-2">
										<div>{ollamaOut}</div>
									</Card>
								)} */}
							</>
						)}
						{stepper === 4 && (
							<>
								<h3>
									<b>
										Assistant: How can I help you? Please describe your task.
										(One try only)
									</b>
								</h3>
								<div className="flex items-center gap-2 mb-4">
									<div className="flex-1 mt-4">
										<Textarea
											className="h-80 text-sm border rounded-md"
											value={prompt2}
											onChange={(e) => setPrompt2(e.target.value)}
											//onKeyDown={handleKeyDown2}
											// biome-ignore lint/suspicious/noExplicitAny: fixed code
											onPaste={(e: any) => {
												e.preventDefault();
												return false;
											}}
										/>
									</div>
									<Button
										className="mt-4"
										type="button"
										variant="outline"
										autoFocus
										onClick={() => executePrompt()}
									>
										<Bot className="h-5 w-5" />
										<b>Submit Prompt</b>
									</Button>
								</div>
								{/* {ollamaOut && (
									<Card className="p-2">
										<div>{ollamaOut}</div>
									</Card>
								)} */}
							</>
						)}
						{stepper === 1 && (
							<>
								{ollamaOut1 ? (
									<h3 className="mb-4">
										<b>
											Assistant: I need more information to create the best
											prompt:
										</b>
									</h3>
								) : (
									<>
										<h3>Assistant: I am analyzing your request...</h3>
										<LoadingSpinner />
									</>
								)}
								{ollamaOut1?.questions.map((question, index) => (
									<div key={question}>
										<div>{question}</div>
										<Input
											className="m-2"
											type="text"
											placeholder="Your response..."
											onChange={(e) =>
												handleResponseChange(index, e.target.value)
											}
											onKeyDown={handleKeyDown3}
										/>
									</div>
								))}
								<div className="flex items-center gap-2 mb-4 justify-end">
									<Button
										className="mt-4"
										type="button"
										variant="outline"
										autoFocus
										onClick={() => synthesisPrompt()}
									>
										<Bot className="h-5 w-5" />
										<b>Send your reply</b>
									</Button>
								</div>
							</>
						)}
						{stepper === 2 &&
							(ollamaOut2 ? (
								<>
									<div className="mt-4">
										<b>Assistant: The following changes were made:</b>
										<br />
										{ollamaOut21.split("\n").map((line, index) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: Whatever ;)
											<Fragment key={index}>
												{line.split("\t").map((segment, i) => (
													<Fragment key={segment}>
														{i > 0 && <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
														{segment}
													</Fragment>
												))}
												<br />
											</Fragment>
										))}
									</div>
									<div className="mt-8">
										<b>Assistant: Here is the proposed final prompt:</b>
										<br />
										If you want to make further changes, here is your last
										chance:
									</div>
									<div className="flex items-center gap-2 mb-4 justify-end">
										<div className="flex-1 mt-4">
											<Textarea
												className="h-80 text-sm border rounded-md"
												value={prompt2}
												onChange={(e) => setPrompt2(e.target.value)}
												//onKeyDown={handleKeyDown2}
											/>
										</div>
										<Button
											className="mt-4"
											type="button"
											variant="outline"
											autoFocus
											onClick={() => executePrompt()}
										>
											<Bot className="h-5 w-5" />
											<b>Submit Prompt</b>
										</Button>
									</div>
								</>
							) : (
								<>
									<h3>Assistant: I am analyzing your request...</h3>
									<LoadingSpinner />
								</>
							))}
						{stepper === 3 &&
							(ollamaOut3 ? (
								<>
									<h3 className="mb-4">
										<b>Assistant: Here is the output generated by the LLM:</b>
									</h3>
									<div className="mt-4">
										<div>
											{ollamaOut3.split("\n").map((line, index) => (
												// biome-ignore lint/suspicious/noArrayIndexKey: Whatever ;)
												<Fragment key={index}>
													{line.split("\t").map((segment, i) => (
														<Fragment key={segment}>
															{i > 0 && <>&nbsp;&nbsp;&nbsp;&nbsp;</>}
															{segment}
														</Fragment>
													))}
													<br />
												</Fragment>
											))}
										</div>
									</div>
								</>
							) : (
								<>
									<h3>Assistant: I am analyzing your request...</h3>
									<LoadingSpinner />
								</>
							))}
					</Card>
				</div>
			</div>
		</>
	);
}
