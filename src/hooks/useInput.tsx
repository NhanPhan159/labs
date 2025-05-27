import { useState } from "react";

type TCallback =
	| ((value: string | number) => {
		isValid: boolean;
		errMessage: string | null;
	})
	| undefined;
const useInput = (
	type: "text" | "number",
	initData: string | number | undefined = undefined,
) => {
	const [value, setValue] = useState<string | number | undefined>(initData);
	const [err, setErr] = useState<string | null>(null);
	const onChange = (val: string | number) => {
		setValue(val);
	};
	const reset = () => {
		setValue(undefined);
	};
	const validate = (callback: TCallback = undefined): boolean => {
		if (value === undefined || value === "") {
			setErr("value can be null");
			return false;
		}
		if (callback) {
			const result = callback(value);
			if (!result.isValid) {
				setErr(result.errMessage);
				return false;
			}
		}
		return true;
	};
	return {
		value,
		onChange,
		type,
		err,
		reset,
		validate,
	};
};

export default useInput;
