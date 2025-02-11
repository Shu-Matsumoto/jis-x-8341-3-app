import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="2.1.1"
        requirement="キーボードの達成基準"
        summary="キーボード操作だけで、ウェブページやウェブサービスを利用することができる。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="2.1.2"
        requirement="キーボードトラップなしの達成基準"
        summary="一度フォーカスしたら抜け出せないコンテンツを作らない。モーダルダイアログや動画プレーヤーで起きやすい。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
