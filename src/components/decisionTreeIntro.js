import React, { forwardRef, useRef, useState, useEffect } from 'react';
import SVGConnector from './connector';
import useSound from 'use-sound';
import NodeClickSound from '../sounds/tree-click.mp3'
import ProductTour from './tour';

export default function DecisionTreeIntro() {

  const [showTour, setShowTour] = useState(false);

  const steps = [
    { elementId: 'node', url: '/click-tour.gif',
      content: 'Click on the oval or circular-shaped elements, known as nodes in a decision tree, to explore the different types and components of a decision tree in detail.' },
  ];

  const node1Ref = useRef(null);
  const node2Ref = useRef(null);
  const node3Ref = useRef(null);
  const node4Ref = useRef(null);
  const node5Ref = useRef(null);
  const node6Ref = useRef(null);
  const node7Ref = useRef(null);

  const allConnections = [
    { from: node1Ref, to: node2Ref , label: 'Yes'},
    { from: node1Ref, to: node3Ref, label: 'No' },
    { from: node2Ref, to: node4Ref, label: 'Yes' },
    { from: node2Ref, to: node5Ref, label: 'No' },
    { from: node3Ref, to: node6Ref, label: 'Yes' },
    { from: node3Ref, to: node7Ref,label: 'No' },
  ];

  const [connections, setConnections] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < allConnections.length) {
        setConnections((prev) => [...prev, allConnections[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => { 
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTour(true);
    }, 3500);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <section className='w-full my-12'>
      <div className='w-[10%] my-6 mx-auto flex items-center justify-center'>
        <Node tourId={'node'} tooltipValue={'The root node in a decision tree is the starting point of the tree. It represents the main question '}
         value={'Do you want to eat something sweet ?'} 
         ref={node1Ref} />
      </div>
      <div className='w-[50%] my-6 mx-auto flex items-center justify-between'>
        <Node position={'bottom-full'}
        tooltipValue={'An intermediate node in a decision tree is any decision point that comes after the root node but before the final decision (leaf node)'}
        ref={node2Ref} 
        value={'Something Cold?'} />
        <Node position={'bottom-full'} 
        tooltipValue={'An intermediate node in a decision tree is any decision point that comes after the root node but before the final decision (leaf node)'}
        ref={node3Ref} 
        value={'Something Spicy ?'} />
      </div>

      <div className='w-[80%] mt-12 mb-6 mx-auto flex items-center justify-between gap-4'>
        <div className='w-1/4'>
        <Node ref={node4Ref} tooltipValue={'A leaf node in a decision tree is the final result or decision - In this case Ice Cream'} url='/ice-cream.png' />
        </div>
        <div className='w-1/4 flex items-center justify-end'>
        <Node ref={node5Ref} tooltipValue={'A leaf node in a decision tree is the final result or decision - In this case Donut'} url='/donut.png' />
        </div>
        <div className='w-1/4'>
        <Node ref={node6Ref} tooltipValue={'A leaf node in a decision tree is the final result or decision - In this case Spicy Ramen'} url='/noodle.png' />
        </div>
        <div className='w-1/4 flex items-center justify-end'>
        <Node ref={node7Ref} tooltipValue={'A leaf node in a decision tree is the final result or decision - In this case French Fries'} url='/french-fries.png' />
        </div>
      </div>
      { showTour && <ProductTour steps={steps} onClose={() => setShowTour(false)} /> }
      <SVGConnector connections={connections} /> 
    </section>
  );
}

const Node = forwardRef(({ value, tourId, url, tooltipValue, position='top-full' }, ref) => {
  const [play, { stop }] = useSound(NodeClickSound);
  const [showTooltip, setShowTooltip] = useState(false);
  const nodeRef = useRef(null);

  const handleToggleTooltip = () => {
    play();
    setShowTooltip((prev) => !prev);
  };

  return (
    <div className="relative w-fit z-30" ref={nodeRef}>
      <div
        id={tourId}
        ref={ref}
        onClick={handleToggleTooltip}
        className="p-4 z-20 bg-black border-2 border-white rounded-full flex items-center justify-center hover:scale-[1.02] cursor-pointer"
      >
        {value ? (
          <p className="text-white font-medium text-center text-xs">{value}</p>
        ) : (
          <img src={url} className="w-12 h-auto" alt="Node" />
        )}
      </div>

      {showTooltip && (
        <div
          className={`absolute w-56 bg-gradient-to-r from-blue-600 to-indigo-900 text-white left-1/2 transform -translate-x-1/2 py-2 px-4 rounded shadow-lg text-sm z-50 ${position}`}
        >
          {tooltipValue}
        </div>
      )}
    </div>
  );
});
