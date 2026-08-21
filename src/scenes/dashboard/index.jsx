import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      m={{
        xs: "12px",
        sm: "16px",
        md: "20px",
      }}
      width="auto"
    >
      {/* HEADER */}
      <Box
        display="flex"
        flexDirection={{
          xs: "column",
          sm: "row",
        }}
        justifyContent="space-between"
        alignItems={{
          xs: "flex-start",
          sm: "center",
        }}
        gap="16px"
        mb="20px"
      >
        <Header
          title="DASHBOARD"
          subtitle="Welcome to your dashboard"
        />

        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: {
              xs: "12px",
              sm: "14px",
            },
            fontWeight: "bold",
            padding: {
              xs: "8px 14px",
              sm: "10px 20px",
            },
            whiteSpace: "nowrap",
          }}
        >
          <DownloadOutlinedIcon
            sx={{
              mr: "10px",
              fontSize: {
                xs: "18px",
                sm: "22px",
              },
            }}
          />
          Download Reports
        </Button>
      </Box>

      {/* DASHBOARD GRID */}
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(12, 1fr)",
        }}
        gridAutoRows={{
          xs: "auto",
          md: "140px",
        }}
        gap={{
          xs: "12px",
          sm: "16px",
          md: "20px",
        }}
        width="100%"
      >
        {/* ==================== STAT CARDS ==================== */}

        {/* EMAILS SENT */}
        <Box
          gridColumn={{
            xs: "span 1",
            sm: "span 1",
            md: "span 3",
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth={0}
          minHeight="140px"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* SALES OBTAINED */}
        <Box
          gridColumn={{
            xs: "span 1",
            sm: "span 1",
            md: "span 3",
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth={0}
          minHeight="140px"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* NEW CLIENTS */}
        <Box
          gridColumn={{
            xs: "span 1",
            sm: "span 1",
            md: "span 3",
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth={0}
          minHeight="140px"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* TRAFFIC RECEIVED */}
        <Box
          gridColumn={{
            xs: "span 1",
            sm: "span 1",
            md: "span 3",
          }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth={0}
          minHeight="140px"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* ==================== REVENUE ==================== */}

        <Box
          gridColumn={{
            xs: "span 1",
            sm: "span 2",
            md: "span 8",
          }}
          gridRow={{
            xs: "auto",
            md: "span 2",
          }}
          backgroundColor={colors.primary[400]}
          minWidth={0}
          overflow="hidden"
        >
          <Box
            mt={{
              xs: "18px",
              sm: "20px",
              md: "25px",
            }}
            px={{
              xs: "16px",
              sm: "20px",
              md: "30px",
            }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box minWidth={0}>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "28px",
                    md: "30px",
                  },
                }}
              >
                $59,342.32
              </Typography>
            </Box>

            <IconButton>
              <DownloadOutlinedIcon
                sx={{
                  fontSize: {
                    xs: "22px",
                    sm: "26px",
                  },
                  color: colors.greenAccent[500],
                }}
              />
            </IconButton>
          </Box>

          <Box
            height={{
              xs: "240px",
              sm: "270px",
              md: "250px",
            }}
            mt={{
              xs: "0px",
              md: "-20px",
            }}
          >
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ==================== TRANSACTIONS ==================== */}

        <Box
          gridColumn={{
            xs: "span 1",
            sm: "span 2",
            md: "span 4",
          }}
          gridRow={{
            xs: "auto",
            md: "span 2",
          }}
          backgroundColor={colors.primary[400]}
          overflow="auto"
          minWidth={0}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p={{
              xs: "12px",
              sm: "15px",
            }}
          >
            <Typography
              color={colors.grey[100]}
              variant="h5"
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </Box>

          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap="10px"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p={{
                xs: "12px",
                sm: "15px",
              }}
              minWidth="400px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>

                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>

              <Box color={colors.grey[100]}>
                {transaction.date}
              </Box>

              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                whiteSpace="nowrap"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ==================== CAMPAIGN ==================== */}

        <Box
          gridColumn={{
            xs: "span 1",
            sm: "span 2",
            md: "span 4",
          }}
          gridRow={{
            xs: "auto",
            md: "span 2",
          }}
          backgroundColor={colors.primary[400]}
          p={{
            xs: "18px",
            sm: "24px",
            md: "30px",
          }}
          minWidth={0}
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt={{
              xs: "20px",
              md: "25px",
            }}
          >
            <ProgressCircle size="125" />

            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{
                mt: "15px",
                textAlign: "center",
              }}
            >
              $48,352 revenue generated
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                },
              }}
            >
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        {/* ==================== SALES ==================== */}

        <Box
          gridColumn={{
            xs: "span 1",
            sm: "span 2",
            md: "span 4",
          }}
          gridRow={{
            xs: "auto",
            md: "span 2",
          }}
          backgroundColor={colors.primary[400]}
          minWidth={0}
          overflow="hidden"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{
              padding: {
                xs: "18px 18px 0 18px",
                sm: "24px 24px 0 24px",
                md: "30px 30px 0 30px",
              },
            }}
          >
            Sales Quantity
          </Typography>

          <Box
            height={{
              xs: "240px",
              sm: "270px",
              md: "250px",
            }}
            mt="-20px"
          >
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ==================== GEOGRAPHY ==================== */}

        <Box
          gridColumn={{
            xs: "span 1",
            sm: "span 2",
            md: "span 4",
          }}
          gridRow={{
            xs: "auto",
            md: "span 2",
          }}
          backgroundColor={colors.primary[400]}
          padding={{
            xs: "18px",
            sm: "24px",
            md: "30px",
          }}
          minWidth={0}
          overflow="hidden"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{
              marginBottom: {
                xs: "10px",
                md: "15px",
              },
            }}
          >
            Geography Based Traffic
          </Typography>

          <Box
            height={{
              xs: "240px",
              sm: "260px",
              md: "200px",
            }}
          >
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;