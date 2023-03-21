import { useState, useRef } from "react";
import { IconUpload } from "@tabler/icons-react";

const ImageUploader = () => {
	const [imageUrl, setImageUrl] = useState("");
	const inputFileRef = useRef(null);

	return (
		<div>
			<form>
				<input
					id="Imagen"
					type="file"
					ref={inputFileRef}
					style={{ display: "none" }}
					onChange={(event) =>
						setImageUrl(URL.createObjectURL(event.target.files[0]))
					}
				/>
				<button
					className="w-full flex flex-row text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					onClick={(e) => {
						e.preventDefault();
						inputFileRef.current.click();

					}}
				>
					  <IconUpload className="h-5 w-5" />  Seleccionar imagen
				</button>
				{/* <button>Guardar cambios</button> */}
			</form>
		</div>
	);
};

export default ImageUploader;
