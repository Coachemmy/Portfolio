const FloatingBubbles = ({ count = 6, color = 'primary', className = '' }) => {
  const colors = {
    primary: 'bg-primary/10',
    secondary: 'bg-secondary/10',
    gradient: 'bg-gradient-to-r from-primary/10 to-secondary/10'
  };

  const actualCount = typeof window !== 'undefined' && window.innerWidth < 768 ? Math.min(count, 4) : count;

  const bubbles = Array.from({ length: actualCount }, (_, i) => ({
    size: Math.random() * 60 + 30,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${colors[color]} backdrop-blur-sm animate-float`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            top: bubble.top,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;