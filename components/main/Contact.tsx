"use client";

import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import EarthCanvas from "../canvas/Earth";
import { slideInFromLeft } from "@/utils/motion";
import ContentForm from "../sub/ContentForm";
import { ToastContainer, toast } from "react-toastify";

interface FormState {
	name: string;
	email: string;
	message: string;
}

const Contact: React.FC = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [form, setForm] = useState<FormState>({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState<boolean>(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<div className="xl:mt-12 flex xl:flex-row flex-col-reverse justify-center ml-20 gap-10 overflow-hidden z-[99]">
			<motion.div
				variants={slideInFromLeft(0.2)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
				<p className="text-white sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
					Get in touch
				</p>
				<h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
					Contact.
				</h3>

				<ContentForm />
			</motion.div>

			{/* Earth Canvas Section */}
			<motion.div
				variants={slideInFromLeft(0.3)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default Contact;
