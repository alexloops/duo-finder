import express from "express";
import { PrismaClient } from "@prisma/client";
import {
  convertHourStringToMinutes,
  convertMinutesToHourString,
} from "./utils/convertion";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  return res.status(200).send("Healthy!");
});

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.status(200).json(games);
});

app.get("/games/:id/ads", async (req, res) => {
  const gameId = req.params.id;
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursStart: true,
      hourEnd: true,
    },
    where: {
      gameId: gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hoursStart: convertMinutesToHourString(ad.hoursStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
      };
    })
  );
});

app.post("/games/:id/ads", async (req, res) => {
  const gameId: string = req.params.id;

  const ad = await prisma.ad.create({
    data: {
      gameId: gameId,
      name: req.body.name,
      yearsPlaying: req.body.yearsPlaying,
      discord: req.body.discord,
      weekDays: req.body.weekDays,
      hoursStart: convertHourStringToMinutes(req.body.hoursStart),
      hourEnd: convertHourStringToMinutes(req.body.hourEnd),
      useVoiceChannel: req.body.useVoiceChannel,
    },
  });

  return res.status(201).json(ad);
});

app.get("/ads/:id/discord", async (req, res) => {
  const adId = req.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json(ad);
});

app.listen(3333);
