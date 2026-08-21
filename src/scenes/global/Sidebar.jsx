import { useState } from "react";

import {
  Box,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";

import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


/* =========================================================
   SIDEBAR ITEM
========================================================= */

const SidebarItem = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  collapsed,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Box
        onClick={() => setSelected(title)}
        sx={{
          display: "flex",

          alignItems: "center",

          justifyContent: collapsed
            ? "center"
            : "flex-start",

          height: "44px",

          margin: "4px 10px",

          padding: collapsed
            ? "0"
            : "0 10px",

          borderRadius: "4px",

          color:
            selected === title
              ? colors.blueAccent[500]
              : colors.grey[100],

          cursor: "pointer",

          transition:
            "background-color 0.2s ease, color 0.2s ease",

          "&:hover": {
            backgroundColor:
              colors.primary[500],

            color:
              colors.blueAccent[400],
          },
        }}
      >

        {/* ICON */}

        <Box
          sx={{
            width: collapsed
              ? "44px"
              : "30px",

            minWidth: collapsed
              ? "44px"
              : "30px",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",
          }}
        >
          {icon}
        </Box>


        {/* TEXT */}

        {!collapsed && (
          <Typography
            sx={{
              marginLeft: "10px",

              fontSize: "14px",

              fontWeight:
                selected === title
                  ? 600
                  : 400,

              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>
        )}

      </Box>
    </Link>
  );
};


/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = ({
  children,
  collapsed,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  if (collapsed) {
    return null;
  }

  return (
    <Typography
      sx={{
        color: colors.grey[300],

        fontSize: "12px",

        margin:
          "18px 20px 6px",
      }}
    >
      {children}
    </Typography>
  );
};


/* =========================================================
   SIDEBAR
========================================================= */

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
  isMobile,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  /*
    If mobile/tablet:
      always collapsed

    If desktop:
      use actual collapsed state
  */

  const collapsed =
    isMobile || isCollapsed;


  /* =========================================
     TOGGLE SIDEBAR
  ========================================== */

  const handleToggle = () => {
    // Do nothing on mobile/tablet
    if (isMobile) {
      return;
    }

    setIsCollapsed(
      (previous) => !previous
    );
  };


  /* =========================================
     SELECTED MENU ITEM
  ========================================== */

  const [selected, setSelected] =
    useState("Dashboard");


  return (
    <Box
      component="aside"

      sx={{
        position: "fixed",

        top: 0,

        left: 0,

        bottom: 0,

        width: collapsed
          ? "72px"
          : "250px",

        height: "100vh",

        minHeight: "100vh",

        backgroundColor:
          colors.primary[400],

        zIndex: 1200,

        overflow: "hidden",

        transition:
          "width 0.2s ease",

        /*
          IMPORTANT:
          This prevents the sidebar from
          creating horizontal overflow.
        */

        boxSizing: "border-box",

        "@media (max-width: 768px)": {
          width: "72px",
        },
      }}
    >

      {/* =========================================
          SCROLLABLE SIDEBAR CONTENT
      ========================================== */}

      <Box
        sx={{
          width: "100%",

          height: "100%",

          overflowY: "auto",

          overflowX: "hidden",

          boxSizing: "border-box",

          paddingBottom: "30px",

          /*
            Sidebar scrollbar
          */

          "&::-webkit-scrollbar": {
            width: "5px",
          },

          "&::-webkit-scrollbar-track": {
            background:
              colors.primary[400],
          },

          "&::-webkit-scrollbar-thumb": {
            background:
              colors.primary[500],

            borderRadius: "5px",
          },
        }}
      >

        {/* =========================================
            HEADER
        ========================================== */}

        <Box
          sx={{
            height: "70px",

            minHeight: "70px",

            display: "flex",

            alignItems: "center",

            justifyContent:
              collapsed
                ? "center"
                : "space-between",

            padding:
              collapsed
                ? 0
                : "0 12px 0 20px",

            color:
              colors.grey[100],

            boxSizing: "border-box",
          }}
        >

          {/* ADMINIS */}

          {!collapsed && (
            <Typography
              sx={{
                fontSize: "20px",

                fontWeight: 600,

                whiteSpace:
                  "nowrap",
              }}
            >
              ADMINIS
            </Typography>
          )}


          {/* HAMBURGER */}

          <IconButton
            onClick={handleToggle}

            disabled={isMobile}

            sx={{
              color:
                colors.grey[100],

              padding: "8px",

              "&.Mui-disabled": {
                color:
                  colors.grey[100],

                opacity: 1,
              },
            }}
          >
            <MenuOutlinedIcon />
          </IconButton>

        </Box>


        {/* =========================================
            USER PROFILE
        ========================================== */}

        {!collapsed && (

          <Box
            sx={{
              padding:
                "10px 10px 25px",
            }}
          >

            {/* PROFILE IMAGE */}

            <Box
              sx={{
                display: "flex",

                justifyContent:
                  "center",

                alignItems:
                  "center",
              }}
            >

              <img
                src="../../assets/user.png"
                alt="profile-user"

                style={{
                  width: "100px",

                  height: "100px",

                  borderRadius:
                    "50%",

                  objectFit:
                    "cover",

                  display: "block",
                }}
              />

            </Box>


            {/* PROFILE NAME */}

            <Box
              sx={{
                textAlign: "center",
              }}
            >

              <Typography
                sx={{
                  color:
                    colors.grey[100],

                  fontWeight: 700,

                  fontSize: "25px",

                  marginTop: "10px",

                  whiteSpace:
                    "nowrap",
                }}
              >
                Isha Thakur
              </Typography>


              <Typography
                sx={{
                  color:
                    colors.greenAccent[500],

                  fontSize: "14px",

                  whiteSpace:
                    "nowrap",
                }}
              >
                VP Fancy Admin
              </Typography>

            </Box>

          </Box>

        )}


        {/* =========================================
            MENU ITEMS
        ========================================== */}

        <Box>

          {/* DASHBOARD */}

          <SidebarItem
            title="Dashboard"
            to="/"
            icon={
              <HomeOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          {/* =========================
              DATA
          ========================== */}

          <SectionTitle
            collapsed={collapsed}
          >
            Data
          </SectionTitle>


          <SidebarItem
            title="Manage Team"
            to="/team"
            icon={
              <PeopleOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          <SidebarItem
            title="Contacts Information"
            to="/contacts"
            icon={
              <ContactsOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          <SidebarItem
            title="Invoices Balances"
            to="/invoices"
            icon={
              <ReceiptOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          {/* =========================
              PAGES
          ========================== */}

          <SectionTitle
            collapsed={collapsed}
          >
            Pages
          </SectionTitle>


          <SidebarItem
            title="Profile Form"
            to="/form"
            icon={
              <PersonOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          <SidebarItem
            title="Calendar"
            to="/calendar"
            icon={
              <CalendarTodayOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          <SidebarItem
            title="FAQ Page"
            to="/faq"
            icon={
              <HelpOutlineOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          {/* =========================
              CHARTS
          ========================== */}

          <SectionTitle
            collapsed={collapsed}
          >
            Charts
          </SectionTitle>


          <SidebarItem
            title="Bar Chart"
            to="/bar"
            icon={
              <BarChartOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          <SidebarItem
            title="Pie Chart"
            to="/pie"
            icon={
              <PieChartOutlineOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          <SidebarItem
            title="Line Chart"
            to="/line"
            icon={
              <TimelineOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />


          <SidebarItem
            title="Geography Chart"
            to="/geography"
            icon={
              <MapOutlinedIcon />
            }
            selected={selected}
            setSelected={setSelected}
            collapsed={collapsed}
          />

        </Box>

      </Box>

    </Box>
  );
};

export default Sidebar;