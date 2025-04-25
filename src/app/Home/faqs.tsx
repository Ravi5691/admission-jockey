'use client';

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
    question: string;
    answer: string;
}

const faqItems: FaqItem[] = [
    {
        question: "Are my payments secure?",
        answer:
            "Yes, your payment details are fully secure. We use (If using any technology or simply yes answer) to protect your financial information during every transaction, ensuring that your data is always safe.",
    },
    {
        question: "Can I track the progress of my project?",
        answer:
            "Yes, you can easily track your project’s progress. Our platform allows you to monitor milestones, set deadlines, and receive regular updates from freelancers to ensure everything stays on schedule.",
    },
    {
        question: "Will the data that I share be kept confidential?",
        answer:
            "Absolutely. We prioritize your privacy, and all data shared is protected. We have strict confidentiality protocols in place, ensuring your sensitive information remains secure and is only used for the project at hand.",
    },
    {
        question: "What is Krip?",
        answer: "", // can be filled later
    },
    {
        question: "What industries does Krip.ai support?",
        answer:
            "Krip.ai supports a wide range of industries, including technology, healthcare, finance, marketing, e-commerce, education, and more. We connect you with freelancers experienced across various sectors to meet your specific needs.",
    },
];

const Faq: React.FC = () => {
    return (
        <div className="min-h-screen text-white relative">
            <section className="relative z-10 py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-[40px] font-medium">FAQs</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4 mt-12">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                value={`item-${index}`}
                                key={index}
                                className="border-b border-gray-700 group"
                            >
                                <AccordionTrigger
                                    className="text-left text-base lg:text-lg font-medium text-white hover:no-underline flex items-center justify-between"
                                >
                                    <span>{item.question}</span>

                                    {/* Plus to Cross transition */}
                                    <div className="relative h-5 w-5">
                                        {/* Plus Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute inset-0 h-5 w-5 transition-opacity duration-300 group-data-[state=open]:opacity-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="#a855f7"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>

                                        {/* Cross Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="#a855f7"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>

                                </AccordionTrigger>

                                <AccordionContent className="text-gray-400">
                                    {item.answer || "Answer coming soon..."}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>



                </div>
            </section>
        </div>
    );
};

export default Faq;
