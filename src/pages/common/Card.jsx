import React from "react";
import AddElementBtn from "./Buttons/addElement";
import GoBack from "./Buttons/goBack";

const Card = ({
	body,
	head,
	editar,
	goBack,
	serviosAlumno = true,
	showAddBtn = true,
	buttonHanddler = { text: "agregar", linkto: "/", handdleClick: null },
}) => {
	const { text, linkto, handdleClick } = buttonHanddler;
	return (
		<div className="flex flex-row justify-center w-full mx-10">
			<div className="border border-gray-200 backdrop-blur-sm block p-6 rounded-md shadow-lg bg-white/90 w-full ">
				<div
					className={`${
						editar ? "justify-start" : "justify-between"
					} flex flex-row`}
				>
					{editar ? <GoBack linkto={goBack} /> : null}
					{serviosAlumno ? (
						<h5 className="text-gray-700 text-2xl leading-tight mb-2">
							{ head }{showAddBtn ? (
						<AddElementBtn
							linkto={linkto}
							text={text}
							handleClick={handdleClick}
						/>
					) : null}
						</h5>
					) : null}

					
				</div>
				<hr className="my-3" />
				{body}
			</div>
		</div>
	);
};
export default Card;
