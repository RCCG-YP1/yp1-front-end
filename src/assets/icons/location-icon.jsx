export default function LocationIcon(props) {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11.3101 1.52631L7.37261 11.1513C7.20855 11.5341 6.79839 11.7529 6.38824 11.6708C5.97808 11.5888 5.70464 11.2333 5.70464 10.7958V5.98334H0.892143C0.454643 5.98334 0.0991742 5.70991 0.017143 5.29975C-0.0648883 4.88959 0.153862 4.47944 0.536674 4.31537L10.1617 0.377874C10.4898 0.241155 10.8726 0.323186 11.1187 0.56928C11.3648 0.815374 11.4468 1.19819 11.3101 1.52631Z"
				fill={props.color || "#B8ECAA"}
			/>
		</svg>
	);
}