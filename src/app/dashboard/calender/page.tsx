"use client"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";
import React from "react";


export default function Calender() {

    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <div className="flex px-20 gap-10">
            <div className="flex-2 p-10">
            <h1 className="text-3xl font-bold mb-4 text-center">Calender</h1>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
            />
            </div>
            <div className="flex-1">

            </div>
        </div>
    );
}