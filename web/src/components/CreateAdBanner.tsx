import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import Input from "./Form/Input";
import { Check, GameController, MagnifyingGlassPlus } from "phosphor-react";
import WeekDaySelect from "./Form/WeekDaySelect";
import type { Game } from "../App";
import { FormEvent, useState } from "react";
import axios from "axios";

export default function CreateAdBanner({ games }: { games: Game[] }) {
  const [weekDays, setWeekDays] = useState<string[]>(["6"]);
  const [voiceChatChecked, setVoiceChatChecked] = useState(true);

  const handleCreateAd = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hoursStart: data.hoursStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: voiceChatChecked,
      });
      alert("Criado com sucesso");
    } catch (e) {
      console.log(e);
      alert("Erro ao criar anúncio");
    }
  };

  return (
    <Dialog.Root>
      <div className="pt-1 mt-8 rounded-lg bg-gradient-to-r self-stretch from-[#9572FC] via-[#43E7AD] to-[#E2D45C]">
        <div className="flex justify-between items-center bg-[#2A2634] px-8 py-6 rounded-lg">
          <div>
            <strong className="text-2xl text-white font-black block">
              Couldn't find a duo?
            </strong>
            <span className="block text-zinc-400 mt-1">
              Create your own ad to find new gaming partners.
            </span>
          </div>
          <Dialog.Trigger>
            <button className="flex items-center gap-3 py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded">
              <MagnifyingGlassPlus size={22} />
              Create ad
            </button>
          </Dialog.Trigger>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#2A2634] text-white py-8 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-full max-w-[480px] shadow-lg shadow-black/40">
          <Dialog.Title className="text-3xl font-black">
            {" "}
            Create a new ad{" "}
          </Dialog.Title>

          <form className="mt-8 flex flex-col gap-4" onSubmit={handleCreateAd}>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="game">
                What game do you want to play?
              </label>
              <select
                id="game"
                name="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                defaultValue=""
                required
              >
                <option disabled value="">
                  Click to select the game you want to play
                </option>
                {games.map((game) => {
                  return (
                    <option key={game.id} value={game.id}>
                      {game.title}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name"> Your gamer tag</label>
              <Input
                id="name"
                name="name"
                placeholder="How are you called in-game?"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">
                  How long have you been playing?
                </label>
                <Input
                  type="number"
                  id="yearsPlaying"
                  name="yearsPlaying"
                  placeholder="It's ok to answer 0."
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">What is your Discord handle?</label>
                <Input
                  type="text"
                  id="discord"
                  name="discord"
                  placeholder="User#1234"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="whitespace-nowrap " htmlFor="weekDays">
                  When do you usually play?
                </label>
                <WeekDaySelect
                  weekDays={weekDays}
                  setWeekDays={(days: string[]) => setWeekDays(days)}
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hoursStart">At what time do you play?</label>
                <div className="flex gap-1">
                  <Input
                    type="time"
                    id="hoursStart"
                    name="hoursStart"
                    placeholder="From"
                    required
                  />
                  <Input
                    type="time"
                    id="hourEnd"
                    name="hourEnd"
                    placeholder="To"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <Checkbox.Root
                onCheckedChange={(checked) => {
                  if (checked === true || checked === false)
                    setVoiceChatChecked(checked);
                }}
                checked={voiceChatChecked}
                className="w-6 h-6 rounded bg-zinc-900"
              >
                <Checkbox.Indicator className="flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label>I usually connect on voice chat</label>
            </div>
            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close>
                <button className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold">
                  Cancel
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className="bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3"
              >
                <GameController className="w-6 h-6" /> Find me a duo!
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
