export default function Home() {
    return (
      <div>
        <header>1.1</header>
        <div className="m-4">
          <div>
            <div>アイテム：1.1.1</div>
            <div className="ms-4">
              <div>bad case</div>
              <div>
                画像
                <img src="/example-logo.png" alt="" />
              </div>
            </div>
            <div className="ms-4">
              <div>good case</div>
              <div>
                画像
                <img src="/example-logo.png" alt="会社のロゴ: Example Corp." />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  