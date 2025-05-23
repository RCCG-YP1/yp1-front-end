import SuspenseContainer from "@/components/custom-suspense";
import { useGetAdminDashboardDataQuery } from "@/services/admin.api";

export default function AdminHome() {
	const { data, isError, error, isLoading } = useGetAdminDashboardDataQuery();

	return (
		<SuspenseContainer isError={isError} error={error}>
			<h1 className="pg-title">Welcome, Admin</h1>
			<p className="font-light">Here’s a breakdown of the provincial statistics</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
				<div className="bg-bgSecondary py-6 flex flex-col text-left justify-center pl-6 rounded-lg">
					<h3>Total parishes</h3>
					<p className="text-xl font-medium mt-1">
						{isLoading ? "..." : data?.parishCount}
					</p>
				</div>
				<div className="bg-bgSecondary py-6 flex flex-col text-left justify-center pl-6 rounded-lg">
					<h3>Areas</h3>
					<p className="text-xl font-medium mt-1">
						{isLoading ? "..." : data?.areaCount}
					</p>
				</div>
				<div className="bg-bgSecondary py-6 flex flex-col text-left justify-center pl-6 rounded-lg">
					<h3>Zones</h3>
					<p className="text-xl font-medium mt-1">
						{isLoading ? "..." : data?.zoneCount}
					</p>
				</div>
				<div className="bg-bgSecondary py-6 flex flex-col text-left justify-center pl-6 rounded-lg">
					<h3>Pastors</h3>
					<p className="text-xl font-medium mt-1">
						{isLoading ? "..." : data?.pastorCount}
					</p>
				</div>
				<div className="bg-bgSecondary py-6 flex flex-col text-left justify-center pl-6 rounded-lg">
					<h3>Total members</h3>
					<p className="text-xl font-medium mt-1">
						{isLoading ? "..." : data?.memberCount}
					</p>
				</div>
			</div>
		</SuspenseContainer>
	);
}
