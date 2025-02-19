"use client";

import React, { useRef, ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

// Define the form state type
interface FormState {
	name: string;
	email: string;
	message: string;
}

const ContentForm = () => {
	const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
	const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
	const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
	const [loading, setLoading] = useState<boolean>(false);
	const formRef = useRef<HTMLFormElement>(null);
	const [form, setForm] = useState<FormState>({
		name: "",
		email: "",
		message: "",
	});

	// Handle input changes
	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	// Handle form submission
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		console.log(form.email, form.message, form.name);
		console.log(formRef.current);

		const templateData = {
			name: form.name,
			email: form.email,
			message: form.message,
		};

		emailjs
			.sendForm(serviceId, templateId, formRef.current!, publicKey)
			.then(() => {
				setLoading(false);
				window.alert("Message sent successfully! I'll get back to you soon."); //
				setForm({ name: "", email: "", message: "" }); // Reset form
			})
			.catch((error) => {
				setLoading(false);
				window.alert("Failed to send message. Please try again later.");
				console.error("Email sending error:", error);
			});
	};

	return (
		<motion.form
			id="#contactForm"
			ref={formRef}
			onSubmit={handleSubmit}
			className="mt-6 flex flex-col gap-6 z-[999]">
			<label className="flex flex-col">
				<span className="text-white font-medium mb-2">Your Name</span>
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder="What's your good name?"
					className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
					required
				/>
			</label>

			<label className="flex flex-col">
				<span className="text-white font-medium mb-2">Your Email</span>
				<input
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
					placeholder="Enter your email"
					className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
					required
				/>
			</label>

			<label className="flex flex-col">
				<span className="text-white font-medium mb-2">Your Message</span>
				<textarea
					name="message"
					value={form.message}
					onChange={handleChange}
					placeholder="Write your message here..."
					rows={4}
					className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
					required
				/>
			</label>

			<button
				type="submit"
				className="flex text-center justify-center bg-primary py-3 px-8 font-bold button-primary text-white cursor-pointer rounded-lg max-w-[200px]"
				disabled={loading}>
				{loading ? "Sending..." : "Send"}
			</button>
		</motion.form>
	);
};

export default ContentForm;
