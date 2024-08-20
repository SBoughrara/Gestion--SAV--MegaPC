import React from 'react'
import { Button, TextField } from "@mui/material";

export default function AddFacture() {
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
        />
      </div>
      <div className="pb-4">
        <TextField
          name="last_name"
          className="w-100"
          label="last name"
          variant="standard"
        />
      </div>
      <div className="pb-4">
        <TextField
          name="email"
          className="w-100"
          label="email"
          variant="standard"
        />
      </div>
      <div className="pb-4">
        <TextField
          name="adresse"
          className="w-100"
          label="Adresse"
          variant="standard"
        />
      </div>
      <div className="pb-4">
        <TextField
          name="numero"
          className="w-100"
          label="Numero"
          variant="standard"
        />
      </div>
      <Button  variant="contained">Contained</Button>

    </form>
  </div>
  )
}
