import * as React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import MenuIcon from "@material-ui/icons/Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [search, setSearch] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const doSearch = (event, value) => {
    if (value) {
      setSearch(value);
      history.push("/search/" + value);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/currently_reading"
                style={{
                  textDecoration: "none",
                  color: "black",
                  justifyContent: "center",
                }}
              >
                Currently Reading
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/want_read"
                style={{
                  textDecoration: "none",
                  color: "black",
                  justifyContent: "center",
                }}
              >
                Want to Read
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/read"
                style={{
                  textDecoration: "none",
                  color: "black",
                  justifyContent: "center",
                }}
              >
                Readed
              </Link>
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MyReads
          </Typography>
          <Search>
            <Autocomplete
              onChange={doSearch}
              value={search}
              disablePortal
              id="combo-box-demo"
              options={keyWords}
              getOptionLabel={(options) => options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const keyWords = [
  "Android",
  "Art",
  "Artificial Intelligence",
  "Astronomy",
  "Austen",
  "Baseball",
  "Basketball",
  "Bhagat",
  "Biography",
  "Brief",
  "Business",
  "Camus",
  "Cervantes",
  "Christie",
  "Classics",
  "Comics",
  "Cook",
  "Cricket",
  "Cycling",
  "Desai",
  "Design",
  "Development",
  "Digital Marketing",
  "Drama",
  "Drawing",
  "Dumas",
  "Education",
  "Everything",
  "Fantasy",
  "Film",
  "Finance",
  "First",
  "Fitness",
  "Football",
  "Future",
  "Games",
  "Gandhi",
  "Homer",
  "Horror",
  "Hugo",
  "Ibsen",
  "Journey",
  "Kafka",
  "King",
  "Lahiri",
  "Larsson",
  "Learn",
  "Literary Fiction",
  "Make",
  "Manage",
  "Marquez",
  "Money",
  "Mystery",
  "Negotiate",
  "Painting",
  "Philosophy",
  "Photography",
  "Poetry",
  "Production",
  "Programming",
  "React",
  "Redux",
  "River",
  "Robotics",
  "Rowling",
  "Satire",
  "Science Fiction",
  "Shakespeare",
  "Singh",
  "Swimming",
  "Tale",
  "Thrun",
  "Time",
  "Tolstoy",
  "Travel",
  "Ultimate",
  "Virtual Reality",
  "Web Development",
  "iOS",
];

export default Header;
