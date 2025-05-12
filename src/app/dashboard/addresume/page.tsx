'use client'

import { useState, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { UploadCloud } from "lucide-react"

export default function ResumeDrop() {
  const [fileName, setFileName] = useState<string | null>(null)
  const router = useRouter()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleContinue = () => {
    router.push('/dashboard/internship')  // 👈 Update path if your internship page is different
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-xl bg-gradient-to-b from-black/70 to-zinc-900 shadow-xl text-white space-y-6 border border-white/10">
      <h2 className="text-xl font-bold text-center">Drop your resume. Find your fit.</h2>

      <div className="text-sm text-zinc-400">Add your document here</div>

      <label
        htmlFor="file-upload"
        className={cn(
          "flex flex-col items-center justify-center border border-dashed border-violet-400 rounded-lg px-6 py-10 cursor-pointer transition hover:bg-violet-950/30 text-center space-y-2"
        )}
      >
        <UploadCloud className="w-8 h-8 text-violet-300" />
        <p className="text-sm text-white">
          {fileName ? fileName : "Drop your file here,"}{" "}
          <span className="text-pink-400 underline">or click to browse</span>
        </p>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      <Button
        disabled={!fileName}
        onClick={handleContinue}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
      >
        Continue
      </Button>
    </div>
  )
}
