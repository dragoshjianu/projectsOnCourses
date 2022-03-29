import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
	const newPasswordInputRef = useRef();
	const authCtx = useContext(AuthContext);

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredNewPassword = newPasswordInputRef.current.value;

		//Validations for

		fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCcQ3o9XpR9Fzk3ftfAklXMULYRtTY2pnQ',
			{
				method: 'POST',
				body: JSON.stringify({
					idToken: authCtx.token,
					passowrd: enteredNewPassword,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then((res) => {
			//Always succeeds
			console.log(enteredNewPassword);
		});
	};
	return (
		<form className={classes.form}>
			<div className={classes.control}>
				<label htmlFor='new-password'>New Password</label>
				<input
					type='password'
					id='new-password'
					minLength='7'
					ref={newPasswordInputRef}
				/>
			</div>
			<div className={classes.action}>
				<button onClick={submitHandler}>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
