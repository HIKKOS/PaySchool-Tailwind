import React, { useState } from "react";
import { IconArrowBarToDown } from "@tabler/icons-react";
import DeleteBtn from "../../common/Buttons/delete";

function DragAndDrop() {
	const [dragging, setDragging] = useState(false);
	const [previewUrl, setPreviewUrl] = useState(null);

	const handleDragEnter = (event) => {
		event.preventDefault();
		setDragging(true);
	};

	const handleDragOver = (event) => {
		event.preventDefault();
		setDragging(true);
	};

	const handleDragLeave = () => {
		setDragging(false);
	};

	const handleDrop = (event) => {
		event.preventDefault();
		setDragging(false);
		const file = event.dataTransfer.files[0];
		const fileType = file.type;
		if (fileType === "image/png" || fileType === "image/jpeg") {
			const reader = new FileReader();
			reader.onload = () => {
				setPreviewUrl(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			alert("Solo se permiten archivos PNG y JPG");
		}
	};

	const handleDelete = () => {
		setPreviewUrl(null);
	};

	return (
		<div
			onDragEnter={handleDragEnter}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			className={`${
				!previewUrl ? "m-10 p-8 border-2 rounded-lg" : "h-1/5"
			} ${dragging ? "border-green-500" : "border-gray-500"} `}
		>
			<input
				type="file"
				id="fileInput"
				accept=".png,.jpg,.jpeg"
				className="hidden"
				onChange={(event) => {
					const file = event.target.files[0];
					const fileType = file.type;
					if (fileType === "image/png" || fileType === "image/jpeg") {
						const reader = new FileReader();
						reader.onload = () => {
							setPreviewUrl(reader.result);
						};
						reader.readAsDataURL(file);						

					} else {
						alert("Solo se permiten archivos PNG y JPG");
					}
				}}
			/>
			<label htmlFor="fileInput" className="cursor-pointer">
				{previewUrl ? (
					<div className="flex flex-col items-center justify-center">
						<img
							src={previewUrl}
							alt="Preview"
							className="rounded-xl w-4/5 mb-3"
						/>
						<div className="w-1/4">
							<DeleteBtn handdleClick={handleDelete}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									stroke="currentColor"
									className="h-6 w-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</DeleteBtn>
						</div>
					</div>
				) : (
					<div className="cursor-pointer flex flex-col items-center">
						<IconArrowBarToDown size={40} />
						<p>Arrastra y suelta la imagen aquí</p>
						<p className="font-bold">
							O haz clic aqui para seleccionar archivos
						</p>
					</div>
				)}
			</label>
		</div>
	);
}

export default DragAndDrop;
