import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography colors={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt iste vero enim est, vel molestiae. Error minima iusto voluptatibus, quod corporis porro? Ducimus corporis adipisci provident animi! Cum, adipisci.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography colors={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt iste vero enim est, vel molestiae. Error minima iusto voluptatibus, quod corporis porro? Ducimus corporis adipisci provident animi! Cum, adipisci.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography colors={colors.greenAccent[500]} variant="h5">
                    An Important Question
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt iste vero enim est, vel molestiae. Error minima iusto voluptatibus, quod corporis porro? Ducimus corporis adipisci provident animi! Cum, adipisci.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography colors={colors.greenAccent[500]} variant="h5">
                    Your Fav Que
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt iste vero enim est, vel molestiae. Error minima iusto voluptatibus, quod corporis porro? Ducimus corporis adipisci provident animi! Cum, adipisci.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography colors={colors.greenAccent[500]} variant="h5">
                    Some Random Que
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt iste vero enim est, vel molestiae. Error minima iusto voluptatibus, quod corporis porro? Ducimus corporis adipisci provident animi! Cum, adipisci.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography colors={colors.greenAccent[500]} variant="h5">
                    Final Que
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt iste vero enim est, vel molestiae. Error minima iusto voluptatibus, quod corporis porro? Ducimus corporis adipisci provident animi! Cum, adipisci.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}

export default FAQ;
