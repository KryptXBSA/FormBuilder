"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Code,
	Layers,
	Wand2,
	CheckCircle,
	ArrowUpRight,
} from "lucide-react";
import { Icons } from "@/components/icons";

export function IndexPage() {
	return (
		<div className="container mx-auto px-4 py-16 md:py-24">
			{/* Hero Section */}
			<div className="mx-auto max-w-5xl space-y-6">
				<h1 className="text-center font-extrabold text-4xl tracking-tight md:text-6xl">
					<span className="bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text text-transparent">
						FormBuilder
					</span>
				</h1>

				<p className="mx-auto max-w-3xl text-center text-slate-700 text-xl md:text-2xl dark:text-slate-300">
					UI-based codegen tool to easily create beautiful and type-safe
					<span className="bg-gradient-to-r from-blue-400 to-pink-600 bg-clip-text font-semibold text-transparent">
						{" "}
						@shadcn/ui{" "}
					</span>
					forms
				</p>

				{/* Framework Icons */}
				<div className="mt-4 mb-2 flex justify-center gap-4">
					<div className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-200 px-4 py-3 shadow-sm transition-all duration-300 hover:from-blue-200 hover:to-indigo-300 dark:from-blue-900/40 dark:to-indigo-800/40 dark:hover:from-blue-800/50 dark:hover:to-indigo-700/50">
						<Icons.next className="h-7 w-7 transition-colors duration-300" />
						<span className="font-medium text-sm">Next.js</span>
					</div>
					<div className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-br from-orange-100 to-red-200 px-4 py-3 shadow-sm transition-all duration-300 hover:from-orange-200 hover:to-red-300 dark:from-orange-900/40 dark:to-red-800/40 dark:hover:from-orange-800/50 dark:hover:to-red-700/50">
						<Icons.Svelte className="h-7 w-7 transition-colors duration-300" />
						<span className="font-medium text-sm">Svelte</span>
					</div>
					<div className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-200 px-4 py-3 shadow-sm transition-all duration-300 hover:from-emerald-200 hover:to-teal-300 dark:from-emerald-900/40 dark:to-teal-800/40 dark:hover:from-emerald-800/50 dark:hover:to-teal-700/50">
						<Icons.vue className="h-7 w-7 transition-colors duration-300" />
						<span className="font-medium text-sm">Vue</span>
					</div>
				</div>

				<div className="flex flex-col justify-center gap-3 sm:flex-row">
					<Button
						asChild
						size="lg"
						className="hover:-translate-y-0.5 transform cursor-pointer bg-gradient-to-r from-blue-500 to-pink-600 font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-pink-700 hover:shadow-blue-500/20 hover:shadow-md"
					>
						<Link href="/playground" className="flex items-center">
							Go to Playground{" "}
							<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</Link>
					</Button>
					<Button
						asChild
						size="lg"
						variant="outline"
						className="cursor-pointer transition-colors duration-300 hover:bg-slate-100 dark:hover:bg-slate-800"
					>
						<Link href="/templates">
							Explore Templates{" "}
							<Layers className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
						</Link>
					</Button>
				</div>
			</div>

			<div className="mx-auto mt-20 max-w-6xl">
				<h2 className="mb-12 text-center font-bold text-3xl md:text-4xl">
					Build forms in minutes, not hours
				</h2>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<FeatureCard
						icon={
							<Wand2 className="h-12 w-12 text-blue-500 transition-colors duration-300 group-hover:text-blue-600" />
						}
						title="Visual Builder"
						description="Drag and drop interface to create complex forms without writing a single line of code"
					/>
					<FeatureCard
						icon={
							<Code className="h-12 w-12 text-purple-500 transition-colors duration-300 group-hover:text-purple-600" />
						}
						title="Type-safe Output"
						description="Generate fully typed forms with validation that works across React, Svelte, and Vue"
					/>
					<FeatureCard
						icon={
							<Layers className="h-12 w-12 text-pink-500 transition-colors duration-300 group-hover:text-pink-600" />
						}
						title="Shadcn Integration"
						description="Seamlessly works with shadcn/ui components for beautiful, accessible forms"
					/>
				</div>
			</div>

			{/* <div className="mx-auto mt-24 max-w-6xl">
				<h2 className="mb-10 text-center font-bold text-3xl">
					What developers are saying
				</h2>
				<TestimonialScroller />
			</div> */}
		</div>
	);
}

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
	return (
		<div className="group relative cursor-pointer">
			<div className="-inset-0.5 absolute rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-25 blur transition duration-300 group-hover:opacity-100" />
			<div className="relative flex h-full flex-col rounded-lg border border-slate-200 bg-white p-8 transition-colors duration-300 group-hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:group-hover:bg-slate-800">
				<div className="mb-5 w-fit rounded-xl bg-slate-100 p-3 transition-colors duration-300 group-hover:bg-slate-200 dark:bg-slate-800 dark:group-hover:bg-slate-700">
					{icon}
				</div>
				<h3 className="mb-3 font-semibold text-xl transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
					{title}
				</h3>
				<p className="text-slate-600 dark:text-slate-400">{description}</p>
			</div>
		</div>
	);
}

