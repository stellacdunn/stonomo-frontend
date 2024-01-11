import * as React from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Copyright() {
	return (
		<div className='Copyright' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='/'>
				Stonomo LLC
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</div>
	);
}

export function SignIn() {
	const { login } = useAuth();

	async function handleSubmit(event) {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const user = {
			username: data.get('username'),
			password: data.get('password'),
		};
		console.log(user);
		login(user);
		// handle failed login
	}

	return (
		<div>
			<div className='SignIn'
			/* sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}} */
			>
				<h1>
					Sign in
				</h1>
				<Form onSubmit={handleSubmit} noValidate >
					<input
						required
						id='username'
						label='Username'
						type='username'
						name='username'
						autoComplete='username'
						autoFocus
						placeholder='Username'
					/>
					<input
						required
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						placeholder='Password'
					/>
					<button
						type='submit'
					>
						Sign In
					</button>
					<ul>
						{/* <li>
							<Link href='#'>
								Forgot password?
							</Link>
						</li>
						<li>
							<Link href='#'>
								{'Don't have an account? Sign Up'}
							</Link>
						</li> */}
					</ul>
				</Form>
			</div>
			<Copyright />
		</div>
	);
}