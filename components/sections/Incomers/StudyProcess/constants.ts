interface Position {
  top: string
  left: string
  rotate: string
  scale: number
}

interface BreakpointPositions {
  start: Position[]
  final: Position[]
}

export interface PositionsByBreakpoint {
  mobile: BreakpointPositions
  tablet: BreakpointPositions
  laptop: BreakpointPositions
  desktop: BreakpointPositions
}

const positionsByBreakpoint: PositionsByBreakpoint = {
  mobile: {
    start: [
      { top: '0', left: '-13%', rotate: '-15deg', scale: 0.65 },
      { top: '5%', left: '45%', rotate: '5deg', scale: 0.65 },
      { top: '45%', left: '-10%', rotate: '-5deg', scale: 0.7 },
      { top: '45%', left: '45%', rotate: '5deg', scale: 0.65 }
    ],
    final: [
      { top: '10%', left: '0%', rotate: '0deg', scale: 0.55 },
      { top: '10%', left: '37%', rotate: '0deg', scale: 0.55 },
      { top: '45%', left: '0%', rotate: '0deg', scale: 0.55 },
      { top: '45%', left: '37%', rotate: '0deg', scale: 0.55 }
    ]
  },
  tablet: {
    start: [
      { top: '5%', left: '5%', rotate: '-10deg', scale: 1.1 },
      { top: '5%', left: '55%', rotate: '5deg', scale: 1.1 },
      { top: '40%', left: '5%', rotate: '0', scale: 1 },
      { top: '40%', left: '55%', rotate: '0', scale: 1 }
    ],
    final: [
      { top: '20%', left: '12%', rotate: '0deg', scale: 1 },
      { top: '20%', left: '53%', rotate: '0deg', scale: 1 },
      { top: '55%', left: '12%', rotate: '0deg', scale: 1 },
      { top: '55%', left: '53%', rotate: '0deg', scale: 1 }
    ]
  },
  laptop: {
    start: [
      { top: '120px', left: '8%', rotate: '-15deg', scale: 1.4 },
      { top: '120px', left: '60%', rotate: '8deg', scale: 1.4 },
      { top: '480px', left: '22%', rotate: '0', scale: 1.3 },
      { top: '480px', left: '58%', rotate: '0', scale: 1.3 }
    ],
    final: [
      { top: '25%', left: '16%', rotate: '0deg', scale: 1.3 },
      { top: '25%', left: '58%', rotate: '0deg', scale: 1.3 },
      { top: '60%', left: '16%', rotate: '0deg', scale: 1.3 },
      { top: '60%', left: '58%', rotate: '0deg', scale: 1.3 }
    ]
  },
  desktop: {
    start: [
      { top: '150px', left: '10%', rotate: '-20deg', scale: 2 },
      { top: '150px', left: '70%', rotate: '10deg', scale: 2 },
      { top: '500px', left: '25%', rotate: '0', scale: 1.5 },
      { top: '450px', left: '60%', rotate: '0', scale: 1.5 }
    ],
    final: [
      { top: '30%', left: '18%', rotate: '0deg', scale: 1.7 },
      { top: '30%', left: '60%', rotate: '0deg', scale: 1.7 },
      { top: '65%', left: '18%', rotate: '0deg', scale: 1.7 },
      { top: '65%', left: '60%', rotate: '0deg', scale: 1.7 }
    ]
  }
}

const homePositionsByBreakpoint: PositionsByBreakpoint = {
  mobile: {
    start: [
      { top: '0', left: '-13%', rotate: '-15deg', scale: 0.65 }, // 1
      { top: '5%', left: '45%', rotate: '5deg', scale: 0.65 }, // 2
      { top: '45%', left: '-10%', rotate: '-5deg', scale: 0.7 }, // 3
      { top: '45%', left: '45%', rotate: '5deg', scale: 0.65 } // 4
    ],
    final: [
      { top: '10%', left: '0%', rotate: '0deg', scale: 0.55 }, // 1 (слева)
      { top: '10%', left: '30%', rotate: '0deg', scale: 0.55 }, // 2 (центр)
      { top: '55%', left: '30%', rotate: '0deg', scale: 0.55 }, // 3 (центр)
      { top: '10%', left: '60%', rotate: '0deg', scale: 0.55 } // 4 (справа)
    ]
  },
  tablet: {
    start: [
      { top: '5%', left: '5%', rotate: '-10deg', scale: 1.1 }, // 1
      { top: '5%', left: '55%', rotate: '5deg', scale: 1.1 }, // 2
      { top: '40%', left: '5%', rotate: '0', scale: 1 }, // 3
      { top: '40%', left: '55%', rotate: '0', scale: 1 } // 4
    ],
    final: [
      { top: '15%', left: '0%', rotate: '0deg', scale: 1 }, // 1 (слева)
      { top: '15%', left: '35%', rotate: '0deg', scale: 1 }, // 2 (центр)
      { top: '60%', left: '35%', rotate: '0deg', scale: 1 }, // 3 (центр)
      { top: '15%', left: '70%', rotate: '0deg', scale: 1 } // 4 (справа)
    ]
  },
  laptop: {
    start: [
      { top: '120px', left: '8%', rotate: '-15deg', scale: 1.4 }, // 1
      { top: '120px', left: '60%', rotate: '8deg', scale: 1.4 }, // 2
      { top: '480px', left: '22%', rotate: '0', scale: 1.3 }, // 3
      { top: '480px', left: '58%', rotate: '0', scale: 1.3 } // 4
    ],
    final: [
      { top: '20%', left: '5%', rotate: '0deg', scale: 1.3 }, // 1 (слева)
      { top: '20%', left: '40%', rotate: '0deg', scale: 1.3 }, // 2 (центр)
      { top: '60%', left: '40%', rotate: '0deg', scale: 1.3 }, // 3 (центр)
      { top: '20%', left: '75%', rotate: '0deg', scale: 1.3 } // 4 (справа)
    ]
  },
  desktop: {
    start: [
      { top: '140px', left: '0%', rotate: '-20deg', scale: 1.3 },
      { top: '170px', left: '37%', rotate: '10deg', scale: 1.1 },
      { top: '500px', left: '25%', rotate: '0', scale: 1 },
      { top: '80px', left: '80%', rotate: '10deg', scale: 1.2 }
    ],
    final: [
      { top: '20%', left: '8%', rotate: '0deg', scale: 0.9 },
      { top: '22%', left: '36%', rotate: '0deg', scale: 0.9 },
      { top: '47%', left: '36%', rotate: '0deg', scale: 0.9 },
      { top: '20%', left: '64%', rotate: '0deg', scale: 0.9 }
    ]
  }
}

export { positionsByBreakpoint, homePositionsByBreakpoint }
