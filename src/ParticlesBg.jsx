import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className='absolute top-0 left-0 bottom-0 right-0'>
      <Particles
        id='tsparticles'
        className='h-full'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: '#949494',
            },
            links: {
              color: '#b4b4b4',
              distance: 170,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: false,
        }}
      />
    </div>
  );
};

export default ParticlesBg;
