import { useEffect, useState } from "react";
import { Text, Group, Space, SegmentedControl, Autocomplete, ColorPicker, Anchor, Stack, Paper, Code} from "@mantine/core"
import "../App.css";
import { useInterval } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { ADD_BACKGROUND_COLOUR } from "../features/backgroundReducer";
import SQUARE_ENIX_FY3_2022 from "../components/squareEnix/SQUARE_ENIX_FY3_2022";
import SQUARE_ENIX_FY3_2021 from "../components/squareEnix/SQUARE_ENIX_FY3_2021";
import SQUARE_ENIX_FY3_2020 from "../components/squareEnix/SQUARE_ENIX_FY3_2020";
import SQUARE_ENIX_FY3_2019 from "../components/squareEnix/SQUARE_ENIX_FY3_2019";
import SQUARE_ENIX_FY3_2018 from "../components/squareEnix/SQUARE_ENIX_FY3_2018";
import SQUARE_ENIX_FY3_2017 from "../components/squareEnix/SQUARE_ENIX_FY3_2017";
import SQUARE_ENIX_FY3_2016 from "../components/squareEnix/SQUARE_ENIX_FY3_2016";
import SQUARE_ENIX_FY3_2015 from "../components/squareEnix/SQUARE_ENIX_FY3_2015";
import SQUARE_ENIX_FY3_2014 from "../components/squareEnix/SQUARE_ENIX_FY3_2014";
import SQUARE_ENIX_FY3_2013 from "../components/squareEnix/SQUARE_ENIX_FY3_2013";
import SQUARE_ENIX_FY3_2012 from "../components/squareEnix/SQUARE_ENIX_FY3_2012";
import SQUARE_ENIX_FY3_2011 from "../components/squareEnix/SQUARE_ENIX_FY3_2011";
import SQUARE_ENIX_FY3_2010 from "../components/squareEnix/SQUARE_ENIX_FY3_2010";

const currentYear = 2022;

const yearsList = Array.from({length: 13}, (elem, index) => 
                    {
                            return "FY3/" + (currentYear - index)
                    }) 

