import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function Rapport() {
  const handledelete = (data) => {
    axios.delete(`http://localhost:3000/rapports/${data}`);
  };


  const [dataa, setDataa] = React.useState();
  console.log(dataa, "thisssssssssss isssssssssssss rappppppppppppppporrrrrt");
  const get = async () => {
    axios
      .get("http://localhost:3000/rapports")
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
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "sws",
      headerName: "nom et prenom",
      width: 150,
      valueGetter: (value, row) => {
        return row?.Ticket?.Client?.first_name + " " + row?.Ticket?.Client?.last_name;
        // return value.row.clients?.first_name;
      },
    },
    {
      field: "num",
      headerName: "num du ticket",
      width: 150,
      valueGetter: (value, row) => {
        return row.Ticket.num_serie;
        // return value.row.clients?.first_name;
      },
    },
    {
      field: "commentaire",
      headerName: "commentaire",
      width: 150,
      valueGetter: (value, row) => {
        return row.Ticket.commentaire;
        // return value.row.clients?.first_name;
      },
    },
    {
      field: "type",
      headerName: "type",
      width: 200,
      valueGetter: (value, row) => {
        return row.Ticket.type;
        // return value.row.clients?.first_name;
      },
    },
    {
      field: "date",
      headerName: "date",
      width: 160,
    },
    {
      field: "contenu",
      headerName: "contenu",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="h-100 w-100 d-flex justify-content-around align-items-center">
            <DeleteIcon
              onClick={() => {
                handledelete(params.id);
                console.log(params);
              }}
            />
          </div>
        );
      },
    },
  ];
  console.log(dataa);
  return (
    <div>
      <div className="d-flex justify-content-between pb-4">
        <h2 className="p-3">List des Rapports</h2>
        <Link to={"add"}>
          <Button 
          variant="contained"
          style={{ backgroundColor: "#b80000" }}>
            Ajouter un Rapport
          </Button>
        </Link>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid columns={columns} rows={dataa} />
      </div>
    </div>
  );
}

export default Rapport;
