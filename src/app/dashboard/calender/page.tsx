"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function DarkCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col md:flex-row gap-20 bg-black text-white p-6 rounded-xl shadow-xl px-20">
      {/* Calendar */}
      <div className="space-y-4">
        <h2 className="text-4xl text-center font-bold">Calendar</h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border border-[#ffffff27] text-white"
        />
      </div>

      {/* Important Dates */}
      <div className="flex-1 space-y-4 ">
        <h2 className="text-3xl font-bold">Important Dates</h2>

        <div className="bg-neutral-900 border border-neutral-700 p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">Jee Mains</p>
              <p className="text-sm text-red-400">Last day to apply - 16 April</p>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded text-white hover:opacity-90">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
