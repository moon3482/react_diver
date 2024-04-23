import { memo, useState } from "react";

const IssueScript = memo(({ value }) => {
  return <>개의 이슈가 생성되었습니다!</>;
});

const IssuePrinter = ({ count }) => {
  return (
    <div>
      {count}
      <IssueScript value={count} />
    </div>
  );
};

const IssueCounter = () => {
  const [count, setCount] = useState(0);
  const onClickIssueButton = () => {
    setCount((previous) => previous + 1);
  };

  return (
    <>
      <label>
        <IssuePrinter count={count} />
      </label>
      <button onClick={onClickIssueButton}>이슈 생성</button>
    </>
  );
};

const SmartScoreComponent = () => {
  return (
    <div>
      <h1>스마트스코어 이슈 농장</h1>
      <IssueCounter />
    </div>
  );
};

export default SmartScoreComponent;
