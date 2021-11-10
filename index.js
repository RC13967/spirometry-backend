import express from "express";
const app = express();
app.use(express.json());
import cors from "cors";
app.use(cors());
import fs from "fs";
const PORT = process.env.PORT;
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n')
   .map((element)=>element.trim());
let sub1 = readFileLines('subj1.txt');
let sub2 = readFileLines('subj2.txt');
let sub3 = readFileLines('subj3.txt');
app.get("/getData", (request, response) => {
    response.send({sub1:sub1,sub2:sub2,sub3:sub3})
});
app.listen(PORT, () => console.log("The server is started"));