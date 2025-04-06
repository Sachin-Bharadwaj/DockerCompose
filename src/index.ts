import express from "express";
import { PrismaClient } from "@prisma/client"

const app = express();
const prismaclient = new PrismaClient();

app.get("/", async(req, res) => {
    const data = await prismaclient.user.findMany();
    res.json({
        message: data
    })
})

app.post("/", async(req, res) => {
    const username = Math.random().toString();
    const password = Math.random().toString();
    const user = await prismaclient.user.create({
        data:{
            username: username,
            password: password
        }
    })
    res.json({
        message: "post endpoint"
    })
})

app.listen(3000)