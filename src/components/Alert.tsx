import React, {ReactNode} from "react";

interface Props {
	children: ReactNode;
	onClick: () => void;
}

const Alert = ({children, onClick}: Props) => {
	return (
		<div className="alert alert-dark alert-dismissible">
			{children}
			<button type="button" className="btn-close" onClick={onClick} />
		</div>
	);
};

export default Alert;
