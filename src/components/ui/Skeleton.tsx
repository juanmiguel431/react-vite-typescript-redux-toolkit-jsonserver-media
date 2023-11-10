import React from 'react';
import classNames from 'classnames';

type SkeletonProps = {
  times: number;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ times, className }) => {

  const outerClassNames = classNames('relative overflow-hidden bg-gray-200 rounded mb-2.5', className);
  const innerClassNames = classNames();

  return Array(times).fill(0).map((_, i) => (
    <div
      key={i}
      className={outerClassNames}>
      <div
        className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200"
      />
    </div>
  ));
};

export default Skeleton;

