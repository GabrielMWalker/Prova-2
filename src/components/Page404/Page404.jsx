import React from "react";
import imagem from "../../assets/img/404.svg";
import Typography from "@mui/material/Typography";
import "../../assets/css/errorPage.css";

const Pagina404 = () => {
  return (
    <div className="container">
      <img className="page404-imagem" src={imagem} alt="" />
      <div className="page404-text">
        <Typography variant="h5" gutterBottom component="div">
          Page 404
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          This page cannot be found!
        </Typography>
      </div>
    </div>
  );
};

export default Pagina404;
