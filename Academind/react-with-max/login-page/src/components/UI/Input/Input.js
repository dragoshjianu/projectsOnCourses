import React, { useRef, useImperativeHandle } from 'react';

import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
	const inputRef = useRef();

	const activate = () => {
		inputRef.current.focus();
	};

	useImperativeHandle(ref, () => {
		return {
			activate,
		};
	});

	return (
		<div className={`${styles.control} ${props.isValid === false ? styles.invalid : ''}`}>
			<label htmlFor={props.inputId}>{props.labelName}</label>
			<input
				ref={inputRef}
				type={props.inputType}
				id={props.inputId}
				value={props.inputValue}
				onChange={props.inputOnChangeHandler}
				onBlur={props.inputOnBlurHandler}
			></input>
		</div>
	);
});

export default Input;
