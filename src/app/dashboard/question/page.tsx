// "use client"
// import * as React from "react"
// import { useState } from "react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// import {
//   Form,
//   FormControl,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"

// type IntroFormValues = {
//   name: string
//   percentage: string
//   stream: string
//   exam: string
//   location: string
//   budget: string
//   learningStyle: string
// }

// const initialFormValues: IntroFormValues = {
//   name: "",
//   percentage: "",
//   stream: "",
//   exam: "",
//   location: "",
//   budget: "",
//   learningStyle: "",
// }

// const fields = [
//   { name: "name", label: "Hey there! What’s your name?", placeholder: "Name" },
//   { name: "percentage", label: "What is your academic percentage?", placeholder: "Percentage" },
//   { name: "stream", label: "What stream are you interested in?", placeholder: "Engineering, Arts, Commerce, etc." },
//   { name: "exam", label: "What’s your target entrance exam", placeholder: "JEE, CUET, NEET, etc." },
//   { name: "location", label: "What’s your preferred study location?", placeholder: "Any city, state..." },
//   { name: "budget", label: "What’s your budget per year for college?", placeholder: "Average amount" },
//   { name: "learningStyle", label: "How would you describe your learning style?", placeholder: "Visual, Auditory, Practical" },
// ] as const

const IntroForm = () => {
//   const [formData, setFormData] = useState<IntroFormValues>(initialFormValues)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const emptyFields = Object.entries(formData).filter(([, value]) => value.trim() === "")
//     if (emptyFields.length > 0) {
//       alert("Please fill out all fields.")
//       return
//     }
//     console.log(formData)
//   }

//   const handleReset = () => {
//     setFormData(initialFormValues)
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-black text-white rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold text-center mb-6">Quick intro about you?</h2>

//       <Form>
//         <form onSubmit={handleSubmit}>
//           {fields.map((field) => (
//             <FormItem key={field.name} className="mb-4">
//               <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
//               <FormControl>
//                 <Input
//                   id={field.name}
//                   name={field.name}
//                   value={formData[field.name as keyof IntroFormValues]}
//                   onChange={handleChange}
//                   placeholder={field.placeholder}
//                   className="bg-black text-white border-b border-purple-500 rounded-none focus-visible:ring-0"
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           ))}

//           <div className="flex justify-between mt-6">
//             <Button
//               type="button"
//               variant="outline"
//               className="border-purple-500 text-purple-400 hover:bg-purple-950"
//               onClick={handleReset}
//             >
//               Reset
//             </Button>
//             <Button
//               type="submit"
//               className="bg-gradient-to-r from-purple-400 to-pink-400 text-white"
//             >
//               Submit
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   )
}

export default IntroForm
