import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    let mouseX = 0, mouseY = 0;
    let outerX = 0, outerY = 0;
    let frameId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
      }
    };

    const animate = () => {
      outerX += (mouseX - outerX) * 0.15;
      outerY += (mouseY - outerY) * 0.15;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerX - 12}px, ${outerY - 12}px) scale(${hovering ? 1.8 : 1})`;
      }
      frameId = requestAnimationFrame(animate);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [data-cursor-hover]')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [hovering]);

  return (
    <>
      <div
        ref={outerRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          border: '1.5px solid #b8f56a',
          backgroundColor: hovering ? 'rgba(184,245,106,0.15)' : 'transparent',
          transition: 'background-color 0.2s',
        }}
      />
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          backgroundColor: '#b8f56a',
          transform: `scale(${clicking ? 0.5 : 1})`,
          transition: 'transform 0.1s',
        }}
      />
    </>
  );
};

export default CustomCursor;