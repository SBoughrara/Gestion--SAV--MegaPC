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
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function Dashboard() {
  const handledelete = (data) => {
    axios.delete(`http://localhost:3000/clients/${data}`);
    window.location.reload();

  };

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
    },
    {
      field: "garantie",
      headerName: "Garantie",
      width: 160,
    },
    {
      field: "statut",
      headerName: "etat",
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
      field: "status",
      headerName: "status",
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
              }}
            />
          </div>
        );
      },
    },
  ];
  const [dataa, setDataa] = React.useState({
    id: 0,
    modele: "",
    num_serie: "",
    date: "",
    garantie: "",
    statut: "",
    type: "",
    commentaire: "",
    clientId: 0,
    status:"",
  });
  const [final, setFinal] = useState();

  const get = async () => {
    await axios
      .get("http://localhost:3000/tickets")
      .then((response) => {
        setDataa(response.data);
        
        const aa = dataa?.filter((e) => e?.clientId === emp.id);
        console.log(response.data, "kskkkkkkkkkkkkkkk");
        setFinal(aa);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [emp, setemp] = useState({  });
  React.useEffect(() => {
    get();
  }, [emp]);
  const [user, setUser] = React.useState({});
  var token = "";
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
      axios
        .get("http://localhost:3000/auth/me", {
          headers: { Authorization: "Bearer " + token },
        })
        .then(function (response) {
          console.log(response.data, "resss");
          setUser(response.data);
          console.log(user, "thisssssssssssssssss ");
          axios
            .get(`http://localhost:3000/clients/${response.data.id}`)
            .then(function (response) {
              console.log(response);
              setemp(response.data);
              console.log(
                emp,
                "hjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
              );
            })
            .catch(function (error) {
              console.log("rahouu");
              // navigate(-1);
            });
        })
        .catch(function (error) {
          console.log("rahouu");
          // navigate(-1);
        });
    }
  }, []);

  // console.log(final,".filter(item => item.type === 'fruit');.filter(item => item.type === 'fruit');.filter(item => item.type === 'fruit');.filter(item => item.type === 'fruit');");

  return (
    <div>
      <h1 className="p-3">Bonjour {emp?.first_name}</h1>
      <div className="d-flex justify-content-between pb-4">
        <h3 className="p-3">List des Tickets</h3>
        <Link to={"add"}>
          <Button style={{ backgroundColor: "#B80000" }} variant="contained">
            Ajouter un Ticket
          </Button>
        </Link>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid columns={columns} rows={final} />
      </div>
    </div>
  );
}

export default Dashboard;
