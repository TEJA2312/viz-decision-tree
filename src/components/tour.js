import { useState, useEffect } from 'react';

const ProductTour = ({ steps, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({});

  useEffect(() => {
    if (steps.length > 0 && currentStep < steps.length) {
      const element = document.getElementById(steps[currentStep].elementId);
      if (element) {
        const rect = element.getBoundingClientRect();
        setHighlightStyle({
          top: rect.top + window.scrollY - 10,
          left: rect.left - 10,
          width: rect.width + 20,
          height: rect.height + 20,
        });
      }
    }
  }, [currentStep, steps]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
      // setCurrentStep(0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {steps.length > 0 && currentStep < steps.length && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#302f2f80] bg-opacity-50 z-50">
          <div
            className="absolute border-2 border-blue-500 rounded-lg transition-all duration-300"
            style={highlightStyle}
          ></div>
          <div
            className="absolute bg-black shadow-lg rounded-lg p-4 max-w-sm z-50"
            style={{ top: highlightStyle.top + highlightStyle.height + 10, left: highlightStyle.left }}
          >
            <img className='w-52 mx-auto h-auto' src={steps[currentStep].url} />
            <p className="text-white text-base">{steps[currentStep].content}</p>
            <div className="w-full flex gap-4 justify-between mt-4">
              { currentStep > 0 && <button
                className="bg-gray-500 text-sm text-white px-4 py-2 rounded"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </button> }
              <button
                className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-sm text-white px-4 py-2 rounded"
                onClick={nextStep}
              >
                {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductTour;
