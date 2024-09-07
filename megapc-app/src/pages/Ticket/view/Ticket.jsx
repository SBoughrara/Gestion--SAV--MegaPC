import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function Ticket() {

  const columns = [
    { field: "id", headerName: "ID", width: 50 },

    {
      field: "modele",
      headerName: "Modele",
      width: 150,
      
    },
    {
      field: "num_serie",
      headerName: "Numero de serie",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      valueGetter: (value, row) => {
        let result = row.date.slice(0, 10);
        return result ;
      },
    },
    {
      field: "garantie",
      headerName: "Garantie",
      width: 160,
    },
    {
      field: "statut",
      headerName: "Statut",
      width: 160,
    },
    {
      field: "type",
      headerName: "Type",
      width: 160,
    },
    {
      field: "commentaire",
      headerName: "Commentaire",
      width: 160,
    },
    {
      field: "clientId",
      headerName: "nom client",
      width: 160,
      valueGetter: (value, row) => {
        return(row?.Client?.first_name+" "+row?.Client?.last_name);
        // return value.row.clients?.first_name;
      }
    },
  ];
  const [dataa, setDataa] = React.useState();

  const get = async () => {
    axios
      .get("http://localhost:3000/tickets")
      .then((response) => {
        setDataa(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between pb-4">
        <h2 className="p-3">List des Tickets</h2>
        <Link to={"add"}>
          <Button style={{backgroundColor:"#B80000"}} variant="contained">Ajouter un Ticket</Button>
        </Link>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
         columns={columns} 
         rows={dataa}
        />
      </div>
    </div>
  );
}

export default Ticket;
