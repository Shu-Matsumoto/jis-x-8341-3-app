import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="1.3.1"
        requirement="情報及び関係性の達成基準"
        summary="ページの情報が適切にHTMLで構造化されている。色、形、配置に依存した情報が、読み上げた場合にもきちんと伝わるようになっている。"
        badCaseChildren={
          <div>
            <p className="text-red-600">この情報は重要です！</p>
          </div>
        }
        goodCaseChildren={
          <div>
            <p>
              <strong>重要:</strong> この情報は必ず確認してください。
            </p>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.3.2"
        requirement="意味のある順序の達成基準"
        summary="コンテンツが意味の通る順序で並べられている。見た目の読み順とHTMLの記述順が一致している。"
        badCaseChildren={
          <div>
            <div className="container">
              <div>② 詳細情報</div>
              <div>① タイトル</div>
            </div>
          </div>
        }
        goodCaseChildren={
          <div>
            <div className="container">
              <div>① タイトル</div>
              <div>② 詳細情報</div>
            </div>
          </div>
        }
      />
      <GoodBadCase
        chapter="1.3.3"
        requirement="感覚的な特徴の達成基準"
        summary="「右の写真」「丸いボタン」など位置関係や形に依存した表現をしない。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
