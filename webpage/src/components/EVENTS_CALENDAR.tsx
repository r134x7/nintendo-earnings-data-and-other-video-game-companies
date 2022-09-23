import { useState } from "react";
import { Text, Card, Grid, Stack, Indicator } from "@mantine/core";
import { Calendar, isSameDate } from "@mantine/dates";

export default function EVENTS_CALENDAR() {

    const [value, setValue] = useState<Date | null>(null); 
    
    interface EventDate {
        id: number;
        companyName?: string;
        eventName: string;
        eventDate: string;
        timeZone: string;
        irPage: string;
    }

    const dateArray: EventDate[] = [
        {
            id: 1,
            companyName: "Capcom",
            eventName: "1st Quarter Earnings Results",
            eventDate: "July 26, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.capcom.co.jp/ir/english/",
        },
        {
            id: 2,
            companyName: "Nintendo",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 8, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.nintendo.co.jp/ir/en/",
        },
        {
            id: 3,
            companyName: "Sony",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 1, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.sony.com/en/SonyInfo/IR/",
        },
        // {
        //     id: 4,
        //     companyName: "Microsoft",
        //     eventName: "1st Quarter Earnings Results",
        //     eventDate: "",
        //     timeZone: "US, PST, UTC -8 Hours",
        //     irPage: "https://www.microsoft.com/en-us/Investor",
        // },
        {
            id: 5,
            companyName: "Ubisoft",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "October 27, 2022",
            timeZone: "France, CEST, UTC +2 Hours",
            irPage: "https://www.ubisoft.com/en-us/company/about-us/investors",
        },
        {
            id: 6,
            companyName: "DeNA",
            eventName: "1st Quarter Earnings Results",
            eventDate: "August 10, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://dena.com/intl/ir/",
        },
    ]

    function selectEvent() { // for displaying data when clicking on the calendar

        return  dateArray.map((data: EventDate) => {
              if (isSameDate(value || new Date(), new Date(data.eventDate))) {
                  let selectEventCompany = (data.companyName) ? `Company: ${data.companyName}` : null;
                  let selectEventName = `Event: ${data.eventName}`;
                  let selectEventDate = `Date: ${data.eventDate}`;
                  let selectTimeZone = `TimeZone: ${data.timeZone}`
  
  
                  return <Card key={data.id} shadow="sm" p="sm" radius="md" withBorder style={{margin: "1em"}} >
                      <Stack >
                          <Text >
                              {selectEventName}
                          </Text>
                          <Text >
                              {selectEventCompany}
                          </Text>
                          <Text >
                              {selectEventDate}
                          </Text>
                          <Text >
                              {selectTimeZone}
                          </Text>
                      </Stack>
                  </Card>
              } else {
                  return null
              }
          })
          
      };

    return (
        <>
        <Grid grow>
            <Grid.Col
                span={6} 
            >
                    <Calendar 
                        fullWidth
                        value={value} 
                        onChange={setValue}
                        excludeDate={(date) => 
                            date.toString() !== new Date(dateArray[0].eventDate).toString() 
                            && date.toString() !== new Date(dateArray[1].eventDate).toString()
                            && date.toString() !== new Date(dateArray[2].eventDate).toString()
                            && date.toString() !== new Date(dateArray[3].eventDate).toString()
                            && date.toString() !== new Date(dateArray[4].eventDate).toString()
                            && date.toString() !== new Date(dateArray[5].eventDate).toString()
                        }
                        renderDay={(date) => {
                            const day = date.getDate();
                            const fullDate = date.toString();
                            return (
                              <Indicator size={8} color="teal" offset={8} 
                                disabled={
                                fullDate !== new Date(dateArray[0].eventDate).toString()
                                && fullDate !== new Date(dateArray[1].eventDate).toString() 
                                && fullDate !== new Date(dateArray[2].eventDate).toString()
                                && fullDate !== new Date(dateArray[3].eventDate).toString()
                                && fullDate !== new Date(dateArray[4].eventDate).toString()
                                && fullDate !== new Date(dateArray[5].eventDate).toString() 
                                }
                              >
                                <div>{day}</div>
                              </Indicator>
                            );
                          }}
                    />
                </Grid.Col>
                <Grid.Col
                    span={6} 
                >
                    {selectEvent()}
                </Grid.Col>
            </Grid>
        </>
    );
}