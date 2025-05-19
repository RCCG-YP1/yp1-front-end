import { useState, useMemo } from "react";
import Select from "../forms/select";
import SortIcon from "@/assets/icons/sort-icon";
import classNames from "classnames";
import ErrorMsg from "../error-msg";
import EmptyState from "../empty-state";
import { Braces } from "lucide-react";

const TableComponent = ({
	headCells,
	tableData,
	emptyStateProps,
	showPagination = false,
	totalItems = 0,
	itemsPerPage = 10,
	page = 1,
	setPage,
	onRowClick = () => {},
	isLoading = false,
	isError,
	error,
}) => {
	const [sortBy, setSortBy] = useState(null);
	const [sortDirection, setSortDirection] = useState("asc");

	const handleSort = sortKey => {
		if (sortBy === sortKey) {
			setSortDirection(prev => (prev === "asc" ? "desc" : "asc"));
		} else {
			setSortBy(sortKey);
			setSortDirection("asc");
		}
	};

	const sortedData = useMemo(() => {
		if (!sortBy) return tableData;
		return [...tableData].sort((a, b) => {
			const valA = a[sortBy];
			const valB = b[sortBy];
			if (valA < valB) return sortDirection === "asc" ? -1 : 1;
			if (valA > valB) return sortDirection === "asc" ? 1 : -1;
			return 0;
		});
	}, [sortBy, sortDirection, tableData]);

	const pageList = Array.from(
		{ length: Math.ceil(totalItems / itemsPerPage) },
		(_, i) => i + 1
	);
	const renderSkeletonRows = () => {
		return Array(itemsPerPage)
			.fill(0)
			.map((_, index) => (
				<tr
					key={`skeleton_${index}`}
					className="animate-pulse border-b border-[#F6F6F6] last-of-type:border-b-0"
				>
					{headCells.map(cell => (
						<td key={cell.id} className="p-4">
							<div className="h-4 bg-gray-200 rounded w-[80%]"></div>
						</td>
					))}
				</tr>
			));
	};

	if (isError) {
		return <ErrorMsg error={error} />;
	}

	return (
		<div>
			<div className="overflow-x-auto w-full">
				<table className="min-w-full bg-white">
					<thead className="rounded-lg">
						<tr>
							{headCells.map(cell => (
								<th
									key={cell.id}
									className={`first-of-type:rounded-l-lg last-of-type:rounded-r-lg text-left p-4 bg-gray-100 ${
										cell.sortBy ? "cursor-pointer select-none" : ""
									}`}
									onClick={() => cell.sortBy && handleSort(cell.sortBy)}
								>
									<div className="flex items-center w-max gap-1">
										{cell.label}
										{cell.sortBy && (
											<span
												className={classNames(
													"transition-transform ml-4",
													cell.sortBy === sortBy && "rotate-[360deg]"
												)}
											>
												<SortIcon />
											</span>
										)}
									</div>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{isLoading ? (
							renderSkeletonRows()
						) : sortedData.length > 0 ? (
							sortedData.map((row, rowIndex) => (
								<tr
									key={rowIndex}
									className="hover:bg-gray-50 border-b border-[#F6F6F6] last-of-type:border-b-0"
									onClick={() => onRowClick(row)}
								>
									{headCells.map(cell => (
										<td key={cell.id} className="p-4">
											{row[cell.id]}
										</td>
									))}
								</tr>
							))
						) : (
							<tr>
								<td colSpan={headCells.length}>
									<div className="py-6">
										<EmptyState
											title="No Data Found"
											icon={<Braces />}
											{...emptyStateProps}
										/>
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
			{showPagination && (
				<div className="flex border border-[#F6F6F6] py-2 px-4 rounded-lg items-center justify-between mt-4">
					<p className="text-sm text-gray-600">
						{`${(page - 1) * itemsPerPage + 1}-${Math.min(
							page * itemsPerPage,
							totalItems
						)} of ${totalItems}`}
					</p>

					<div className="flex gap-4 items-center justify-end">
						<p>Go to page</p>
						<Select
							className="!w-[70px] !mb-0"
							id="select-example"
							inputClass="!py-2"
							theme="outlinedLight"
							options={pageList.map(el => ({ label: el, value: el }))}
							onChange={e => setPage(parseInt(e.target.value))}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default TableComponent;
