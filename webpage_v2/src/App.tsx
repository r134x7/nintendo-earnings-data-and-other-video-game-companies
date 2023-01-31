import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // changed from BrowserRouter to HashRouter to solve client-side issue of refreshing causing 404 error due to GitHub Pages, source: https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing

import { ADD_BACKGROUND_COLOUR } from "./features/backgroundReducer";
import { useSelector, useDispatch } from "react-redux";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Stack,
  Drawer,
  ColorPicker,
  Paper,
  Group,
  Code,
} from '@mantine/core';


import { printTextBlock, liner } from './utils/table_design_logic';
import { Calendar, DeviceNintendo, Moon, Sun, DeviceGamepad, Cards } from 'tabler-icons-react';

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nintendo from './pages/Nintendo';
import Capcom from "./pages/Capcom";
import Events from "./pages/Events";
import Sega from "./pages/Sega";
import BandaiNamco from './pages/BandaiNamco';
import Games from './pages/Games';
import KoeiTecmo from './pages/KoeiTecmo';
import SquareEnix from './pages/SquareEnix';

function App() {

  const dispatch = useDispatch();
  
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [openDraw, setOpenDraw] = useState(false);

  const [colour, setColour] = useState("rgb(0, 255, 255)")
  const state: any = useSelector(state => state);

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark'); // when pressing a specific icon it toggles the light/dark mode
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useEffect(() => {
        const colourSplitReduce = colour.split("").reduce((acc, curr) => {
            return (curr === "b")
                ? acc + "ba"
                : (curr === ")")
                ? acc +", .20)"
                : acc + curr
        }, "") // using reduce to create an rgba colour with 20% opacity so that the user only has to use an RGB slider.

        const colourTheme = colorScheme;
               
        dispatch(ADD_BACKGROUND_COLOUR({
            colour: colourSplitReduce,
            fontColor: colourTheme, 
        }))

    }, [colour, colorScheme, dispatch])
  
  return (
      <Router>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
       <MantineProvider 
       theme={{ colorScheme: colorScheme}}  
       withGlobalStyles withNormalizeCSS>
        <AppShell // the default styles implemented in appShell was overwriting the colorScheme
          styles={(theme) => ({main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1] },})}
          navbarOffsetBreakpoint="sm"
        navbar={
          <Navbar sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1] })} p="xl" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 175, lg: 175 }}>
            <Stack spacing="lg">
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/" end>
                  <Button aria-label='Home Page' leftIcon={<DeviceNintendo size={24} strokeWidth={2} color={'#40bfb2'}/>} radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">Home</Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/nintendo">
                    <Button aria-label='Nintendo data page' radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">Nintendo</Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/capcom">
                    <Button aria-label='Capcom data page' radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">Capcom</Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/sega">
                    <Button aria-label='Sega data page' radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan"><Text size='xs' >Sega Sammy</Text></Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/bandai-namco">
                    <Button aria-label='Bandai Namco data page' radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">
                      <Text size='xs' >Bandai Namco</Text></Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/koei-tecmo">
                    <Button aria-label='Koei Tecmo data page' radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">
                      <Text>Koei Tecmo</Text></Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/square-enix">
                    <Button aria-label='Koei Tecmo data page' radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">
                      <Text>Square Enix</Text></Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/events">
                    <Button aria-label='Upcoming events page' leftIcon={<Calendar size={24} strokeWidth={2} color={'#40bfb2'}/>} radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">Events</Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/games">
                    <Button aria-label='Play some games' leftIcon={<DeviceGamepad size={24} strokeWidth={2} color={'#40bfb2'}/>} radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">Games</Button>
              </NavLink>
              {/* <FAQModal /> */}
            </Stack>
          </Navbar>
        }
        header={
          <Header sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1] })} height={50} p="md">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: "none"}}>
                <Burger
                  aria-label='Open or close menu'
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  // mr="xl"
                />
              </MediaQuery>
              <MediaQuery largerThan="sm" styles={{ display: "none"}}>
                  <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000", padding:"1em", margin:0}}>
                    ggx2ac + archives
                  </Code>
              </MediaQuery>
              <MediaQuery smallerThan={"sm"} styles={{ display: "none"}}>
                  <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000", padding:"1em", margin:0}}>
                    ggx2ac + archives: Nintendo earnings data and other video game companies
                  </Code>
              </MediaQuery>

                <Button aria-label='Open Drawer' radius="xl" variant='outline' color={'cyan'} onClick={() => setOpenDraw(true)} leftIcon={<Cards size={24} strokeWidth={2} color={'#40bfb2'} />}>
                  DRAW!</Button>
                <Drawer position='right' opened={openDraw} onClose={() => setOpenDraw(false) } >

                <Group position="center">
                  <Button mb={'xl'} aria-label='Enable Dark or Light theme' leftIcon={(colorScheme === 'dark') 
                                    ? <Sun size={24} strokeWidth={2} color={'yellow'} /> 
                                    : <Moon size={24} strokeWidth={2} color={'#40bfb2'} />} 
                                      radius="xl" variant='outline' color={colorScheme === "dark" ? "yellow" : "blue"} onClick={() => toggleColorScheme()} title="Toggle mode">
                    {colorScheme === "dark" ? "Light" : "Dark"}
                  </Button>

                  <Code style={{backgroundColor:`${state.colour}`, color:(state.fontColor === "dark") ? "#fff" : "#000000"}} block>
                    {liner(printTextBlock("Set background theme to light or dark mode. Changing colour affects data background and single dataset charts where applicable.",38),"−","both",true,38)
                  }</Code>

                  <Paper mt={'xl'} style={{backgroundColor: state.colour}} p="xs" radius="xl" withBorder>
                  <Text size="sm" ml={"xl"} pl={'xl'} >
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
                </Drawer>
            </div>
          </Header>
        }
        >
          <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nintendo" element={<Nintendo />} />
                <Route path="/capcom" element={<Capcom />} />
                <Route path="/sega" element={<Sega />} />
                <Route path="/bandai-namco" element={<BandaiNamco />} />
                <Route path="/koei-tecmo" element={<KoeiTecmo />} />
                <Route path="/square-enix" element={<SquareEnix />} />
                <Route path="/events" element={<Events />} />
                <Route path="/games" element={<Games />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
          </div>
        </AppShell>
       </MantineProvider>
       </ColorSchemeProvider>
      </Router>
  );
}

export default App;
