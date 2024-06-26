import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import {
	Typography,
	TableContainer,
	Paper,
	TableRow,
	TableCell,
	TableBody,
	TableHead,
	TableFooter,
	TablePagination
} from "@mui/material";
import {
	CancelOutlined,
	CheckBoxRounded,
	KeyboardArrowRightRounded
} from "@mui/icons-material";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import { evictionCardFields } from "../lib/types";
import { dayjsDateFormat } from "../lib/styled";

export function EvictionList({ ev: evictions, managePage }: { ev: evictionCardFields[], managePage: boolean }) {
	const navigate = useNavigate()
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(10)

	dayjs.extend(utc)

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return ((evictions && evictions.length) ?
		(<TableContainer component={Paper} sx={{
			display: 'table',
			borderRadius: 2
		}}>
			<TableHead>
				<TableRow>
					<TableCell sx={{ textAlign: 'center', px: 0 }}>
						<Typography fontWeight='bold'>Eviction Date</Typography>
					</TableCell>
					<TableCell sx={{ textAlign: 'center', px: 0 }}>
						<Typography fontWeight='bold'>Name</Typography>
					</TableCell>
					<TableCell sx={{ textAlign: 'center', px: 0 }}>
						<Typography fontWeight='bold'>Phone</Typography>
					</TableCell>
					<TableCell sx={{ textAlign: 'center', px: 0 }}>
						<Typography fontWeight='bold'>Email</Typography>
					</TableCell>
					<TableCell sx={{ px: 0 }}>&nbsp;
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{evictions
					.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
					.map((ev: evictionCardFields) => (
						<TableRow onClick={() => navigate(`/dashboard/eviction/${ev._id}${managePage ? '?m=edit' : ''}`)} sx={{ cursor: 'pointer' }}>
							<TableCell sx={{ textAlign: 'center', px: 0 }}>
								<Typography>{dayjs(ev.evictedOn).utc().format(dayjsDateFormat)}</Typography>
							</TableCell>
							<TableCell sx={{ textAlign: 'center', px: 0 }}>
								{ev.nameMatches ? <CheckBoxRounded /> : <CancelOutlined />}
							</TableCell>
							<TableCell sx={{ textAlign: 'center', px: 0 }}>
								{ev.phoneMatches ? <CheckBoxRounded /> : <CancelOutlined />}
							</TableCell>
							<TableCell sx={{ textAlign: 'center', px: 0 }}>
								{ev.emailMatches ? <CheckBoxRounded /> : <CancelOutlined />}
							</TableCell>
							<TableCell sx={{ textAlign: 'right', px: 0 }}>
								<KeyboardArrowRightRounded />
							</TableCell>
						</TableRow>
					))
				}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TablePagination
						count={evictions.length}
						rowsPerPageOptions={[10, 25, { label: 'All', value: -1 }]}
						rowsPerPage={rowsPerPage}
						page={page}
						colSpan={5}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
						sx={{ borderRadius: 2 }}
					/>
				</TableRow>
			</TableFooter>
		</TableContainer>) :
		(<TableContainer component={Paper} sx={{ display: 'table' }}>
			<TableBody>
				<TableRow>
					<TableCell sx={{ textAlign: 'center' }}>
						<Typography>No evictions found</Typography>
					</TableCell>
				</TableRow>
			</TableBody>
		</TableContainer>)
	)
}