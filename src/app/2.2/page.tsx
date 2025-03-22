"use client";
import GoodBadCase from "../GoodBadCase";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/**
 * 2.2.2 の良い例:
 *  - 動画を自動再生するが、5秒後に停止させる
 *  - 停止ボタンを提供してユーザーが任意に止められる
 */
function VideoAutoStop() {
  const videoRef = useRef(null);
  const [hasStopped, setHasStopped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      stopVideo();
    }, 5000); // 5秒後に停止
    return () => clearTimeout(timer);
  }, []);

  const stopVideo = () => {
    if (videoRef.current && !hasStopped) {
      videoRef.current.pause();
      setHasStopped(true);
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        width="300"
        style={{ border: "1px solid #ccc" }}
      >
        <source src="/videos/auto_play_sample.mp4" type="video/mp4" />
      </video>
      <div>
        {!hasStopped && <button onClick={stopVideo}>停止</button>}
        {hasStopped && <p>動画は停止しました</p>}
      </div>
    </div>
  );
}

export default function Home() {
  const [countdownBad, setCountdownBad] = useState(10);
  const [countdownGood, setCountdownGood] = useState(10);
  const intervalRefBad = useRef<ReturnType<typeof setInterval> | null>(null);
  const intervalRefGood = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    // badCase: 延長も停止もできない
    if (countdownBad > 0 && !intervalRefBad.current) {
      intervalRefBad.current = setInterval(() => {
        setCountdownBad((prev) => prev - 1);
      }, 1000);
    }
    if (countdownBad <= 0 && intervalRefBad.current) {
      clearInterval(intervalRefBad.current);
      intervalRefBad.current = null;
    }
    return () => {
      if (intervalRefBad.current) {
        clearInterval(intervalRefBad.current);
      }
    };
  }, [countdownBad]);

  useEffect(() => {
    // goodCase: 延長や停止が可能
    if (countdownGood > 0 && !intervalRefGood.current) {
      intervalRefGood.current = setInterval(() => {
        setCountdownGood((prev) => prev - 1);
      }, 1000);
    }
    if (countdownGood <= 0 && intervalRefGood.current) {
      clearInterval(intervalRefGood.current);
      intervalRefGood.current = null;
    }
    return () => {
      if (intervalRefGood.current) {
        clearInterval(intervalRefGood.current);
      }
    };
  }, [countdownGood]);
  return (
    <div>
      <Link href="/">
        <header className="mb-4">2.2</header>
      </Link>
      <GoodBadCase
        chapter="2.2.1"
        requirement="タイミング調整可能の達成基準"
        summary="キーボード操作やコンテンツの利用時に制限時間を設けるときは、解除するか10倍以上に延長できるようにする。"
        badCaseChildren={
          <div>
            <p>制限時間: {countdownBad} 秒</p>
            <p>
              延長・停止ができません。時間切れで自動的にセッションが切れます。
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>制限時間: {countdownGood} 秒</p>
            <button onClick={() => setCountdownGood(countdownGood + 30)}>
              時間延長
            </button>
            <button onClick={() => setCountdownGood(999)}>
              時間制限を解除
            </button>
            <p>ユーザーが自由に延長・解除できます。</p>
          </div>
        }
      />
      <GoodBadCase
        chapter="2.2.2"
        requirement="一時停止，停止及び非表示の達成基準"
        summary="自動再生するコンテンツは5秒以内に止まるかユーザーが止められるようになっている。"
        badCaseChildren={
          <div>
            {/* 自動再生が止められない */}
            <video autoPlay muted loop width="300">
              <source src="/videos/auto_play_sample.mp4" type="video/mp4" />
            </video>
            <p>5秒経っても止まらず、ユーザーが停止できる手段もありません。</p>
          </div>
        }
        goodCaseChildren={
          <div>
            {/* 5秒後に自動停止する or 停止ボタンを提供 */}
            <VideoAutoStop />
          </div>
        }
      />
    </div>
  );
}
