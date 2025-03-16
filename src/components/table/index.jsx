import { useState, useMemo } from "react";
import Select from "../forms/select";
import SortIcon from "@/assets/icons/sort-icon";
import classNames from "classnames";

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
						{sortedData.length > 0 ? (
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
									<div className="flex flex-col items-center text-center py-10 gap-2">
										{emptyStateProps?.icon}
										<h2 className="text-xl font-bold">{emptyStateProps?.title}</h2>
										<p className="text-gray-500">{emptyStateProps?.subTitle}</p>
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
