import { FunctionComponent, ReactNode } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
  className?: string;
}

const Tab: FunctionComponent<TabProps> = ({ label, children, className }) => {
  return (
    <div data-label={label} className={className}>
      {children}
    </div>
  );
};

export default Tab;
