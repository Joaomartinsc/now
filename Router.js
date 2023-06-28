import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Login } from "./src/screens/Login";
import { Cadastro } from "./src/screens/cadastro";
import { Interesses } from "./src/screens/interesses";
import { Home } from "./src/screens/Home";
import { Cadastrod } from "./src/screens/cadastrod";
import { Perfil } from "./src/screens/perfil";
import { Perfilamigo } from "./src/screens/perfilamigo";
import { Perfilamigo2 } from "./src/screens/perfilamigo2";
import { Perfilamigo3 } from "./src/screens/perfilamigo3";
import { Perfilamigo4 } from "./src/screens/perfilamigo4";
import { Contatos } from "./src/screens/contatos";

export const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route index path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/cadastrod" element={<Cadastrod />}></Route>
        <Route path="/interesses" element={<Interesses/>}></Route>
        <Route path="/perfil" element={<Perfil/>}></Route>
        <Route path="/perfilamigo" element={<Perfilamigo/>}></Route>
        <Route path="/perfilamigo2" element={<Perfilamigo2/>}></Route>
        <Route path="/perfilamigo3" element={<Perfilamigo3/>}></Route>
        <Route path="/perfilamigo4" element={<Perfilamigo4/>}></Route>
        <Route path="/contatos" element={<Contatos/>}></Route>
      </Routes>
    </NativeRouter>
  )};
