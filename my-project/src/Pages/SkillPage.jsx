import { Box, Card } from "@mui/material";
import React from "react";
import C from "../assets/C.png";
import cpp from "../assets/cpp.jpeg";
import js from "../assets/JS.png";
import nodejs from "../assets/node js.png";
import expressjs from "../assets/expressjs.png";
import html from "../assets/HTML.webp";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.avif";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/SQL.jpg";
import mongdb from "../assets/mongodb.png";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import github from "../assets/github.png";
// eslint-disable-next-line

function SkillPage() {
  return (
    <Card sx={{marginTop : '30px', paddingBottom : '50px'}}>
      <p className="text-6xl text-mainColor">Skill</p>
      <div className="mt-10 mx-24 md : flex flex-wrap  gap-4 justify-evenly items-center">
        <section class="mx-auto w-fit">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={C} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                C <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={cpp} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                C++ <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={js} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                JavaScript <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={nodejs} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                Node JS <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={expressjs} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                Express JS <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={html} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                HTML <br/> 95%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={css} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                CSS <br/> 80%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={bootstrap} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                Bootstrap <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={tailwind} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                Tailwind <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={mysql} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                My Sql <br/> 85%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={mongdb} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                Mongo DB <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={react} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                React <br/> 92%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={next} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                Next <br/> 92%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={github} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                Git Hub <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        {/* <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={trelo} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                Trello <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section>
        <section class="mx-auto w-fit ">
        <div class="w-36 h-36 group">
            <div class="relative rounded-md overflow-hidden">
            <img class="h-36 w-36 object-cover" src={jira} alt="" />
            <div class="absolute h-full w-full  bg-zinc-200 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button class=" text-black text-3xl py-2 px-5 rounded-md">
                Jira <br/> 90%
                </button>
            </div>
            </div>
        </div>
        </section> */}

      </div>
    </Card>
  );
}

export default SkillPage;
