import * as React from 'react';

export function cn(...inputs: (string | { [key: string]: any } | undefined)[]): string {
  return React.clsx(...inputs);
}
