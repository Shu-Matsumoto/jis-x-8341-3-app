"use client";
import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.4</header>
      </Link>
      <GoodBadCase
        chapter="1.4.1"
        requirement="色の使用の達成基準"
        summary="赤字など、色の違いだけで、情報を伝えていない。白黒に変換しても理解できる。"
        badCaseChildren={
          <div>
            {/* 色（赤字）だけで重要性を示してしまっている例 */}
            <p style={{ color: "red" }}>
              このテキストが赤いことが重要な意味を持ちます。
            </p>
          </div>
        }
        goodCaseChildren={
          <div>
            {/* 太字やラベルなど、色以外の手段でも意味を伝えている例 */}
            <p>
              <strong>重要:</strong> このテキストには重要な意味があります。
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.4.2"
        requirement="音声の制御の達成基準"
        summary="自動再生する音声は3秒以内に収める。自動再生が3秒以上続く場合はユーザーが止められるようする。"
        badCaseChildren={
          <div>
            {/* 自動再生かつ停止手段がない例 */}
            <audio autoPlay>
              <source src="/audio/sample.mp3" type="audio/mpeg" />
            </audio>
            <p>この音声は自動再生され、止めることができません。</p>
          </div>
        }
        goodCaseChildren={
          <div>
            {/* 自動再生するが停止ボタンがある、もしくは3秒以内で停止する例 */}
            <audio id="audioSample" autoPlay>
              <source src="/audio/sample.mp3" type="audio/mpeg" />
            </audio>
            <button
              onClick={() => {
                const audio = document.getElementById(
                  "audioSample"
                ) as HTMLAudioElement | null;
                if (audio) {
                  audio.pause();
                }
              }}
            >
              音声を停止
            </button>
            <p>
              3秒以上再生する場合は、ユーザーが停止できるボタンを用意しています。
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.4.3"
        requirement="コントラスト(最低限レベル)の達成基準"
        summary="テキストのコントラスト比を4.5:1以上にする。大きなテキスト（22ポイント(29px)以上、太字かつ18ポイント(24px)以上）の場合は、コントラスト比を3:1以上にする。"
        badCaseChildren={
          <div style={{ backgroundColor: "#FFFFFF", color: "#CCCCCC" }}>
            <p>コントラスト比が低い例（薄いグレー×白）</p>
          </div>
        }
        goodCaseChildren={
          <div style={{ backgroundColor: "#FFFFFF", color: "#333333" }}>
            <p>コントラスト比が4.5:1以上の例（濃い文字色×白背景）</p>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.4.4"
        requirement="テキストのサイズ変更の達成基準"
        summary="ブラウザの機能だけを用いて文字を200%まで拡大でき、文字が重なったり画面から見切れたりしない。"
        badCaseChildren={
          <div
            style={{
              width: "200px",
              height: "50px",
              overflow: "hidden",
              border: "1px solid #000",
            }}
          >
            <p style={{ fontSize: "14px" }}>
              文字を拡大すると見切れてしまいます。
            </p>
          </div>
        }
        goodCaseChildren={
          <div style={{ border: "1px solid #000", padding: "1rem" }}>
            <p style={{ fontSize: "1rem" }}>
              文字を拡大してもレイアウトが崩れにくい例です。
            </p>
            <p>
              レスポンシブデザインや相対的な単位（em、rem）を使うことで、
              拡大時の表示崩れを抑えられます。
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.4.5"
        requirement="文字画像の達成基準"
        summary="装飾目的で、テキストを画像で作っていない。"
        badCaseChildren={
          <div>
            <img src="/images/title.png" alt="タイトル" />
            <p>文字が画像化されているため、拡大や色変更が難しい例。</p>
          </div>
        }
        goodCaseChildren={
          <div>
            <h1>タイトル</h1>
            <p>
              装飾はCSSで対応可能です。生のテキストなので拡大や色変更が容易です。
            </p>
          </div>
        }
      />
    </div>
  );
}
