import { ChangeEvent, useState } from "react";
import { Outlet } from "react-router"
import { Form } from "react-router-dom";
import {
	Button,
	Container,
	Paper,
	Stack,
	TextField,
	Typography,
	styled
} from "@mui/material"
import { searchFields } from "../lib/types";
import { maskPhoneInput } from "../lib/handlers";

export function ManagePage() {
	const [searchValues, setSearchValues] = useState<searchFields>({
		searchName: '',
		searchPhone: '',
		searchEmail: ''
	})

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const field = e.target.name
		const value = e.target.value
		setSearchValues(val => ({ ...val, [field]: value }));
	}

	return (
		<Container
			sx={{
				bgcolor: 'primary.main',
				paddingBottom: 2,
			}}
		>
			<Container sx={{ bgcolor: 'white', borderRadius: 2 }}>
				<Container
					sx={{ textAlign: "center", paddingTop: 1 }}
				>
					<Typography variant='h5'>
						Manage Reported Evictions
					</Typography>
				</Container>
				<Form method="POST">
					<Stack alignItems='center' className="search">
						<TextField
							required
							id="searchName"
							name="searchName"
							onChange={handleChange}
							value={searchValues.searchName || ''}
							fullWidth
							autoFocus
							placeholder="Name"
							label="Name"
							sx={{ margin: 1 }}
						/>
						<TextField
							id="searchPhone"
							name="searchPhone"
							onChange={handleChange}
							onInput={maskPhoneInput}
							value={searchValues.searchPhone || ''}
							fullWidth
							placeholder="Phone Number (Optional)"
							label="Phone Number"
							sx={{ margin: 1 }}
						/>
						<TextField
							id="searchEmail"
							name="searchEmail"
							onChange={handleChange}
							value={searchValues.searchEmail || ''}
							fullWidth
							placeholder="Email (Optional)"
							label="Email"
							sx={{ margin: 1 }}
						/>
						<Button
							variant="contained"
							type="submit"
							sx={{ margin: 1 }}
						>
							<Typography
								variant="h6"
								component="a"
							>
								Search
							</Typography>
						</Button>
					</Stack>
				</Form >
			</Container>
			<Outlet />
		</Container >
	);
}