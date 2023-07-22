"use client";
import Image from "next/image";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function Home() {
  const [led, setLed] = useState("");
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    // Ambil data state awal saat halaman diakses
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setLed(data.led))
      .catch((error) => console.error("Error fetching data:", error));
  }, [update]);

  async function turnOn() {
    const res = await fetch("/api/led/HIGH");
    let x = update;
    setUpdate(!x);
  }
  async function turnOff() {
    const res = await fetch("/api/led/LOW");
    let x = update;
    setUpdate(!x);
  }
  return (
    <>
      <h1 className="text-xl">Saklar Lampu {led == "LOW" ? "OFF" : "ON"}</h1>
      <div className="relative mt-4 flex justify-center">
        <Button
          className="bg-red-500"
          onClick={() => {
            turnOff();
          }}
        >
          OFF
        </Button>
        <Button
          className="bg-green-500"
          onClick={() => {
            turnOn();
          }}
        >
          ON
        </Button>
      </div>
    </>
  );
}
