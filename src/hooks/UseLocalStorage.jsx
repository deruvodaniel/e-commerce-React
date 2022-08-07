import React, { useState } from "react";

const useLocalStorage = (key, initial) => {
	const [storedValue, setStoredValue] = useState(() => {
		return JSON.parse(window.localStorage.getItem(key)) || initial;
	});

	const setNewValue = (newValue) => {
		setStoredValue(newValue);
		window.localStorage.setItem(key, JSON.stringify(newValue));
	};

  console.log(storedValue, setNewValue);

	return [storedValue, setNewValue];
};

export default useLocalStorage