"use client";
import { AnimatePresence, m } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../../utils/cn";

export const FlipWords = ({
	words,
	wordsClassName,
	duration = 3000,
	className,
}: {
	words: string[];
	wordsClassName?: string[];
	duration?: number;
	className?: string;
}) => {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [currentClassName, setCurrentClassName] = useState<string | undefined>(
		undefined
	);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const startAnimation = useCallback(() => {
		const index = words.indexOf(currentWord);
		const word = words[index + 1] || words[0];
		const className = wordsClassName
			? wordsClassName[index + 1] || wordsClassName[0]
			: undefined;
		setCurrentWord(word);
		setCurrentClassName(className);
		setIsAnimating(true);
	}, [currentWord, words, wordsClassName]);

	useEffect(() => {
		if (!isAnimating)
			setTimeout(() => {
				startAnimation();
			}, duration);
	}, [isAnimating, duration, startAnimation]);

	return (
		<AnimatePresence
			onExitComplete={() => {
				setIsAnimating(false);
			}}
		>
			<m.div
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.4,
					ease: "easeInOut",
					type: "spring",
					stiffness: 100,
					damping: 15,
					bounce: 0.5,
				}}
				exit={{
					opacity: 0,
					y: -30,
					x: 0,
					position: "absolute",
				}}
				className={cn(
					"z-10 inline-block relative text-left text-neutral-100 px-2",
					className,
					currentClassName
				)}
				key={currentWord}
			>
				{currentWord.split("").map((letter, index) => (
					<m.span
						key={currentWord + index}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.4,
						}}
						className="inline-block"
					>
						{letter}
					</m.span>
				))}
			</m.div>
		</AnimatePresence>
	);
};
