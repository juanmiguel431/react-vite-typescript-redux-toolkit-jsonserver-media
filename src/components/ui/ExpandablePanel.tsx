import React, { PropsWithChildren, useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

type ExpandablePanelProps = PropsWithChildren & {
  header: React.ReactNode;
};

const ExpandablePanel: React.FC<ExpandablePanelProps> = ({ children, header }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={() => setExpanded(prev => !prev)}>
          {expanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </div>
      </div>
      {expanded &&
        <div className="p-2 border-t">
          {children}
        </div>
      }
    </div>
  );
};

export default ExpandablePanel;
