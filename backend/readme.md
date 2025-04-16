init typescript project 
npm init -y 
npx tsc --init 

change rootDir and outDir
"rootDir": "./src",
"outDir":"./dist"

install dependencies for express
npm i express

you will face the following issue 
import express from "express";
could not find declaration file for module 'express'

npm install @types/express# SecondBrain

import mongoose from mongoose

npm install jsonwebtoken
npm install @types/jsonwebtoken


How to initialize a react project for typeScript
npx  create vite@latest