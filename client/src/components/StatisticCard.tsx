import * as React from 'react';
import { cn } from '@/utils/cn';

export interface StatisticCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  className?: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  change,
  trend,
  className,
}) => {
  return (
    <div className={cn('rounded-lg border p-6 shadow-sm transition-all hover:shadow-md', className)}>
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="text-2xl font-bold">{value}</div>
      </div>
      <div className="mt-2">
        <span className={cn(
          'text-xs font-medium inline-flex items-center',
          {
            'text-green-500': trend === 'up',
            'text-red-500': trend === 'down',
            'text-muted-foreground': trend === 'neutral',
          }
        )}>
          {change} {trend === 'up' ? <ArrowUp className="ml-1 h-3 w-3" /> : trend === 'down' ? <ArrowDown className="ml-1 h-3 w-3" /> : null}
        </span>
      </div>
    </div>
  );
};

interface ArrowUpProps {
  className?: string;
}

const ArrowUp: React.FC<ArrowUpProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={cn('h-3 w-3', className)}
  >
    <path fillRule="evenodd" d="M14.585 10.585a2 2 0 1 1-2.827 2.827l-3.535-3.535a2 2 0 0 1 0-2.827l3.535-3.535a2 2 0 1 1 2.827 2.827l-3.535 3.535a2 2 0 0 1 0 2.827l3.535 3.535a2 2 0 1 1-2.827 2.827l-3.535-3.535a2 2 0 0 1 0-2.827l3.535-3.535a2 2 0 0 1 2.827-2.827l-3.535 3.535a2 2 0 0 1 0 2.827l3.535 3.535z" clipRule="evenodd" />
  </svg>
);

interface ArrowDownProps {
  className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={cn('h-3 w-3', className)}
  >
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-3.293 3.293a1 1 0 0 1-1.414 0l-3.293-3.293a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
  </svg>
);
