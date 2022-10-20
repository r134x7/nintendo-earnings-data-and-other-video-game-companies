import { useState } from 'react';
import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; // changed from BrowserRouter to HashRouter to solve client-side issue of refreshing causing 404 error due to GitHub Pages, source: https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing

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
  Stack
} from '@mantine/core';

import { Calendar, DeviceNintendo, Moon, Sun, DeviceGamepad } from 'tabler-icons-react';

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nintendo from './pages/Nintendo';
import Capcom from "./pages/Capcom";
import Events from "./pages/Events";
import Sega from "./pages/Sega";
import BandaiNamco from './pages/BandaiNamco';
import Games from './pages/Games';

// make modal for colour picker...

function App() {
  
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark'); // when pressing a specific icon it toggles the light/dark mode
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  
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
            <Stack spacing="xl">
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
                    <Button aria-label='Sega data page' radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">Sega</Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/bandai-namco">
                    <Button aria-label='Bandai Namco data page' radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">
                      <Text size='xs' >Bandai Namco</Text></Button>
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
          <Header sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1] })} height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: "none"}}>
                <Burger
                  aria-label='Open or close menu'
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="lg"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
                <Text>ggx2ac + archives: Nintendo earnings data and other video game companies</Text>
                <Button aria-label='Enable Dark or Light theme' leftIcon={(colorScheme === 'dark') 
                                  ? <Sun size={24} strokeWidth={2} color={'yellow'} /> 
                                  : <Moon size={24} strokeWidth={2} color={'#40bfb2'} />} 
                                    radius="xl" variant='outline' color={colorScheme === "dark" ? "yellow" : "blue"} onClick={() => toggleColorScheme()} title="Toggle mode">
                  {colorScheme === "dark" ? "Light" : "Dark"}
                </Button>
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