export default function SquareEnix() {

    const dispatch = useDispatch();

    const message = `Square Enix (They publish Marvel's Avengers), this is where you can find archived data.`;

    // const border = "+" + "-".repeat(98) + "+";

    const splitMessage = message.split("");

    const [text, setText] = useState("");
    // const [textColour, setTextColour] = useState({});
    // const [borderColour, setBorderColour] = useState({});

    const [seconds, setSeconds] = useState(0);
    const interval = useInterval(() => setSeconds((s) => s + 1), 80);

    useEffect(() => {
        if (seconds === splitMessage.length) {
            // setTextColour({ color: 'crimson', fontSize: 18, lineHeight: 1.4, textAlign: "center" });
            // setBorderColour({ color: 'crimson', fontSize: 21, lineHeight: 1.4 });
            interval.stop();
        } else {
            interval.start();
            setText(text + splitMessage[seconds])
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds])

    const [year, setYear] = useState("");

    const [colour, setColour] = useState("rgb(0, 255, 255)")

    const state: any = useSelector(state => state);

    useEffect(() => {
        const colourSplitReduce = colour.split("").reduce((acc, curr) => {
            return (curr === "b")
                ? acc + "ba"
                : (curr === ")")
                ? acc + ", .20)"
                : acc + curr
        }, "") // using reduce to create an rgba colour with 20% opacity so that the user only has to use an RGB slider.
               
        dispatch(ADD_BACKGROUND_COLOUR({
            colour: colourSplitReduce
        }))

    }, [colour, dispatch])

    const selectYearComponent = (objList: {year: string, component: JSX.Element}[]) => 
    (yearUsed: string): JSX.Element | null => {

        let [yearSelected] = objList.filter(elem => yearUsed === elem.year)

        return (yearSelected) ? yearSelected.component : null
    }

    const componentList = [
        // {
        //     year: "FY3/2023",
        //     component: <KOEI_TECMO_FY3_2023 />
        // },
        {
            year: "FY3/2022",
            component: <SQUARE_ENIX_FY3_2022 />
        },
        {
            year: "FY3/2021",
            component: <SQUARE_ENIX_FY3_2021 />
        },
        {
            year: "FY3/2020",
            component: <SQUARE_ENIX_FY3_2020 />
        },
        {
            year: "FY3/2019",
            component: <SQUARE_ENIX_FY3_2019 />
        },
        {
            year: "FY3/2018",
            component: <SQUARE_ENIX_FY3_2018 />
        },
        {
            year: "FY3/2017",
            component: <SQUARE_ENIX_FY3_2017 />
        },
        {
            year: "FY3/2016",
            component: <SQUARE_ENIX_FY3_2016 />
        },
        {
            year: "FY3/2015",
            component: <SQUARE_ENIX_FY3_2015 />
        },
        {
            year: "FY3/2014",
            component: <SQUARE_ENIX_FY3_2014 />
        },
        {
            year: "FY3/2013",
            component: <SQUARE_ENIX_FY3_2013 />
        },
        {
            year: "FY3/2012",
            component: <SQUARE_ENIX_FY3_2012 />
        },
        {
            year: "FY3/2011",
            component: <SQUARE_ENIX_FY3_2011 />
        },
        {
            year: "FY3/2010",
            component: <SQUARE_ENIX_FY3_2010 />
        },
    ];

    const selectYear = selectYearComponent(componentList);

    return (

        <div>
            <Stack mb="md" align="center">
            {/* <Paper shadow="sm" radius="lg" p="md" withBorder> */}
                {/* <Text style={{textAlign: "center"}} sx={borderColour} size="xl">{border}</Text> 
                <Text sx={textColour} size="lg">{text}</Text>
                <Text style={{textAlign: "center"}} sx={borderColour} size="xl">{border}</Text>  */}
            {/* </Paper> */}
            <Code style={{backgroundColor: `${state.colour}`}} >{text}</Code>
            </Stack>
            <Paper mb="md" shadow="sm" radius="xl" p="md" withBorder>
            <Stack align="center">
                <Text className="fade" mt="md" style={{textAlign: "center"}} size="lg">Also visit Install Base, it's a place to discuss and elaborate on the business side of the video game industry.</Text>
                    <Anchor className="fade" style={{textAlign: "center"}} mb="sm" href="https://www.installbaseforum.com/" target="_blank" >
                        https://www.installbaseforum.com/
                    </Anchor>
            </Stack>
            </Paper>

            <Group position="center">

                <Autocomplete
                    dropdownPosition="bottom"
                    mb="sm"
                    mr="md"
                    placeholder="Select"
                    label={`Select Fiscal Year from ${currentYear - (yearsList.length-1)} to ${currentYear}.`}
                    description={`Fiscal Year ending March ${(Number(year.slice(4,8))) ? year.slice(4,8) : "" }. (Type in the last two digits of the year to search quicker except 2020.)`}
                    radius="xl"
                    size="md"
                    limit={5}
                    data={yearsList}
                    value={year} 
                    onChange={setYear}
                />
                
                <Paper style={{backgroundColor: state.colour}} p="xs" radius="xl" withBorder>
                <Text size="sm" >
                Colour: {state.colour}
                </Text>    
                <ColorPicker 
                        withPicker={false}
                        size="lg"
                        mb="sm" 
                        swatchesPerRow={7} 
                        format="rgb" 
                        swatches={[
                            "rgb(0, 0, 0)", 
                            "rgb(0, 255, 255)", 
                            "rgb(0, 128, 128)",
                            "rgb(0, 0, 255)", 
                            "rgb(75, 0, 130)", 
                            "rgb(135, 30, 135)", 
                            "rgb(255, 0, 255)", 
                            "rgb(86, 29, 37)",
                            "rgb(173, 255, 47)",
                            "rgb(127, 184, 0)",
                            "rgb(0, 255, 0)", 
                            "rgb(128, 128, 128)",
                            "rgb(255, 0, 0)",
                            "rgb(227, 24, 9)",
                            "rgb(220, 20, 60)", 
                            "rgb(212, 81, 19)", 
                            "rgb(255, 165, 0)", 
                            "rgb(255, 215, 0)",
                            "rgb(200, 200, 200)",
                            "rgb(255, 196, 235)",
                            "rgb(255, 255, 255)", 
                        ]}
                        value={colour} 
                        onChange={setColour}
                        />
                        </Paper>

            </Group>

            {  
                selectYear(year)
            }
            
            { (selectYear(year) !== null)
                ? (
                <Group position="center">
                    <Space h="xl" />
                    <Paper style={{backgroundColor: state.colour}} p="xs" radius="xl" withBorder>
                        <Text size="sm" >
                        Colour: {state.colour}
                        </Text>    
                    <ColorPicker 
                        withPicker={false}
                        size="lg"
                        mb="sm" 
                        swatchesPerRow={7} 
                        format="rgb" 
                        swatches={[
                            "rgb(0, 0, 0)", 
                            "rgb(0, 255, 255)", 
                            "rgb(0, 128, 128)",
                            "rgb(0, 0, 255)", 
                            "rgb(75, 0, 130)", 
                            "rgb(135, 30, 135)", 
                            "rgb(255, 0, 255)", 
                            "rgb(86, 29, 37)",
                            "rgb(173, 255, 47)",
                            "rgb(127, 184, 0)",
                            "rgb(0, 255, 0)", 
                            "rgb(128, 128, 128)",
                            "rgb(255, 0, 0)",
                            "rgb(227, 24, 9)",
                            "rgb(220, 20, 60)", 
                            "rgb(212, 81, 19)", 
                            "rgb(255, 165, 0)", 
                            "rgb(255, 215, 0)",
                            "rgb(200, 200, 200)",
                            "rgb(255, 196, 235)",
                            "rgb(255, 255, 255)", 
                        ]}
                        value={colour} 
                        onChange={setColour}
                        />
                        </Paper>
                </Group>
                ) : (
                    null
                )
            }
        </div>

    );
}