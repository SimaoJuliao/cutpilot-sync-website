import * as React from 'react'
import { cn } from '@lib/utils'

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('rounded-xl border border-border bg-card text-card-foreground', className)}
    {...props}
  />
)
Card.displayName = 'Card'

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />
)
CardHeader.displayName = 'CardHeader'

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('font-display text-2xl leading-none tracking-wider', className)} {...props} />
)
CardTitle.displayName = 'CardTitle'

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
)
CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardTitle, CardContent }
