"use client";
import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Popup from "./Popup";
import Table from "./Table";

export default function Home() {
    
    return (
        <div>
            <Header />
            <NavBar header={"Invoice"}/>
            <Table />


        </div>
    )

}