interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-primary to-yellow-500 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}