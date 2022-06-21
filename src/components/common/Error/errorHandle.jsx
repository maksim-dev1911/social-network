import React, {useState} from "react";
import {Modal, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import classes from  "./errorHandle.module.css"
import errorImg from "./../../../assets/images/errorImg.png"

const ErrorHandle = ({onClose}) => {
    const [setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '10%',
        left: '91%',
        transform: 'translate(-50%, -50%)',
        width: 210,
        bgcolor: 'white',
        p: 2,
        height: 100
    };
    return (
        <div>
            <Modal
                open
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    </Typography>
                    <div>
                        <img className={classes.errorImg} src={errorImg}/>
                        <h4 className={classes.textError}>An error has occurred
                        </h4>
                    </div>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default ErrorHandle;