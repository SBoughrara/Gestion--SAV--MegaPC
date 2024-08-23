import React, { useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Profile() {
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
  //   useEffect(() => {
  //     axios
  //     .get(`http://localhost:3000//employees/${user.id}`)
  //     .then(function (response) {
  //       console.log(response);
  //       setemp(response.data);
  //       console.log(
  //         emp,
  //         "hjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
  //       );
  //     })
  //     .catch(function (error) {
  //       console.log("rahouu");
  //       // navigate(-1);
  //     });
  //   }, [user.id]);

  return (
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
            <Typography level="title-md">Information Personelle</Typography>
          </Box>

          <Stack
            direction="column"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
              >
                <img
                    src={emp.photo}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </Stack>

            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack direction="row" spacing={15}>
                <FormControl>
                  <FormLabel>Nom</FormLabel>
                  <Typography size="sm">{emp.first_name} </Typography>
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Prenom</FormLabel>
                  <Typography size="sm" sx={{ flexGrow: 1 }}>
                    {emp.last_name}
                  </Typography>
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={10}>
                {/* <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Typography size="sm">{emp.role} </Typography>
                </FormControl> */}
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Typography size="sm" sx={{ flexGrow: 1 }}>
                    {emp.email}
                  </Typography>
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={8}>
                <FormControl>
                  <FormLabel>Adresse</FormLabel>
                  <Typography size="sm">{emp.adresse}</Typography>
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Numero</FormLabel>
                  <Typography size="sm" sx={{ flexGrow: 1 }}>
                  {emp.numero}
                  </Typography>
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
                >
                  <img
                    src={emp.photo}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Nom</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: "flex-column",
                      md: "flex-row",
                    },
                    gap: 2,
                  }}
                >
                  <Typography size="sm">{emp.first_name}</Typography>
                </FormControl>
                <FormLabel>Prenom</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: "flex-column",
                      md: "flex-row",
                    },
                    gap: 2,
                  }}
                >
                  <Typography size="sm">{emp.last_name}</Typography>
                </FormControl>
              </Stack>
            </Stack>
            {/* <FormControl>
              <FormLabel>Role</FormLabel>
              <Typography size="sm">{emp.role} </Typography>
            </FormControl> */}
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Typography size="sm" sx={{ flexGrow: 1 }}>
                {emp.email}
              </Typography>
            </FormControl>
            <div>
              <FormControl sx={{ display: { sm: "contents" } }}>
                <FormLabel>Adresse</FormLabel>
                <Typography size="sm">{emp.adresse}</Typography>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ display: { sm: "contents" } }}>
                <FormLabel>Numero</FormLabel>
                <Typography size="sm">{emp.numero}</Typography>
              </FormControl>
            </div>
          </Stack>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Link

                className="text-reset text-decoration-none"
                to={"/profile/editprofile"}
              >
                <MdEdit size={25} variant="solid" />
              </Link>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
}
