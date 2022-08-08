import React, { useState, useEffect } from "react";
import { Text, Loader, Card, Grid, Stack } from "@mantine/core";
import { Calendar, isSameDate } from "@mantine/dates";


export default function EVENTS_CALENDAR() {

    const [value, setValue] = useState<Date | null>(null); 

    interface EventDate {
        companyName?: string;
        eventName: string;
        eventDate: string;
    }

    // const Capcom: EventDate = {
    //     companyName: "Capcom",
        // eventName: "Quarter 1 Earnings Results",
        // eventDate: "July 26, 2022",
    // }

    const dateArray: EventDate[] = [
        {
            companyName: "Capcom",
            eventName: "Quarter 1 Earnings Results",
            eventDate: "July 26, 2022",
        },
        {
            eventName: "BitSummit - Day 1",
            eventDate: "August 6, 2022",
        },
        {
            eventName: "BitSummit - Day 2",
            eventDate: "August 7, 2022",
        },
        {
            companyName: "Nintendo",
            eventName: "Quarter 1 Earnings Results",
            eventDate: "August 3, 2022",
        },
    ]



    // need to solve getting the calendar to exclude everything but! the dates that exist...

    return (
        <>
        <Calendar 
                // fullWidth
                value={value} 
                onChange={setValue}
                // minDate={getFirstDate()}
                // maxDate={getLastDate()}
                // excludeDate={(date) => date.getDate() !== new Date("August 8, 2022").getDate() && date.getMonth() !== new Date("August 8, 2022").getMonth() && date.getFullYear() !== new Date("August 8, 2022").getFullYear()}
                // excludeDate={(date) => date.getMonth() !== new Date("August 8, 2022").getMonth()}
                excludeDate={(date) => date.toString() !== new Date("August 8, 2022").toString()}
            />
        </>
    );
}