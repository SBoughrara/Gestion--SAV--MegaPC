import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function AddClient() {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    photo: "defalut",
    adresse: "",
    numero: "",
  });
  function handlechange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  }
  function handleSubmit(e) {
    if (
      data.first_name == "" ||
      data.last_name == "" ||
      data.email == "" ||
      data.adresse == "" ||
      data.numero == ""
    ) {
      alert("saisir les donnee");
    } else {
      e.preventDefault();
      axios({method:"post",  url: "http://localhost:3000/clients",data:data})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="pb-4">Ajouter un Client</h2>
      <form className="border p-4 d-flex flex-column justify-content-center w-50">
        <div className="pb-4">
          <TextField
            className="w-100"
            name="first_name"
            label="first name"
            variant="standard"
            onChange={handlechange}
            value={data.first_name}
          />
        </div>
        <div className="pb-4">
          <TextField
            name="last_name"
            className="w-100"
            label="last name"
            variant="standard"
            onChange={handlechange}
            value={data.last_name}
          />
        </div>
        <div className="pb-4">
          <TextField
            name="email"
            className="w-100"
            label="email"
            variant="standard"
            onChange={handlechange}
            value={data.email}
          />
        </div>
        <div className="pb-4">
          <TextField
            name="adresse"
            className="w-100"
            label="Adresse"
            variant="standard"
            onChange={handlechange}
            value={data.adresse}
          />
        </div>
        <div className="pb-4">
          <TextField
            name="numero"
            className="w-100"
            label="Numero"
            variant="standard"
            onChange={handlechange}
            value={data.numero}
          />
        </div>
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
        >
          Envoyer
        </Button>
      </form>
    </div>
  );
}
