import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import Input from "./Form/Input";

export default function CreateAdBanner() {
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

          <form className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="game">
                What game do you want to play?
              </label>
              <Input id="game" placeholder="Select the game you want to play" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name"> Your gamer tag</label>
              <Input id="name" placeholder="How are you called in-game?" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">
                  How long have you been playing?
                </label>
                <Input
                  type="number"
                  id="yearsPlaying"
                  placeholder="It's ok to answer 0."
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">What is your Discord handle?</label>
                <Input type="text" id="discord" placeholder="User#1234" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label className="whitespace-nowrap " htmlFor="weekDays">
                  When do you usually play?
                </label>
                <div className="flex gap-1 text-xs">
                  <button
                    className="w-6 h-6 rounded bg-zinc-900"
                    title="Monday"
                  >
                    M
                  </button>
                  <button
                    className="w-6 h-6 rounded bg-zinc-900"
                    title="Tuesday"
                  >
                    T
                  </button>
                  <button
                    className="w-6 h-6 rounded bg-zinc-900"
                    title="Wednesday"
                  >
                    W
                  </button>
                  <button
                    className="w-6 h-6 rounded bg-zinc-900"
                    title="Thursday"
                  >
                    T
                  </button>
                  <button
                    className="w-6 h-6 rounded bg-zinc-900"
                    title="Friday"
                  >
                    F
                  </button>
                  <button
                    className="w-6 h-6 rounded bg-zinc-900"
                    title="Saturday"
                  >
                    S
                  </button>
                  <button
                    className="w-6 h-6 rounded bg-zinc-900"
                    title="Sunday"
                  >
                    S
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hoursStart">At what time do you play?</label>
                <div className="flex gap-1">
                  <Input type="time" id="hoursStart" placeholder="From" />
                  <Input type="time" id="hourEnd" placeholder="To" />
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 text-sm">
              <input type="checkbox" />
              <label>I usually connect on voice chat</label>
            </div>
            <Dialog.Close>
              <footer className="mt-4 flex justify-end gap-4">
                <button className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold">
                  Cancel
                </button>
                <button className="bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3">
                  <GameController className="w-6 h-6" /> Find me a duo!
                </button>
              </footer>
            </Dialog.Close>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
