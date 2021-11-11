import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Fade,
  MenuItem,
  Menu,
  Button,
} from "@mui/material";
import "../../assets/css/book.css";
import { updateBook } from "../../api/api";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Book({ livro, refresh }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterShelfs, setFilterShelfs] = useState([]);
  const open = Boolean(anchorEl);
  const currentlyShelf = livro.shelf;
  const otherShelfs = [
    { label: "Currently Reading", value: "currentlyReading" },
    { label: "Want To Read", value: "wantToRead" },
    { label: "Readed", value: "read" },
  ];

  const optionController = () => {
    setFilterShelfs(otherShelfs.filter((item) => item.value != currentlyShelf));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    optionController();
  }, [livro]);

  const handleClose = (shelf) => {
    setAnchorEl(null);
    if (typeof shelf != "object") {
      updateBook(livro, shelf).then(function (data) {
        const estouLendoIDs = data.currentlyReading;
        const queroLerIDs = data.wantToRead;
        const lidosIDs = data.read;
        refresh();
      });
    }
  };

  return (
    <Grid item style={{ textAlign: "center" }}>
      <CardContent className="caixa">
        {livro.imageLinks ? (
          <img
            className="image"
            src={livro.imageLinks.smallThumbnail}
            alt={livro.title}
          />
        ) : (
          <img
            className="image"
            src="https://www.gadgetswhy.com/wp-content/themes/gadgetswhy/images/placeholder.png"
            alt={livro.title}
          />
        )}

        <div className="description">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {livro.title}
          </Typography>
          <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
            {livro.authors ? livro.authors.join(", ") : "No author found"}
          </Typography>
        </div>
      </CardContent>
      <div className="moveTo">
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Move To
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {filterShelfs.map((shelf) => (
            <MenuItem onClick={() => handleClose(shelf.value)}>
              {shelf.label}
            </MenuItem>
          ))}
          {livro.shelf && (
            <MenuItem onClick={() => handleClose("remove")}>Remove</MenuItem>
          )}
        </Menu>
      </div>
    </Grid>
  );
}

export default Book;
