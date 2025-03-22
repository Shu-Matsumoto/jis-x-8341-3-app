"use client";
import GoodBadCase from "../GoodBadCase";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showModalBad, setShowModalBad] = useState(false);
  const [showModalGood, setShowModalGood] = useState(false);
  return (
    <div>
      <Link href="/">
        <header className="mb-4">2.1</header>
      </Link>
      <GoodBadCase
        chapter="2.1.1"
        requirement="キーボードの達成基準"
        summary="キーボード操作だけで、ウェブページやウェブサービスを利用することができる。"
        badCaseChildren={
          <div>
            {/* divにonClickのみ、キーボード操作不可 */}
            <div
              style={{
                backgroundColor: "#ccc",
                width: "150px",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => alert("Clicked!")}
            >
              キーボード操作ができないボタン
            </div>
            <p>
              div要素にonClickだけ。EnterキーやSpaceキーでは操作できません。
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            {/* buttonタグを使用し、キーボード操作が可能 */}
            <button
              style={{
                backgroundColor: "#ccc",
                width: "150px",
                padding: "10px",
              }}
              onClick={() => alert("Button clicked!")}
            >
              キーボード操作可能なボタン
            </button>
            <p>button要素を使い、キーボードでも操作できます。</p>
          </div>
        }
      />
      <GoodBadCase
        chapter="2.1.2"
        requirement="キーボードトラップなしの達成基準"
        summary="一度フォーカスしたら抜け出せないコンテンツを作らない。モーダルダイアログや動画プレーヤーで起きやすい。"
        badCaseChildren={
          <div>
            <button onClick={() => setShowModalBad(true)}>
              モーダルを開く(悪い例)
            </button>
            {showModalBad && (
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.6)",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    width: "300px",
                    margin: "100px auto",
                    padding: "20px",
                  }}
                >
                  <h2>キーボードトラップ(悪い例)</h2>
                  <p>
                    Tabキーを押してもこの要素内を無限にループしてしまい、外に出られません。
                  </p>
                  {/* 閉じる手段も無く、focus制御もされていない */}
                </div>
              </div>
            )}
          </div>
        }
        goodCaseChildren={
          <div>
            <button onClick={() => setShowModalGood(true)}>
              モーダルを開く(良い例)
            </button>
            {showModalGood && (
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.6)",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                role="dialog"
                aria-modal="true"
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    width: "300px",
                    margin: "100px auto",
                    padding: "20px",
                  }}
                >
                  <h2>モーダル(良い例)</h2>
                  <p>
                    Tabキー操作でモーダル内の要素を移動し、ESCキーで閉じられます。
                  </p>
                  <button onClick={() => setShowModalGood(false)}>
                    閉じる
                  </button>
                </div>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
}
