// pages/index.js
"use client";
import Head from "next/head";
import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Calculator</title>
        <meta
          name="description"
          content="Simple calculator built with Next.js"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <h1>Simple Calculator</h1>
        <Calculator />
      </main>
    </div>
  );
}
