import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";

import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();

  // Sidebar expanded/collapsed state
  const [isSidebarCollapsed, setIsSidebarCollapsed] =
    useState(false);

  // Tablet/mobile breakpoint
  const isMobile = useMediaQuery("(max-width: 768px)");

  /*
    On mobile/tablet the sidebar is ALWAYS collapsed.

    On laptop/desktop:
      false = 250px
      true  = 72px
  */
  const sidebarCollapsed =
    isMobile || isSidebarCollapsed;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">

          {/* =========================
              SIDEBAR
          ========================== */}

          <Sidebar
            isCollapsed={sidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
            isMobile={isMobile}
          />


          {/* =========================
              MAIN CONTENT
          ========================== */}

          <main
            className={
              sidebarCollapsed
                ? "content sidebar-collapsed"
                : "content"
            }
          >

            <Topbar />

            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/team"
                element={<Team />}
              />

              <Route
                path="/contacts"
                element={<Contacts />}
              />

              <Route
                path="/invoices"
                element={<Invoices />}
              />

              <Route
                path="/form"
                element={<Form />}
              />

              <Route
                path="/calendar"
                element={<Calendar />}
              />

              <Route
                path="/faq"
                element={<FAQ />}
              />

              <Route
                path="/bar"
                element={<Bar />}
              />

              <Route
                path="/pie"
                element={<Pie />}
              />

              <Route
                path="/line"
                element={<Line />}
              />

              <Route
                path="/geography"
                element={<Geography />}
              />

            </Routes>

          </main>

        </div>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;