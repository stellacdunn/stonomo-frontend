import { useState } from "react";

export const useLocalStorage = (keyName: string, defaultValue: any) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = window.localStorage.getItem(keyName);
			if (value) {
				return JSON.parse(value);
			} else {
				window.localStorage.setItem(keyName, defaultValue);
				return defaultValue;
			}
		} catch (err) {
			return defaultValue;
		}
	});
	const setValue = (newValue: any) => {
		window.localStorage.setItem(keyName, newValue)
		setStoredValue(newValue);
	};
	return [storedValue, setValue];
};