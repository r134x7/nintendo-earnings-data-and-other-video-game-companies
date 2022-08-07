import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'; 

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

import { DeviceNintendo, Moon, Sun } from 'tabler-icons-react';

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nintendo from './pages/Nintendo';
import Capcom from "./pages/Capcom";


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
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/">
                  <Button leftIcon={<DeviceNintendo size={24} strokeWidth={2} color={'#40bfb2'}/>} radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">Home</Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/nintendo">
                    <Button radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">Nintendo</Button>
              </NavLink>
              <NavLink className={({isActive}) => (isActive ? "active" : "inactive")} to="/capcom">
                    <Button radius="lg" fullWidth onClick={() => (opened === true) ? setOpened((o) => !o) : null} variant="outline" color="cyan">Capcom</Button>
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
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="lg"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
                <Text>ggx2ac and the archives of Nintendo earnings data and other video game companies</Text>
                <Button leftIcon={(colorScheme === 'dark') 
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
