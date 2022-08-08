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

    // console.log(dateArray.map(x => {
    //     return x.eventDate
    // }));
    

    // need to solve getting the calendar to exclude everything but! the dates that exist...

    return (
        <>
        <Calendar 
                // fullWidth
                value={value} 
                onChange={setValue}
                // minDate={getFirstDate()}
                // maxDate={getLastDate()}
                // excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 3}
                // excludeDate={(date) => date.toString() !== new Date("August 7, 2022").toString()}
                // excludeDate={(date) => [date.toString()] === dateArray.map(x => new Date(x.eventDate).toString() ) }
                excludeDate={(date) => 
                    date.toString() !== new Date(dateArray[0].eventDate).toString() 
                    && date.toString() !== new Date(dateArray[1].eventDate).toString()
                    && date.toString() !== new Date(dateArray[2].eventDate).toString()
                    && date.toString() !== new Date(dateArray[3].eventDate).toString()
                }
                // excludeDate={(date) => [date.toString(), date.toString()] !== [new Date("August 7, 2022").toString(), new Date("August 3, 2022").toString()]}
            />
        </>
    );
}