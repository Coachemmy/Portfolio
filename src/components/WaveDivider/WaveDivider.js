const WaveDivider = ({ variant = 'wave', position = 'bottom', flip = false, color = 'white' }) => {
  const colorClasses = {
    white: 'text-white',
    indigo: 'text-indigo-50',
    purple: 'text-purple-50',
    teal: 'text-teal-50',
    blue: 'text-blue-50',
    cyan: 'text-cyan-50',
    orange: 'text-orange-50',
    amber: 'text-amber-50'
  };

  const waves = {
    wave: (
      <svg
        className={`absolute ${flip ? 'rotate-180' : ''} ${position === 'top' ? '-top-1' : '-bottom-1'} left-0 w-full h-24 ${colorClasses[color]}`}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
        />
      </svg>
    ),
    curve: (
      <svg
        className={`absolute ${flip ? 'rotate-180' : ''} ${position === 'top' ? '-top-1' : '-bottom-1'} left-0 w-full h-16 ${colorClasses[color]}`}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,30 Q720,60 1440,30 L1440,60 L0,60 Z"
        />
      </svg>
    ),
    zigzag: (
      <svg
        className={`absolute ${flip ? 'rotate-180' : ''} ${position === 'top' ? '-top-1' : '-bottom-1'} left-0 w-full h-16 ${colorClasses[color]}`}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,0 L0,30 L60,30 L90,0 L120,30 L180,30 L210,0 L270,30 L330,30 L360,0 L420,30 L480,30 L510,0 L570,30 L630,30 L660,0 L720,30 L780,30 L810,0 L870,30 L930,30 L960,0 L1020,30 L1080,30 L1110,0 L1170,30 L1230,30 L1260,0 L1320,30 L1380,30 L1410,0 L1440,30 L1440,60 L0,60 Z"
        />
      </svg>
    ),
    round: (
      <svg
        className={`absolute ${flip ? 'rotate-180' : ''} ${position === 'top' ? '-top-1' : '-bottom-1'} left-0 w-full h-24 ${colorClasses[color]}`}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,50 Q180,0 360,50 T720,50 T1080,50 T1440,50 L1440,100 L0,100 Z"
        />
      </svg>
    ),
    angle: (
      <svg
        className={`absolute ${flip ? 'rotate-180' : ''} ${position === 'top' ? '-top-1' : '-bottom-1'} left-0 w-full h-16 ${colorClasses[color]}`}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,0 L0,40 L1440,20 L1440,60 L0,60 Z"
        />
      </svg>
    )
  };

  return waves[variant] || waves.wave;
};

export default WaveDivider;