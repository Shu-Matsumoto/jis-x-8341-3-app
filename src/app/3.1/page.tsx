import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="3.1.1"
        requirement="ページの言語の達成基準"
        summary="ページの言語が、明示的に指定されている（HTMLのlang属性で言語が指定されている）。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="3.1.2"
        requirement="一部分の言語の達成基準"
        summary="一部分に用いられている他の言語が、どんな言語なのかブラウザが理解できる（lang属性で言語が指定されている）。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
