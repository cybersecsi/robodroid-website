export const options = {
  background: {
    color: '#001319',
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  fullScreen: { enable: false, zIndex: 0 },
  particles: {
    color: {
      value: '#fff',
    },
    links: {
      color: '#fff',
      distance: 125,
      enable: true,
      opacity: 0.5,
    },
    move: {
      enable: true,
      speed: 2,
    },
    size: {
      value: 1,
    },
    shape: {
      type: 'circle',
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
  },
};
