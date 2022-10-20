import { useState } from "react";
import { Text, Card, Grid, Stack, Indicator, Anchor } from "@mantine/core";
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
            eventName: "2nd Quarter Earnings Results",
            eventDate: "October 26, 2022",
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
        {
            id: 4,
            companyName: "Microsoft",
            eventName: "1st Quarter Earnings Results",
            eventDate: "October 25, 2022",
            timeZone: "US, PST, UTC -8 Hours",
            irPage: "https://www.microsoft.com/en-us/Investor",
        },
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
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 8, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://dena.com/intl/ir/",
        },
        {
            id: 7,
            companyName: "Koei Tecmo",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "October 31, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.koeitecmo.co.jp/e/ir/",
        },
        {
            id: 8,
            companyName: "EA",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 1, 2022",
            timeZone: "US, PST, UTC -8 Hours",
            irPage: "https://ir.ea.com/home/default.aspx",
        },
        {
            id: 9,
            companyName: "CyberAgent",
            eventName: "4th Quarter Earnings Results",
            eventDate: "October 26, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.cyberagent.co.jp/en/ir/",
        },
        {
            id: 10,
            companyName: "GungHo",
            eventName: "3rd Quarter Earnings Results",
            eventDate: "November 14, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.gungho.co.jp/en/ir/",
        },
        {
            id: 11,
            companyName: "Square Enix",
            eventName: "1st Quarter Earnings Results",
            eventDate: "August 4, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.hd.square-enix.com/eng/ir/",
        },
        {
            id: 12,
            companyName: "Sega Sammy",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "October 31, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.segasammy.co.jp/english/ir/",
        },
        {
            id: 13,
            companyName: "Konami",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 2, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.konami.com/ir/en/",
        },
        {
            id: 14,
            companyName: "Marvelous",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "October 31, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://corp.marv.jp/english/",
        },
        {
            id: 15,
            companyName: "Activision Blizzard",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 7, 2022",
            timeZone: "US, PST, UTC -8 Hours",
            irPage: "https://investor.activision.com/",
        },
        {
            id: 16,
            companyName: "Take-Two",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 7, 2022",
            timeZone: "US, EST, UTC -5 Hours",
            irPage: "https://www.take2games.com/ir",
        },
        {
            id: 17,
            companyName: "GREE",
            eventName: "1st Quarter Earnings Results",
            eventDate: "November 1, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "http://www.gree.co.jp/jp/en/ir/",
        },
        {
            id: 18,
            companyName: "Bandai Namco",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 10, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.bandainamco.co.jp/en/ir/index.html",
        },
        {
            id: 19,
            companyName: "Kadokawa",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 2, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://group.kadokawa.co.jp/global/ir/",
        },
        {
            id: 20,
            companyName: "Falcom",
            eventName: "4th Quarter Earnings Results",
            eventDate: "November 10, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.falcom.co.jp/ir",
        },
        {
            id: 21,
            companyName: "NIS",
            eventName: "1st Quarter Earnings Results",
            eventDate: "August 10, 2022",
            timeZone: "Japan, JST, UTC +9 Hours",
            irPage: "https://www.nippon1.co.jp/ir/ir.html",
        },
        {
            id: 22,
            companyName: "Embracer Group",
            eventName: "2nd Quarter Earnings Results",
            eventDate: "November 17, 2022",
            timeZone: "Sweden, CET, UTC +1 Hour",
            irPage: "https://embracer.com/investors/",
        },
    ]

    function selectEvent() { // for displaying data when clicking on the calendar

        return  dateArray.map((data: EventDate) => {
              if (isSameDate(value || new Date(), new Date(data.eventDate))) {
                  let selectEventCompany = (data.companyName) ? `Company: ${data.companyName}` : null;
                  let selectEventName = `Event: ${data.eventName}`;
                  let selectEventDate = `Date: ${data.eventDate}`;
                  let selectTimeZone = `Time Zone: ${data.timeZone}`;
                  let selectIRPage = `IR Page: ${data.irPage}`;
                  let anchorLink = data.irPage;
  
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
                          <Anchor href={anchorLink} target="_blank">
                              {selectIRPage}
                          </Anchor>
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
                            && date.toString() !== new Date(dateArray[6].eventDate).toString()
                            && date.toString() !== new Date(dateArray[7].eventDate).toString()
                            && date.toString() !== new Date(dateArray[8].eventDate).toString()
                            && date.toString() !== new Date(dateArray[9].eventDate).toString()
                            && date.toString() !== new Date(dateArray[10].eventDate).toString()
                            && date.toString() !== new Date(dateArray[11].eventDate).toString()
                            && date.toString() !== new Date(dateArray[12].eventDate).toString()
                            && date.toString() !== new Date(dateArray[13].eventDate).toString()
                            && date.toString() !== new Date(dateArray[14].eventDate).toString()
                            && date.toString() !== new Date(dateArray[15].eventDate).toString()
                            && date.toString() !== new Date(dateArray[16].eventDate).toString()
                            && date.toString() !== new Date(dateArray[17].eventDate).toString()
                            && date.toString() !== new Date(dateArray[18].eventDate).toString()
                            && date.toString() !== new Date(dateArray[19].eventDate).toString()
                            && date.toString() !== new Date(dateArray[20].eventDate).toString()
                            && date.toString() !== new Date(dateArray[21].eventDate).toString()
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
                                && fullDate !== new Date(dateArray[6].eventDate).toString() 
                                && fullDate !== new Date(dateArray[7].eventDate).toString() 
                                && fullDate !== new Date(dateArray[8].eventDate).toString() 
                                && fullDate !== new Date(dateArray[9].eventDate).toString() 
                                && fullDate !== new Date(dateArray[10].eventDate).toString() 
                                && fullDate !== new Date(dateArray[11].eventDate).toString() 
                                && fullDate !== new Date(dateArray[12].eventDate).toString() 
                                && fullDate !== new Date(dateArray[13].eventDate).toString() 
                                && fullDate !== new Date(dateArray[14].eventDate).toString() 
                                && fullDate !== new Date(dateArray[15].eventDate).toString() 
                                && fullDate !== new Date(dateArray[16].eventDate).toString() 
                                && fullDate !== new Date(dateArray[17].eventDate).toString() 
                                && fullDate !== new Date(dateArray[18].eventDate).toString() 
                                && fullDate !== new Date(dateArray[19].eventDate).toString() 
                                && fullDate !== new Date(dateArray[20].eventDate).toString() 
                                && fullDate !== new Date(dateArray[21].eventDate).toString() 
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