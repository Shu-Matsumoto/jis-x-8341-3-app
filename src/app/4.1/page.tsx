import GoodBadCase from "../GoodBadCase";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">
        <header className="mb-4">1.2</header>
      </Link>
      <GoodBadCase
        chapter="4.1.1"
        requirement="構文解析の達成基準"
        summary="HTMLの文法に沿ったマークアップを行う。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
      <GoodBadCase
        chapter="4.1.2"
        requirement="名前(name)，役割(role)及び値(value)の達成基準"
        summary="HTMLで表現できるUIは独自に作らない。カルーセルやタブなどHTMLにないUIを作るときはWAI-ARIAを使って作る。"
        badCaseChildren={<div>bad case</div>}
        goodCaseChildren={<div>good case</div>}
      />
    </div>
  );
}