// Testimonial data array
const testimonials = [
	{
		content:
			"FormBuilder has cut our form development time in half. The generated code is clean and exactly what we would have written by hand.",
		username: "@janedoe",
		platform: "twitter" as const,
		url: "https://twitter.com/janedoe",
	},
	{
		content:
			"The integration with shadcn/ui is seamless. I can visually build forms that match our design system perfectly. A must-have tool!",
		username: "@marksmith",
		platform: "twitter" as const,
		url: "https://twitter.com/marksmith",
	},
	{
		content:
			"FormBuilder solved our accessibility issues overnight. Now all our forms are fully compliant without any extra work on our part.",
		username: "@sarahj",
		platform: "twitter" as const,
		url: "https://twitter.com/sarahj",
	},
	{
		content:
			"This is exactly what I've been looking for. No more writing repetitive form validation code!",
		username: "u/devmaster42",
		platform: "reddit" as const,
		url: "https://reddit.com/u/devmaster42",
	},
	{
		content:
			"Just migrated our entire form system to use FormBuilder. Saved us weeks of development time.",
		username: "@techguru",
		platform: "twitter" as const,
		url: "https://twitter.com/techguru",
	},
	{
		content:
			"The visual builder is intuitive and the output is clean. Perfect for our team's workflow.",
		username: "u/codecraft",
		platform: "reddit" as const,
		url: "https://reddit.com/u/codecraft",
	},
];

function TestimonialScroller() {
	const scrollRef = React.useRef<HTMLDivElement>(null);
	const contentRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		let scrollAmount = 0;
		const distance = 1; // pixels to scroll per frame

		const scroll = () => {
			if (!scrollContainer || !contentRef.current) return;

			// Get the total width of the content
			const contentWidth = contentRef.current.scrollWidth;
			const containerWidth = scrollContainer.clientWidth;

			// Increment scroll amount
			scrollAmount += distance;

			// Reset when we've scrolled through the entire content
			if (scrollAmount >= contentWidth / 2) {
				scrollAmount = 0;
			}

			// Apply the scroll
			scrollContainer.scrollLeft = scrollAmount;
		};

		// Set up an interval for smooth scrolling
		const interval = setInterval(scroll, 30);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			ref={scrollRef}
			className="overflow-hidden"
			style={{ height: "280px" }}
		>
			<div
				ref={contentRef}
				className="flex gap-6 py-4"
				style={{ width: "max-content" }}
			>
				{/* Original testimonials */}
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={`testimonial-${index}`} {...testimonial} />
				))}
				{/* Duplicate testimonials to create a seamless loop */}
				{testimonials.map((testimonial, index) => (
					<TestimonialCard key={`testimonial-dup-${index}`} {...testimonial} />
				))}
			</div>
		</div>
	);
}

interface TestimonialCardProps {
	content: string;
	username: string;
	platform: "twitter" | "reddit";
	url: string;
}

function TestimonialCard({
	content,
	username,
	platform,
	url,
}: TestimonialCardProps) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:-translate-y-1 block min-w-[300px] max-w-[350px] flex-shrink-0 rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
		>
			<div className="mb-4 flex items-start justify-between">
				<span
					className={
						platform === "twitter"
							? "font-medium text-blue-600 dark:text-blue-400"
							: "font-medium text-orange-600 dark:text-orange-400"
					}
				>
					{username}
				</span>
				{platform === "twitter" ? (
					<Icons.twitter className="h-5 w-5 text-blue-400" />
				) : (
					<Icons.reddit className="h-5 w-5 text-orange-500" />
				)}
			</div>
			<p className="mb-4 text-slate-600 dark:text-slate-400">{content}</p>
		</a>
	);
}
