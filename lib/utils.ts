
import type { User } from "@supabase/auth-js";
import {
	AuthSessionMissingError,
	type SupabaseClient,
} from "@supabase/supabase-js";
import type { Row } from "@tanstack/react-table";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getUserRoles(user: User | null) {
	if (!user) return [];

	if (!user.user_metadata.custom_claims) return [];

	if (!user.user_metadata.custom_claims.roles) return [];

	return user.user_metadata.custom_claims.roles;
}

export function formatPrice(price: number): string {
	const priceFormatted = price.toLocaleString("de-DE", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

	return `${priceFormatted} €`;
}

export async function basicAuth(supabase: SupabaseClient, request: Request) {
	const basicAuth = request.headers.get("authorization");

	if (!basicAuth) throw Error("No login credentials submitted");

	const authValue = basicAuth.split(" ")[1];
	const [username, pwd] = atob(authValue).split(":");

	// Login user
	const {
		data: { user },
		error,
	} = await supabase.auth.signInWithPassword({
		email: username,
		password: pwd,
	});

	if (error || !user) {
		throw new AuthSessionMissingError();
	}
}

export function getWeekNumber(date: Date): number {
	const tempDate = new Date(date.valueOf());
	const dayNum = (date.getDay() + 6) % 7;
	tempDate.setDate(tempDate.getDate() - dayNum + 3);
	const firstThursday = tempDate.valueOf();
	tempDate.setMonth(0, 1);
	if (tempDate.getDay() !== 4) {
		tempDate.setMonth(0, 1 + ((4 - tempDate.getDay() + 7) % 7));
	}
	return 1 + Math.ceil((firstThursday - tempDate.valueOf()) / 604800000); // 604800000 = number of milliseconds in a week
}

export const filterDate = <TData>(
	row: Row<TData>,
	id: string,
	value: [{ label: string; start: Date; end: Date } | null],
) => {
	const filterDate: Date = row.getValue(id);

	if (value?.[0]) {
		const filterValue = value[0];
		return filterDate >= filterValue.start && filterDate <= filterValue.end;
	}
	return true;
};

export const filterArray = <TData>(
	row: Row<TData>,
	id: string,
	value: [string],
) => {
	const rowValues: [string] = row.getValue(id);

	const filterRes = value
		.filter((v) => v.length > 0)
		.every((v) => rowValues.includes(v));

	return filterRes;
};

/**
 * Recursively replaces all `null` values with "" in the given object.
 *
 * @param obj - The object to process.
 * @returns The processed object with `null` values replaced by `undefined`.
 */

// biome-ignore lint/suspicious/noExplicitAny: No choice. :()
export const replaceNullWithUndefined = (obj: any) => {
	for (const key in obj) {
		if (obj[key] === null) {
			obj[key] = undefined;
		} else if (typeof obj[key] === "object" && obj[key] !== null) {
			replaceNullWithUndefined(obj[key]);
		}
	}
	return obj;
};
