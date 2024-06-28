export const INITIAL_STATE = {
	isValid: {
		title: true,
		text: true,
		date: true,
	},
	values: {
		title: '',
		tag: '',
		text: '',
		date: '',
	},
	isFormReadyToSubmit: false,
};

export function formReducer(state, action) {
	switch (action.type) {
		case 'RESET_VALIDITY':
			return { ...state, isValid: INITIAL_STATE.isValid };
		case 'INPUT_CHANGE':
			return { ...state, values: { ...state.values, ...action.payload } };
		case 'SUBMIT':
			const titleValidity = state.values.title?.trim().length;
			const textValidity = state.values.text?.trim().length;
			const dateValidity = state.values.date;
			return {
				...state,
				isValid: {
					title: titleValidity,
					text: textValidity,
					date: dateValidity,
				},
				isFormReadyToSubmit: titleValidity && textValidity && dateValidity,
			};
		case 'CLEAR':
			return {
				...state,
				values: INITIAL_STATE.values,
				isFormReadyToSubmit: false,
			};
	}
}
