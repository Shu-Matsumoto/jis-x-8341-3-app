import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.1</header>
      </Link>
      <GoodBadCase
        chapter="1.1.1"
        requirement="非テキストコンテンツの達成基準"
        summary="ロゴ・イラスト・写真など画像に、その画像が指し示している情報が代替テキストとして記載されている。"
        badCaseChildren={
          <div>
            画像
            <img src="/example-logo.png" alt="" />
          </div>
        }
        goodCaseChildren={
          <div>
            画像
            <img src="/example-logo.png" alt="会社のロゴ: Example Corp." />
          </div>
        }
      />
    </div>
  );
}
