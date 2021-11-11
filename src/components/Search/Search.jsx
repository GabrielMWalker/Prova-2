import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { searchBooks } from "../../api/api";
import Book from "../Book";
import { Breadcrumbs, Link, Typography, Grid } from "@mui/material";

function Search() {
  const [livros, setLivros] = useState([]);
  const [marcador, setMarcador] = useState("");
  const [refresh, setRefresh] = useState(false);
  const { value } = useParams();
  useEffect(() => {
    setMarcador("Search");
    searchBooks(value).then(function (data) {
      const books = data.books;
      setLivros(books);
    });
    setRefresh(false);
  }, [value, refresh]);
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

export default Search;

// > Pesquisa e retorna todos os livros de um determinado assunto, que podem ou não estar nos meus livros.
// > O termo pesquisado deve ser um dos listados nas [palavras-chave](./PALAVRAS_CHAVE.md), outros termos podem não funcionar.

// searchBooks(PALAVRA_CHAVE).then(function(data) {
//   const books = data.books

//   // ...
// })
