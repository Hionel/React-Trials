import React, { Fragment } from "react";
import modalStyle from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

interface IModalProps {
	errorDescription: string | undefined;
	openModal: (state: boolean, msg?: string) => void;
}
const ErrorContent = (props: IModalProps) => {
	const { errorDescription, openModal } = props;
	const closeError = (event: React.MouseEvent) => {
		const target = event.target as HTMLElement;
		if (target.tagName === "SECTION" || target.tagName === "BUTTON") {
			return openModal(false);
		}
		return openModal(true, errorDescription);
	};
	return (
		<section
			className={`${modalStyle.modalContainer} flexColumn`}
			onClick={closeError}
		>
			<div className={`${modalStyle.modalWrapper} flexColumn`}>
				<h2 className={modalStyle.errorHeading}>Invalid Input</h2>
				<p className={modalStyle.errorDescription}>{errorDescription}</p>
				<button className={modalStyle.errorButton} onClick={closeError}>
					Ok
				</button>
			</div>
		</section>
	);
};
const ErrorModal = (props: IModalProps) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ErrorContent
					errorDescription={props.errorDescription}
					openModal={props.openModal}
				/>,
				document.getElementById("portal-root")!
			)}
		</Fragment>
	);
};

export default ErrorModal;
