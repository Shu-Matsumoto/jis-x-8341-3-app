"use client";
import GoodBadCase from "../GoodBadCase";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [flashVisible, setFlashVisible] = useState(true);
  useEffect(() => {
    // 悪い例として、1秒に3回以上点滅する
    const flashInterval = setInterval(() => {
      setFlashVisible((prev) => !prev);
    }, 200); // 0.2秒間隔 -> 1秒間に約5回点滅
    return () => clearInterval(flashInterval);
  }, []);
  return (
    <div>
      <Link href="/">
        <header className="mb-4">2.3</header>
      </Link>
      <GoodBadCase
        chapter="2.3.1"
        requirement="3 回のせん(閃)光，又はしきい(閾)値以下の達成基準"
        summary="画面の4分の1以上の面積で1秒に3回以上点滅させない。"
        badCaseChildren={
          <div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: flashVisible ? "red" : "yellow",
              }}
            />
            <p>1秒に3回以上点滅する領域があります。</p>
          </div>
        }
        goodCaseChildren={
          <div>
            <div
              style={{
                width: "200px",
                height: "100px",
                backgroundColor: "green",
              }}
            />
            <p>点滅しない、または点滅回数を3回以下に抑えています。</p>
          </div>
        }
      />
    </div>
  );
}
