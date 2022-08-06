import { useEffect, useState } from "react";
import { Text, Button, Space, Collapse, Autocomplete } from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import NINTENDO_FY3_22 from "../components/NINTENDO_FY3_22";

const yearsList: any = []; // empty array 
Array.from({length: 6}, (v, i) => i).map(x => x = 1).reduce((acc, curr) => yearsList.push("FY3/" + (acc + curr + 2016).toString()), 0) // yearsList gets an array containing years from 2017 to 2022


export default function Nintendo() {

    const message = `Welcome, this is where you can find archived Nintendo earnings data.`;

    const splitMessage = message.split("");

    const [text, setText] = useState("");
    const [textColour, setTextColour] = useState({})

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 120);

    useEffect(() => {
        if (seconds === splitMessage.length) {
            setTextColour({ color: 'crimson', fontSize: 18, lineHeight: 1.4 });
            interval.stop();
        } else {
            interval.start();
            setText(text + splitMessage[seconds])
        }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds])

    const [year, setYear] = useState("");

    const [yearDes, setYearDes] = useState(Number())

    // const yearsList = ["FY3/2022", "FY3/2021", "FY3/2020", "FY3/2019", "FY3/2018", "FY3/2017", ];
    // const yearsList = [2017, 2018].map(x => x + 1
    // );

    // function yearsList() {

    // }

    // console.log(yearsList);


    // const yearsSliced = 

    // console.log(year);
    
    // const description = (year: string) => {
    //         (year.length === 8)
    //             ? 
    //             : ;
    //     }
    

    // make a function here that will take the year selected and then render the component...
    function SelectYear() {

    }



    return (

        <div>
            <Text mb="sm" style={{textAlign: "center"}} sx={textColour} size="lg">{text}</Text>
            <Autocomplete
                mb="sm"
                placeholder="Select"
                label="Select Fiscal Year"
                description={`Fiscal Year ending March ${year.slice(4,8)}. (Type in the last two digits of the year to search quicker except 2020.)`}
                radius="xl"
                size="md"
                data={yearsList}
                value={year} 
                onChange={setYear}
            />
            <NINTENDO_FY3_22 />
        </div>

    );
}