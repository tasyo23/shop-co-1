"use client";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";

interface TabsProps {
  children: JSX.Element[];
  current?: string;
  className?: string;
}

const Tabs: FunctionComponent<TabsProps> = ({
  children,
  current,
  className,
}) => {
  const [currentTab, setCurrentTab] = useState(
    current || children[0].props["data-label"]
  );
  return (
    <div className={className}>
      <div className="flex justify-between">
        {children.map((child) => (
          <button
            key={child.props["data-label"]}
            className={`flex-grow-[2] border-b py-6 ${
              child.props["data-label"] == currentTab
                ? "border-b-2 border-black"
                : ""
            }`}
            onClick={() => setCurrentTab(child.props["data-label"])}
          >
            {child.props["data-label"]}
          </button>
        ))}
      </div>
      <div>
        {children.map((child) => (
          <div
            key={child.props["data-label"]}
            className={`${child.props.className} ${
              child.props["data-label"] == currentTab ? "block" : "hidden"
            } py-6`}
          >
            {child.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
