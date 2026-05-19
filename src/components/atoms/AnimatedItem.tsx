interface AnimatedItemProps {
  delay: number
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  as?: keyof React.JSX.IntrinsicElements
}

export function AnimatedItem({ delay, className = '', style, children, as: Tag = 'div' }: AnimatedItemProps) {
  return (
    <Tag
      className={`animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}
