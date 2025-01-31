import React, { useEffect, useState, useCallback } from 'react';

export default function SVGConnector({ connections }) {
  const [lineCoords, setLineCoords] = useState([]);

  const updateLines = useCallback(() => {
    const coords = connections.map(({ from, to, label }) => {
      const fromElem = typeof from === 'string' ? document.querySelector(from) : from.current;
      const toElem = typeof to === 'string' ? document.querySelector(to) : to.current;

      if (fromElem && toElem) {
        const fromRect = fromElem.getBoundingClientRect();
        const toRect = toElem.getBoundingClientRect();

        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        const x1 = fromRect.left + fromRect.width / 2 + scrollX;
        const y1 = fromRect.top + fromRect.height / 2 + scrollY;
        const x2 = toRect.left + toRect.width / 2 + scrollX;
        const y2 = toRect.top + toRect.height / 2 + scrollY;

        return { x1, y1, x2, y2, label };
      }
      return null;
    });

    setLineCoords(coords.filter(Boolean));
  }, [connections]);

  useEffect(() => {
    updateLines();
    window.addEventListener('resize', updateLines);
    const handleScrollOrDrag = () => {
      requestAnimationFrame(updateLines);
    };

    window.addEventListener('scroll', handleScrollOrDrag);
    document.addEventListener('drag', handleScrollOrDrag); 

    return () => {
      window.removeEventListener('resize', updateLines);
      window.removeEventListener('scroll', handleScrollOrDrag);
      document.removeEventListener('drag', handleScrollOrDrag);
    };
  }, [updateLines]);

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      {lineCoords.map((line, index) => {
        const midX = (line.x1 + line.x2) / 2;
        const midY = (line.y1 + line.y2) / 2;
        const textOffsetY = -20; 

        return (
          <React.Fragment key={index}>
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={midX}
              y={midY + textOffsetY}
              fill="white"
              fontSize="12"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {line.label}
            </text>
          </React.Fragment>
        );
      })}
    </svg>
  );
}