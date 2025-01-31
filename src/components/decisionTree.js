import React, { forwardRef, useRef, useState, useEffect } from 'react';
import SVGConnector from './connector';
import { ArrowLeft, LoaderCircle, Network, Plus, RotateCcw, X } from 'lucide-react';
import useSound from 'use-sound';
import NodeClickSound from '../sounds/node-click.mp3'
import ProductTour from './tour';
import { conditions } from "../utility/conditions";
import { animals } from "../utility/animals";
import Modal from './modal';

export default function DecisionTree({ step, setStep }) {
    const [play, { stop }] = useSound(NodeClickSound);

    const [showTour, setShowTour] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

      const steps = [
        { elementId: 'element1', content: 'These are the questions for your decision tree to classify your animals' },
        { elementId: 'element2', content: 'These are the outcome or final decisions for your decision tree to classify your animals' },
        { elementId: 'element3', content: 'Drag conditions and question from below and Drop them over the circle' },
      ];

  const node1Ref = useRef(null);
  const node2Ref = useRef(null);
  const node3Ref = useRef(null);
  const node4Ref = useRef(null);
  const node5Ref = useRef(null);
  const node6Ref = useRef(null);
  const node7Ref = useRef(null);
  const node8Ref = useRef(null);
  const node9Ref = useRef(null);
  const node10Ref = useRef(null);
  const node11Ref = useRef(null);
  const node12Ref = useRef(null);
  const node13Ref = useRef(null);
  const node14Ref = useRef(null);
  const node15Ref = useRef(null);

  const node16Ref = useRef(null);
  const node17Ref = useRef(null);
  const node18Ref = useRef(null);
  const node19Ref = useRef(null);
  const node20Ref = useRef(null);
  const node21Ref = useRef(null);
  const node22Ref = useRef(null);
  const node23Ref = useRef(null);
  const node24Ref = useRef(null);
  const node25Ref = useRef(null);
  const node26Ref = useRef(null);
  const node27Ref = useRef(null);
  const node28Ref = useRef(null);
  const node29Ref = useRef(null);
  const node30Ref = useRef(null);
  const node31Ref = useRef(null);

  const [nodeValues, setNodeValues] = useState(Array(15).fill(null));
  const [openModal, setOpenModal] = useState(false);

  const handleDragStart = (e, condition) => {
    e.dataTransfer.setData("text/plain", condition);
  };

  const handleDrop = (index, condition) => {
    play();
    setNodeValues((prev) => {
      const newValues = [...prev];
      newValues[index] = condition;
      return newValues;
    });
  };

  console.log('node', nodeValues)
  return (
    <section className='w-full'>

      <div className='relative w-[10%] mb-8 mt-16 mx-auto flex items-center justify-center'>
        <Node index={0} id={'element3'} ref={node1Ref} value={nodeValues[0]} onDropCondition={handleDrop}/>
      </div>
      { nodeValues[0] && <div className='relative w-[50%] my-8 mx-auto flex items-center justify-between'>
       { nodeValues[0] && <Node index={1} ref={node2Ref} value={nodeValues[1]} onDropCondition={handleDrop}/> }
       { nodeValues[0] && <Node index={2} ref={node3Ref} value={nodeValues[2]}  onDropCondition={handleDrop}/> }
      </div> }

      { nodeValues[0] && <div className='relative w-[70%] my-8 mx-auto flex items-center justify-between gap-4'>
        <div className='w-1/4 relative'>
        { nodeValues[1] && <Node ref={node4Ref} index={3}  value={nodeValues[3]} onDropCondition={handleDrop}/> }
        </div>
        <div className='w-1/4 relative flex items-center justify-center'>
        { nodeValues[1] && <Node ref={node5Ref} index={4} value={nodeValues[4]} onDropCondition={handleDrop}/> }
        </div>
        <div className='w-1/4 relative flex items-center justify-center'>
        { nodeValues[2] && <Node ref={node6Ref} index={5} value={nodeValues[5]} onDropCondition={handleDrop}/> }
        </div>
        <div className='w-1/4 relative flex items-center justify-end'>
        { nodeValues[2] && <Node ref={node7Ref} index={6} value={nodeValues[6]} onDropCondition={handleDrop}/> }
        </div>
      </div> }

      { nodeValues[0] && <div className='relative w-[85%] mt-24 mx-auto flex items-center justify-between gap-4'>
       <div className='w-1/4 relative'>
       { nodeValues[3] && <Node ref={node8Ref} index={7} value={nodeValues[7]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[3] && <Node ref={node9Ref} index={8} value={nodeValues[8]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative'>
       { nodeValues[4] && <Node ref={node10Ref} index={9} value={nodeValues[9]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[4] && <Node ref={node11Ref} index={10} value={nodeValues[10]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative'>
       { nodeValues[5] && <Node ref={node12Ref} index={11} value={nodeValues[11]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[5] && <Node ref={node13Ref} index={12} value={nodeValues[12]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative'>
       { nodeValues[6] && <Node ref={node14Ref} index={13} value={nodeValues[13]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[6] && <Node ref={node15Ref} index={14} value={nodeValues[14]} onDropCondition={handleDrop}/> } 
       </div> 
      
      </div>}

      { nodeValues[0] && <div className='relative w-[96%] mt-24 mx-auto flex items-center justify-between gap-4'>
       <div className='w-1/4 relative'>
       { nodeValues[7] && <Node ref={node16Ref} index={15} value={nodeValues[15]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[7] && <Node ref={node17Ref} index={16} value={nodeValues[16]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative'>
       { nodeValues[8] && <Node ref={node18Ref} index={17} value={nodeValues[17]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[8] && <Node ref={node19Ref} index={18} value={nodeValues[18]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative'>
       { nodeValues[9] && <Node ref={node20Ref} index={19} value={nodeValues[19]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[9] && <Node ref={node21Ref} index={20} value={nodeValues[20]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative'>
       { nodeValues[10] && <Node ref={node22Ref} index={21} value={nodeValues[21]} onDropCondition={handleDrop}/> }
       </div>
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[10] && <Node ref={node23Ref} index={22} value={nodeValues[22]} onDropCondition={handleDrop}/> } 
       </div> 
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[11] && <Node ref={node24Ref} index={23} value={nodeValues[23]} onDropCondition={handleDrop}/> } 
       </div> 
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[11] && <Node ref={node25Ref} index={24} value={nodeValues[24]} onDropCondition={handleDrop}/> } 
       </div> 
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[12] && <Node ref={node26Ref} index={25} value={nodeValues[25]} onDropCondition={handleDrop}/> } 
       </div> 
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[12] && <Node ref={node27Ref} index={26} value={nodeValues[26]} onDropCondition={handleDrop}/> } 
       </div> 
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[13] && <Node ref={node28Ref} index={27} value={nodeValues[27]} onDropCondition={handleDrop}/> } 
       </div> 
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[13] && <Node ref={node29Ref} index={28} value={nodeValues[28]} onDropCondition={handleDrop}/> } 
       </div>
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[14] && <Node ref={node30Ref} index={29} value={nodeValues[29]} onDropCondition={handleDrop}/> } 
       </div>  
       <div className='w-1/4 relative flex items-center justify-end'>
       { nodeValues[14] && <Node ref={node31Ref} index={30} value={nodeValues[30]} onDropCondition={handleDrop}/> } 
       </div>  
      
      </div>}

      <div id="element1" className='w-[80%] mx-auto p-4 mt-6 flex items-center justify-center flex-wrap gap-x-4'>
      {conditions.map((data, index)=>(
         <p key={index} 
         draggable
         onDragStart={(e) => handleDragStart(e, data)}
         className='text-sm p-2 hover:scale-[1.05] rounded-full cursor-grabbing font-medium text-white'>{data}</p>
      ))}

     </div>
      <div id="element2" className='w-[80%]  mx-auto p-4 mb-6 flex items-center justify-center flex-wrap gap-4'>
      {animals.map((data, index)=>(
        <img 
        draggable
        onDragStart={(e) => handleDragStart(e, data)}
        src={data} 
        className='w-14 h-auto hover:scale-[1.05] cursor-grabbing' />
      ))}
      </div>

      <button onClick={()=> setStep(step-1)}  
      className='p-2 fixed top-0 left-4 hover:scale-[1.02] rounded-lg mx-auto block my-6 text-xs bg-gradient-to-r from-blue-600 to-indigo-900 text-white'>
       <ArrowLeft className="w-4 h-auto inline text-white" /> Go Back
      </button>
      <div className='fixed z-50 right-4 top-0 flex items-center gap-6'>
       <button  onClick={()=> setNodeValues(Array(15).fill(null))}  
         className='p-2 hover:scale-[1.02] rounded-lg mx-auto block my-6 text-xs bg-white text-black'>
        <RotateCcw className='w-4 h-4 inline'/> Reset Decision Tree
       </button>
       <button  onClick={()=> setIsModalOpen(true)}  
         className='p-2 hover:scale-[1.02] rounded-lg mx-auto block my-6 text-xs bg-gradient-to-r from-emerald-600 to-cyan-600 text-white'>
        <Network className='w-4 h-4 text-white inline'/> Sample Decision Trees
       </button>
      </div>
      


      <SVGConnector connections={[
            { from: node1Ref, to: node2Ref , label: 'Yes'},
            { from: node1Ref, to: node3Ref, label: 'No' },
            { from: node2Ref, to: node4Ref, label: 'Yes' },
            { from: node2Ref, to: node5Ref, label: 'No' },
            { from: node3Ref, to: node6Ref, label: 'Yes' },
            { from: node3Ref, to: node7Ref, label: 'No' },
            { from: node4Ref, to: node8Ref, label: 'Yes' },
            { from: node4Ref, to: node9Ref, label: 'No' },
            { from: node5Ref, to: node10Ref, label: 'Yes' },
            { from: node5Ref, to: node11Ref, label: 'No' },
            { from: node6Ref, to: node12Ref, label: 'Yes' },
            { from: node6Ref, to: node13Ref, label: 'No' },
            { from: node7Ref, to: node14Ref, label: 'Yes' },
            { from: node7Ref, to: node15Ref, label: 'No' },
            { from: node8Ref, to: node16Ref, label: 'Yes' },
            { from: node8Ref, to: node17Ref, label: 'No' },
            { from: node9Ref, to: node18Ref, label: 'Yes' },
            { from: node9Ref, to: node19Ref, label: 'No' },
            { from: node10Ref, to: node20Ref, label: 'Yes' },
            { from: node10Ref, to: node21Ref, label: 'No' },
            { from: node11Ref, to: node22Ref, label: 'Yes' },
            { from: node11Ref, to: node23Ref, label: 'No' },
            { from: node12Ref, to: node24Ref, label: 'Yes' },
            { from: node12Ref, to: node25Ref, label: 'No' },
            { from: node13Ref, to: node26Ref, label: 'Yes' },
            { from: node13Ref, to: node27Ref, label: 'No' },
            { from: node14Ref, to: node28Ref, label: 'Yes' },
            { from: node14Ref, to: node29Ref, label: 'No' },
            { from: node15Ref, to: node30Ref, label: 'Yes' },
            { from: node15Ref, to: node31Ref, label: 'No' },
      ]} />
    { showTour && <ProductTour steps={steps} onClose={() => setShowTour(false)} /> }


      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className='flex items-center gap-6 '>
         <p className='text-sm text-white my-4'>Below, we have provided several examples of well-structured and accurate decision trees, along with detailed explanations of their logic and structure. You can use these examples as a reference to evaluate and validate your own decision tree, ensuring that it follows best practices and maintains logical consistency.</p>
         <X onClick={() => setIsModalOpen(false)} className='w-12 hover:scale-[1.02] h-auto text-white mr-4'/>
        </div>
        
        <img src='/example1.png' className='w-full h-auto '/>
        <img src='/example2.png' className='w-full h-auto my-12'/>
        <img src='/example3.png' className='w-full h-auto my-12'/>
      </Modal>  
    </section>
  );
}

const Node = forwardRef(({ index, value, onDropCondition, id }, ref) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const condition = e.dataTransfer.getData("text/plain");
    onDropCondition(index, condition);
    setIsDraggingOver(false);
  };

  return (
    <div
      ref={ref} id={id}
      className={`relative w-fit z-30 bg-black border-2 border-white rounded-full flex items-center justify-center cursor-pointer ${isDraggingOver ? 'scale-[1.05]' : 'hover:scale-[1.02]'}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {value ? (
        !value.endsWith(".png") ? (
         <p className="text-white p-4 font-medium text-center text-[10px]">{value}</p>
        ): (
          <img 
          src={value} 
          className='w-12 h-auto p-2' />
        )
        
      ) : (
        <Plus className='w-12 h-12 p-4 text-white' />
      )}
    </div>
  );
});

