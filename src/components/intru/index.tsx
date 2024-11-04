import React from "react";
import "./index.scss";

type IntruProps = {
  content?: string;
};

const Intru = (props: IntruProps) => {
  const { content } = props;
  return (
    <div className="intru-wrapper">
      <div className="intru-content-text">{content}</div>
    </div>
  );
};

Intru.defaultProps = {
  content: "Welcome to Acahri Works - Crafting Your Ideas into Reality",
};

export default Intru;
