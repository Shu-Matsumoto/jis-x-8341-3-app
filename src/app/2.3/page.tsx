import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="2.3.1"
        requirement="3 回のせん(閃)光，又はしきい(閾)値以下の達成基準"
        summary="画面の4分の1以上の面積で1秒に3回以上点滅させない。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
