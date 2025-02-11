import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="2.2.1"
        requirement="タイミング調整可能の達成基準"
        summary="キーボード操作やコンテンツの利用時に制限時間を設けるときは、解除するか10倍以上に延長できるようにする。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="2.2.2"
        requirement="一時停止，停止及び非表示の達成基準"
        summary="自動再生するコンテンツは5秒以内に止まるかユーザーが止められるようになっている。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
