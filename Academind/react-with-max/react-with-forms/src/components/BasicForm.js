import useForm from '../hooks/use-form';

const BasicForm = (props) => {
	const {
		value: enteredFName,
		isValid: enteredFNameIsValid,
		hasError: fNameInputHasError,
		valueChangeHandler: fNameChangeHandler,
		inputBlurHandler: fNameInputBlurHandler,
		reset: resetFNameInput,
	} = useForm((value) => value.trim() !== '');

	const {
		value: enteredLName,
		isValid: enteredLNameIsValid,
		hasError: lNameInputHasError,
		valueChangeHandler: lNameChangeHandler,
		inputBlurHandler: lNameInputBlurHandler,
		reset: resetLNameInput,
	} = useForm((value) => value.trim() !== '');

	const mailFormat = /^\S+@\S+\.\S+$/;

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput,
	} = useForm((value) => value.trim() !== '' && mailFormat.test(value));

	let formIsValid = false;

	if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		resetFNameInput();
		resetLNameInput();
		resetEmailInput();
	};

	const fNameInputClasses = fNameInputHasError ? 'form-control invalid' : 'form-control';
	const lNameInputClasses = lNameInputHasError ? 'form-control invalid' : 'form-control';
	const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmitHandler}>
			<div className='control-group'>
				<div className={fNameInputClasses}>
					<label htmlFor='fName'>First Name</label>
					<input
						type='text'
						id='fName'
						onChange={fNameChangeHandler}
						onBlur={fNameInputBlurHandler}
						value={enteredFName}
					/>
					{fNameInputHasError && (
						<p className='error-text'>First Name must not be empty</p>
					)}
				</div>
				<div className={lNameInputClasses}>
					<label htmlFor='lName'>Last Name</label>
					<input
						type='text'
						id='lName'
						onChange={lNameChangeHandler}
						onBlur={lNameInputBlurHandler}
						value={enteredLName}
					/>
					{lNameInputHasError && (
						<p className='error-text'>Last Name must not be empty</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='email'>E-Mail Address</label>
				<input
					type='text'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && <p className='error-text'>Please entere a valid email</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
