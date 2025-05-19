import { NewsIcon, SearchIcon } from "@/assets/icons";
import FilterIcon from "@/assets/icons/filter-icon";
import Button from "@/components/button";
import Input from "@/components/forms/input";
import TableComponent from "@/components/table";
import { useState } from "react";
import AddUpdateModal from "./modals/add-update-modal";
import { useGetAdminInformationQuery } from "@/services/admin.api";
import { truncateStr } from "@/utils";
import { format } from "date-fns";
import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const headCells = [
	{
		id: "created_at",
		label: "Date Created",
		sortBy: "name",
	},
	{ id: "title", label: "Title" },
	{ id: "actions", label: "Actions" },
];

export default function AdminInformation() {
	const [page, setPage] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { data, isLoading, error, isError } = useGetAdminInformationQuery();
	return (
		<div>
			<h1 className="pg-title">Information Center</h1>

			<div className="my-6 flex justify-between items-center flex-wrap gap-4">
				<div className="flex gap-4 items-center">
					<Input
						prefix={<SearchIcon />}
						type="search"
						placeholder="Search..."
						theme="outlinedLight"
						className="!mb-0"
						inputClass="pl-2"
					/>
					<Button className={"min-w-max"} color="white">
						Filter <FilterIcon />
					</Button>
				</div>
				<Button onClick={() => setIsModalOpen(true)} color="black">
					+ New Update
				</Button>
			</div>

			<TableComponent
				headCells={headCells}
				tableData={data?.informations.data.map(el => ({
					created_at: format(el.created_at, "MMM dd, yyyy"),
					title: truncateStr(el.title, 100),
					actions: (
						<>
							<DropdownMenu modal={false}>
								<button className="h-8 w-8 p-0">
									<DropdownMenuTrigger>
										<span className="sr-only">Open menu</span>
										<MoreHorizontal />
									</DropdownMenuTrigger>
								</button>
								<DropdownMenuContent align="end">
									<DropdownMenuItem className={""}>
										<Eye /> View
									</DropdownMenuItem>
									<DropdownMenuItem className={""}>
										<Pencil /> Edit
									</DropdownMenuItem>
									<DropdownMenuItem className={"!text-red-500"}>
										<Trash2 /> Delete
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</>
					),
				}))}
				showPagination
				totalItems={50}
				isLoading={isLoading}
				isError={isError}
				error={error}
				itemsPerPage={10}
				page={page}
				setPage={setPage}
				emptyStateProps={{
					title: "No Data Found",
					subTitle: "Try adjusting your filters or adding new data.",
					icon: <NewsIcon />,
				}}
			/>

			<AddUpdateModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</div>
	);
}
