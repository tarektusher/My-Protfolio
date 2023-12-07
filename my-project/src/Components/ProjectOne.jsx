import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import project1 from "../assets/project1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ProjectOne() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    AOS.init({duration:1000});
  }, [])
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <div  className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={project1}
            alt="BDFlix Image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">BDFlix</div>
          </div>
        </div>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Summary of The Project 
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Bd Flix is a landing page for rendering movies using open API . This
            is my first task for the VIVASOFT LEARNATHON 2.0. This project
            involves rendering moives, searching, sorting, and doing CRUD
            operations.In this project using Context API and lazy loading also.
          </Typography>
          <Typography>
          <div className="pt-4 pb-2 ">
            <span className="inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              React JS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Tailwind
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Matrial UI
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Open API
            </span>
          </div>
          </Typography>
        </DialogContent>
        <Button variant="contained" href="https://github.com/tarektusher/BDFlix-Movie-Server" target="_blank"
         sx={{textAlign : 'center',fontWeight : 'bold', margin : '10px',width : 'auto'}}>Github Link</Button>
      </BootstrapDialog>
    </React.Fragment>
  );
}
