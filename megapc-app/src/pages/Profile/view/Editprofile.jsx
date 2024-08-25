import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";

import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import { getemployee, updateemployee } from "../../../store/empolyee";
// import { getclient, updateclient } from "../../../store/client";
export default function EditProfile() {

  const [user, setUser] = useState({});
  const [emp, setemp] = useState({
    first_name: "Jim",
    last_name: "ssssssssss",
    adresse: "789 Road, City",
    numero: "1112223333",
    photo: "photo_link",
    email: "employee1@example.com",
    role: "technicien",
});

const [data, setData] = React.useState({});
  var token = "";
  useEffect(() => {
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
              setData(response.data)
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
  

  function handleSubmit(e) {

    e.preventDefault();
    axios({
      method: "patch",
      url: `http://localhost:3000/clients/${data.id}`,
      data: data,
    })
      .then(function (response) {
        console.log(response);
        navigate("/profile");
      })
      .catch(function (error) {
        console.log(error);
        // navigate(-1);
      });

}


  function handlechange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data, "data ya brooo");
  }

  console.log(data, "this iss data");
  const [id, setId] = React.useState(3);

  const navigate = useNavigate();

  //   async function handleSubmit(e) {
  //     // console.log(values.photo);
  //     e.preventDefault();
  //     if (myInfo.isClient === false) {
  //       const args = { id: +myInfo.Employee?.id, body: data };

  //       console.log(data, "ragiiiiiiiiiiiiiiiiiiiiii subb");
  //       await dispatch(updateemployee(args)).then((res) => {
  //         if (!res.error) {
  //           navigate(-1);
  //         } else {
  //           alert("eroor");
  //         }
  //       });
  //     } else {
  //       setId(myInfo.Client?.id);

  //       const args = { id: +id, body: data };

  //       await dispatch(updateclient(args)).then((res) => {
  //         if (!res.error) {
  //           navigate(-1);
  //         } else {
  //           alert("eroor");
  //         }
  //       });
  //     }
  //   }
  return (
    <form
     onSubmit={handleSubmit}
    >
      <Box sx={{ flex: 1, width: "100%" }}>
        <Stack
          spacing={4}
          sx={{
            display: "flex",
            maxWidth: "800px",
            mx: "auto",
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 3 },
          }}
        >
          <Card>
            <Box sx={{ mb: 1 }}>
              <Typography level="title-md">Edit Profile</Typography>
            </Box>
            <Divider />
            <Stack
              direction="row"
              spacing={3}
              // sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={200}
                  sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
                >
                  <img src={data.photo} loading="lazy" alt="" />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: "background.body",
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    left: 100,
                    top: 170,
                    boxShadow: "sm",
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <FormLabel>Nom</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    <Input
                      size="sm"
                      placeholder="First name"
                      value={data.first_name}
                      name="first_name"
                      onChange={handlechange}
                    />
                  </FormControl>
                  <FormLabel>Prenom</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    <Input
                      size="sm"
                      name="last_name"
                      type="text"
                      placeholder="Last name"
                      onChange={handlechange}
                      value={data.last_name}
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <Stack spacing={1}>
                  <FormLabel>Adresse</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    <Input
                      name="adresse"
                      onChange={handlechange}
                      size="sm"
                      placeholder="adresse"
                      value={data.adresse}
                    />
                  </FormControl>
                  <FormLabel>Numero</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    <Input
                      size="sm"
                      name="numero"
                      onChange={handlechange}
                      placeholder="numero"
                      value={data.numero}
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
              </Stack>
            </Stack>

            <CardOverflow
              sx={{ borderTop: "1px solid", borderColor: "divider" }}
            >
              <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                <Button
                  onClick={navigate(-1)}
                  size="sm"
                  variant="outlined"
                  color="neutral"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  size="sm"
                  variant="solid"
                >
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </Card>
        </Stack>
      </Box>
    </form>
  );
}
