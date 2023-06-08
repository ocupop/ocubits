import React, { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';
import { v4 as uuid } from 'uuid';
import 'react-tooltip/dist/react-tooltip.css';
// import './Tooltip.css';

interface TooltipProps {
  children?: ReactNode;
  className?: string;
}

const TooltipComponent: React.FC<TooltipProps> = ({ children, className, ...props }) => {
  const id = `tip-${uuid()}`;

  return (
    <div {...props} className={`ocu-tooltip ${className || ''}`}>
      <button
        data-tooltip-id="my-tooltip"
        data-tooltip-place="top"
        className="icon"
        style={{ lineHeight: 0 }}
        id={id}
      >
        ?
      </button>
      <Tooltip anchorSelect={`#${id}`} className={'tooltip-content'}>
        <span dangerouslySetInnerHTML={{ __html: children as string }} />
      </Tooltip>
    </div>
  );
};

export default TooltipComponent;
