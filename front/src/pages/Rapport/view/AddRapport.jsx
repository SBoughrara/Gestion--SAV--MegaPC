import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddRapport() {
  const [data, setData] = useState({
    contenu: "",
    ticketId: null,
  });
  const navigate = useNavigate();
  function handlechange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  function handleSubmit(e) {
    data.ticketId = parseInt(data.ticketId);
    if (data.ticketId == "" || data.contenu == "") {
      e.preventDefault();

      alert("saisir les donnee");
    } else {
      e.preventDefault();
      axios({
        method: "post",
        url: "http://localhost:3000/rapports",
        data: data,
      })
        .then(function (response) {
          console.log(response);
          navigate(-1);
        })
        .catch(function (error) {
          console.log(error);
          navigate(-1);
        });
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="pb-4">Ajouter un rapport</h2>
      <form className="border p-4 d-flex flex-column justify-content-center w-50">
        <div className="pb-4">
          <TextField
            className="w-100"
            name="contenu"
            label="contenu"
            variant="standard"
            onChange={handlechange}
            value={data.contenu}
          />
        </div>
        <div className="pb-4">
          <TextField
            name="ticketId"
            className="w-100"
            type="number"
            label="ticketId"
            variant="standard"
            onChange={handlechange}
            value={data.ticketId}
          />
        </div>
        <Button
          onClick={handleSubmit}
          style={{ backgroundColor: "#8b0000" }}
          variant="contained"
        >
          Envoyer
        </Button>
      </form>
    </div>
  );
}
