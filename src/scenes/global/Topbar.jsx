import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="12px"
      p={{
        xs: "8px 12px",
        sm: "12px 16px",
        md: "16px",
      }}
      width="100%"
      boxSizing="border-box"
    >
      {/* SEARCH */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        width={{
          xs: "100%",
          sm: "250px",
          md: "300px",
        }}
        maxWidth="100%"
        minWidth={0}
      >
        <InputBase
          sx={{
            ml: 2,
            flex: 1,
            minWidth: 0,
            fontSize: {
              xs: "13px",
              sm: "14px",
            },
          }}
          placeholder="Search"
        />

        <IconButton
          type="button"
          sx={{
            p: {
              xs: "6px",
              sm: "8px",
            },
          }}
        >
          <SearchIcon
            sx={{
              fontSize: {
                xs: "20px",
                sm: "24px",
              },
            }}
          />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box
        display="flex"
        alignItems="center"
        flexShrink={0}
      >
        {/* THEME */}
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{
            p: {
              xs: "5px",
              sm: "8px",
            },
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "24px",
                },
              }}
            />
          ) : (
            <LightModeOutlinedIcon
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "24px",
                },
              }}
            />
          )}
        </IconButton>

        {/* NOTIFICATIONS */}
        <IconButton
          sx={{
            p: {
              xs: "5px",
              sm: "8px",
            },
          }}
        >
          <NotificationsOutlinedIcon
            sx={{
              fontSize: {
                xs: "20px",
                sm: "24px",
              },
            }}
          />
        </IconButton>

        {/* SETTINGS */}
        <IconButton
          sx={{
            p: {
              xs: "5px",
              sm: "8px",
            },
          }}
        >
          <SettingsOutlinedIcon
            sx={{
              fontSize: {
                xs: "20px",
                sm: "24px",
              },
            }}
          />
        </IconButton>

        {/* PROFILE */}
        <IconButton
          sx={{
            p: {
              xs: "5px",
              sm: "8px",
            },
          }}
        >
          <PersonOutlinedIcon
            sx={{
              fontSize: {
                xs: "20px",
                sm: "24px",
              },
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;