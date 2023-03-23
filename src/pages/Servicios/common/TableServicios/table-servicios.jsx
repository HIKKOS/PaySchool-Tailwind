import React, { useState } from "react";
import EditBtn from "../../../common/Buttons/edit";
import InfoBtn from "../../../common/Buttons/infoButton";
import AcceptButton from "../../../common/Buttons/AcceptButton";
import DeleteBtn from "../../../common/Buttons/delete";
import TheadServicios from "./TheadServicios";
import Modal from "react-modal";
import Carrousel from "../../../common/carrousel";
import { IconX } from "@tabler/icons-react";


const TableServicios = ({ servicios = [], tipoTabla = 0, setServicio }) => {
	const toggleModal = () => {
		setIsOpen(!isOpen);
	};
	const [service, setService] = useState({});
	const [isOpen, setIsOpen] = useState(false);
	const data = servicios.map((servicio, i) => {
		return (
			<tr
				key={servicio.Id}
				className=" row-auto border-b border-dashed  border-gray-400/50 my-10 text-lg text-gray-800"
			>
				<td className="py-4">{i + 1}</td>
				<td className="py-4">{servicio.Nombre}</td>
				<td className="py-4">
					{servicio.FrecuenciaDePago[0] +
						servicio.FrecuenciaDePago.slice(1).toLowerCase()}
				</td>
				<td className="py-4">{`$${servicio.Costo}`}</td>
				<td className="py-4">{servicio.Cancelable ? "Sí" : "No"}</td>
				<td className="py-4 flex flex-row items-center  justify-center gap-2">
					{tipoTabla === 1 ? null : (
						<>
							<InfoBtn
								li
								text={"Información"}
								handleClick={(e) => {
									setService(servicio);
									toggleModal();
								}}
							/>

							<EditBtn
								text="Editar"
								handdleClick={(e) => {
									setServicio(servicio);
								}}
								linkto={"/servicio/editar"}
							/>
						</>
					)}
					<DeleteBtn
						text={
							tipoTabla === 1
								? "Quitar"
								: tipoTabla
								? 0
								: "Borrar"
						}
					/>
				</td>
			</tr>
		);
	});
	return (
		<>
			<Modal
				className="flex flex-col mx-auto mt-10 transition-all  bg-white rounded-lg h-fit w-1/2  shadow-lg py-5 px-10 "
				isOpen={isOpen}
				onRequestClose={toggleModal}
				contentLabel="Ejemplo de modal"
				style={{
					trasition: "all 3s ease-in-out",
					overlay: {
						backgroundColor: "rgba(0,0,0,0.5)",
					},
					content: {
						backgroundColor: 'hex("#fff")',
					},
				}}
			>
				<div className="flex flex-row w-full  justify-between  ">
				<h2 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">{service.Nombre}</h2>
					<IconX className="cursor-pointer" onClick={toggleModal} size={40}/>
				</div>
				
				
				{service.ImgPaths?.length >= 1 ? (
					<Carrousel
						servicioId={service.Id}
						slides={service.ImgPaths}
					/>
				) : (
					<div className="py-6 flex flex-col justify-center items-center">
						<img className="w-1/4" src="/src/assets/icons/image-not-found-icon.svg" alt="no image" />
						<p className="text-xl">
							Sin imagenes agregadas
						</p>
					</div>
				)}

				<p className="py-4 text-xl">{service.Descripcion}</p>
				<ul className="max-w-md space-y-1 text-gray-900 list-disc dark:text-gray-400">
					<li >
						<p className="text-xl">
						 {`Pago ${service.FrecuenciaDePago?.toLowerCase()}`}
						 </p>
					</li>
					<li>
						<p className="text-xl">Costo: ${service.Costo}</p>
					</li>
					<li>
						<p className="text-xl">
							{service.Cancelable
								? "Se puede cancelar en cualquier momento"
								: "No se puede cancelar"}
						</p>
					</li>
					<li>
						<p className="text-xl">
							{`Usuarios: ${service.Cantidad}`
							}
						</p>
					</li>
				</ul>
				{/* <div className="flex flex-row justify-center">
					<AcceptButton handleClick={toggleModal} text={'Aceptar'}/>
				</div> */}
			</Modal>

			<table class=" w-full">
				<TheadServicios />
				<tbody>{data}</tbody>
			</table>
		</>
	);
};
export default TableServicios;
//137724976