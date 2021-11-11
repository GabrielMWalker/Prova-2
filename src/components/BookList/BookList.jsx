import React, { useState, useEffect } from "react";
import { getMyBooks } from "../../api/api";
import Book from "../Book";
import { Breadcrumbs, Link, Typography, Grid } from "@mui/material";

function BookList({ type }) {
  const [livros, setLivros] = useState([]);
  const [marcador, setMarcador] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (type === "currentlyReading") {
      setMarcador("Currently-Reading");
    } else if (type === "wantToRead") {
      setMarcador("Want-Read");
    } else if (type === "read") {
      setMarcador("Readed");
    }
    getMyBooks().then((res) => {
      if (type) {
        let filtro;
        filtro = res.books.filter((book) => book.shelf === type);
        setLivros(filtro);
      } else {
        setLivros(res.books);
      }
      setRefresh(false);
    });
  }, [type, refresh]);

  function mudaEstande() {
    setRefresh(true);
  }
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">{marcador}</Typography>;
      </Breadcrumbs>
      <Grid
        spacing={2}
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {livros.map((livro) => (
          <Book livro={livro} refresh={mudaEstande} key={livro.id} />
        ))}
      </Grid>
    </div>
  );
}

export default BookList;
