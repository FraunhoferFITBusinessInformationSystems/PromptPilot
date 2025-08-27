"use server";

import { createClient } from "@/lib/supabase/server";
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
import { AuthSessionMissingError } from "@supabase/supabase-js";

interface ChatRequestPayload {
	model: string;
	system: string;
	prompt: string;
	stream: boolean;
	max_tokens: number;
	temperature: number;
	format?: string;
}

interface ChatResponse {
	response: string;
}

interface SendChatRequestParams {
	systemPrompt: string;
	userPrompt: string;
	stream?: boolean;
	maxTokens?: number;
	temperature?: number;
	modelName?: string;
	format?: string;
	url?: string;
}

export async function sendChatRequest(
	params: SendChatRequestParams,
): Promise<ChatResponse> {
	// Default values
	let urlChat = "http://OLLAMA-URL/api/generate";
	if (params.url) {
		urlChat = params.url;
	}
	//let modelChat = "llama3.3:70b";
	let modelChat = "llama3.1";
	if (params.modelName) {
		modelChat = params.modelName;
	}
	let streamChat = false;
	if (params.stream) {
		streamChat = params.stream;
	}
	let maxTokensChat = 1024;
	if (params.maxTokens) {
		maxTokensChat = params.maxTokens;
	}
	let temperatureChat = 0.7;
	if (params.temperature) {
		temperatureChat = params.temperature;
	}

	//console.log(params);

	const payload: ChatRequestPayload = {
		model: modelChat,
		system: params.systemPrompt,
		prompt: params.userPrompt,
		stream: streamChat,
		max_tokens: maxTokensChat,
		temperature: temperatureChat,
		...(params.format && { format: params.format }),
	};

	const headers = {
		"Content-Type": "application/json",
	};

	//console.log(`Sending LLM request to ${urlChat} with payload:`, payload);

	try {
		const response = await fetch(urlChat, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(payload),
		});

		if (response.status !== 200) {
			console.error(
				`Request failed with status code ${response.status}. Response text: ${await response.text()}`,
			);
			return {
				response: `Error: LLM API returned status code ${response.status}.`,
			};
		}

		if (params.stream) {
			const reader = response.body?.getReader();
			const decoder = new TextDecoder();
			let accumulated = "";
			while (true) {
				if (!reader) throw new Error("Reader is null");
				const { done, value } = await reader.read();
				if (done) break;
				accumulated += decoder.decode(value, { stream: true });
			}
			return { response: accumulated };
		}

		const data = await response.json();
		//console.log(data)
		return data;
	} catch (error) {
		console.error(`Error fetching data: ${error}`);
		return { response: "Error: Could not reach the LLM API." };
	}
}

//Save des Surveys
export async function setProlificId(
	prolific_pid: string,
	sessionNumber: number,
) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	const start_timestamp = new Date().toISOString(); // Add the current timestamp

	const { data, error } = await supabase
		.from("pa_survey")
		.insert({
			prolific_pid: prolific_pid,
			start_timestamp: start_timestamp,
			task: sessionNumber,
		})
		.select("id")
		.single();

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return data.id;
}

export async function setPrestudy(object: PrestudySchema, sessionID: string) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	// Add prestudy_timestamp to the object
	const objectWithTimestamp = {
		...object,
		prestudy_timestamp: new Date().toISOString(), // Add the current timestamp
	};

	const { data, error } = await supabase
		.from("pa_survey")
		.update(objectWithTimestamp)
		.eq("id", sessionID);

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return;
}

export async function setPoststudy(object: PoststudySchema, sessionID: string) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	// Add prestudy_timestamp to the object
	const objectWithTimestamp = {
		...object,
		poststudy_timestamp: new Date().toISOString(), // Add the current timestamp
	};

	const { data, error } = await supabase
		.from("pa_survey")
		.update(objectWithTimestamp)
		.eq("id", sessionID);

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return;
}

export async function setDemographic(
	object: DemographicSchema,
	sessionID: string,
) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	// Add prestudy_timestamp to the object
	const objectWithTimestamp = {
		...object,
		demographic_timestamp: new Date().toISOString(), // Add the current timestamp
	};

	const { data, error } = await supabase
		.from("pa_survey")
		.update(objectWithTimestamp)
		.eq("id", sessionID);

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return;
}

export async function setTask1(object: TaskSchema1, sessionID: string) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	// Add prestudy_timestamp to the object
	const objectWithTimestamp = {
		...object,
		task1_timestamp: new Date().toISOString(), // Add the current timestamp
	};

	const { data, error } = await supabase
		.from("pa_survey")
		.update(objectWithTimestamp)
		.eq("id", sessionID);

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return;
}

export async function setTask2(object: TaskSchema2, sessionID: string) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	// Add prestudy_timestamp to the object
	const objectWithTimestamp = {
		...object,
		task2_timestamp: new Date().toISOString(), // Add the current timestamp
	};

	const { data, error } = await supabase
		.from("pa_survey")
		.update(objectWithTimestamp)
		.eq("id", sessionID);

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return;
}

export async function setTask3(object: TaskSchema3, sessionID: string) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	// Add prestudy_timestamp to the object
	const objectWithTimestamp = {
		...object,
		task3_timestamp: new Date().toISOString(), // Add the current timestamp
	};

	const { data, error } = await supabase
		.from("pa_survey")
		.update(objectWithTimestamp)
		.eq("id", sessionID);

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return;
}

export async function setTask4(object: TaskSchema4, sessionID: string) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	// Add prestudy_timestamp to the object
	const objectWithTimestamp = {
		...object,
		task4_timestamp: new Date().toISOString(), // Add the current timestamp
	};

	const { data, error } = await supabase
		.from("pa_survey")
		.update(objectWithTimestamp)
		.eq("id", sessionID);

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return;
}

export async function setTask5(object: TaskSchema5, sessionID: string) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	// Add prestudy_timestamp to the object
	const objectWithTimestamp = {
		...object,
		task5_timestamp: new Date().toISOString(), // Add the current timestamp
	};

	const { data, error } = await supabase
		.from("pa_survey")
		.update(objectWithTimestamp)
		.eq("id", sessionID);

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return;
}

export async function setTask6(object: TaskSchema6, sessionID: string) {
	const supabase = await createClient();

	// Login user
	if (process.env.API_USER_MAIL && process.env.API_USER_PW) {
		const {
			data: { user },
			error,
		} = await supabase.auth.signInWithPassword({
			email: process.env.API_USER_MAIL,
			password: process.env.API_USER_PW,
		});
		if (error || !user) {
			throw new AuthSessionMissingError();
		}
	} else {
		throw new AuthSessionMissingError();
	}

	// Add prestudy_timestamp to the object
	const objectWithTimestamp = {
		...object,
		task6_timestamp: new Date().toISOString(), // Add the current timestamp
	};

	const { data, error } = await supabase
		.from("pa_survey")
		.update(objectWithTimestamp)
		.eq("id", sessionID);

	if (error) throw error.message;

	// Logout user
	await supabase.auth.signOut();

	return;
}
