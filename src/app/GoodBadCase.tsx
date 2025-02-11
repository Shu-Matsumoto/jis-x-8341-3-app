import React, { FC } from "react";

type GoodBadCaseProps = {
  chapter: string;
  requirement: string;
  summary: string;
  badCaseChildren: React.ReactNode;
  goodCaseChildren: React.ReactNode;
};

const GoodBadCase: FC<GoodBadCaseProps> = (props) => {
  return (
    <div className="m-4">
      <div className="text-xl font-bold">{`アイテム:${props.chapter}`}</div>
      <div>{`要件:${props.requirement}`}</div>
      <div>{`概要:${props.summary}`}</div>
      <div className="ms-4">
        <div className="text-xl font-bold">bad case</div>
        <div className="mt-4">{props.badCaseChildren}</div>
      </div>
      <div className="ms-4 mt-4">
        <div className="text-xl font-bold">good case</div>
        <div className="mt-4">{props.goodCaseChildren}</div>
      </div>
    </div>
  );
};
export default GoodBadCase;
