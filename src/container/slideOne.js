import React, { useState } from 'react';
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import animationAstronautData from "../alien.json";
import animationUfoData from "../ufo.json";
import DecisionTreeIntro from '../components/decisionTreeIntro';
import useSound from 'use-sound';
import buttonSound from '../sounds/button-sounds.mp3';
import ClappingSound from '../sounds/clapping.mp3'
import DecisionTree from '../components/decisionTree';

export default function SlideOne() {
  const [step, setStep] = useState(0)
  const [play, { stop }] = useSound(buttonSound);
  const [conclude, { concludeStop }] = useSound(ClappingSound);

  const astronautOptions = {
    animationData: animationAstronautData, 
    loop: true,                   
    autoplay: true,           
  };

  const ufoOptions = {
    animationData: animationUfoData, 
    loop: true,                   
    autoplay: true,           
  };

  const typingEffect = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        opacity: { duration: 0.05, ease: "ease-in-out" },
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
  };

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span key={index} variants={letterVariants}>
        {char}
      </motion.span>
    ));
  };

  return (
    <section className='bg-[radial-gradient(#3b3b3b_0.8px,#000000_0.8px)] bg-[length:16px_16px]'>
      { (step != 4 && step != 0 && step != 5) && <div className='fixed top-6 left-6 p-4 border border-white rounded-md flex flex-col gap-1'>
        <p className='text-sm text-center my-2'>Complete the following steps:</p>
        <p onClick={()=> setStep(1)} className={`p-2 text-base cursor-pointer hover:scale-[1.02]  ${step === 1 ? 'bg-gradient-to-r from-blue-600 to-indigo-900 font-medium' : 'text-white'}`}>1. Introduction to Decision Tree</p>
        <p onClick={()=> setStep(2)} className={`p-2 text-base cursor-pointer hover:scale-[1.02]  ${step === 2 ? 'bg-gradient-to-r from-blue-600 to-indigo-900 font-medium' : 'text-white'}`}>2. Decision Tree Example</p>
        <p onClick={()=> setStep(3)} className={`p-2 text-base cursor-pointer hover:scale-[1.02]  ${step === 3 ? 'bg-gradient-to-r from-blue-600 to-indigo-900 font-medium' : 'text-white'}`}>3. Visualize Decision Tree</p>
        <p onClick={()=> setStep(4)} className={`p-2 text-base cursor-pointer hover:scale-[1.02]  ${step === 4 ? 'bg-gradient-to-r from-blue-600 to-indigo-900 font-medium' : 'text-white'}`}>4. Create your own Decision Tree</p>
      </div> }

      { step === 0 && 
        <div className='h-screen w-full flex flex-col items-center justify-center'>
          <div className="max-w-5xl mx-auto p-8  text-white rounded-2xl shadow-lg bg-gradient-to-r from-slate-900 to-slate-700">
          <h1 className="text-3xl font-semibold text-white mb-4">
            Welcome to Alien Classifier Module
          </h1>
          <p className="text-lg mb-4 leading-relaxed">
            Welcome to <span className="font-semibold text-white">Alien Classifier</span>, an exciting journey into the world of 
            <span className="font-semibold text-white"> Decision Trees</span> through an engaging intergalactic adventure. In this 
            interactive module, you'll embark on a mission to help an alien who has kidnapped various 
            animals from Earth and needs your expertise to classify them correctly.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Gone are the days of learning complex algorithms through textbooks—
            <span className="font-semibold text-white"> AlienClassifier</span> offers a hands-on approach that blends storytelling with 
            data-driven learning. Using the power of Decision Trees, you'll explore how to break 
            down characteristics, analyze features, and create structured decision paths to identify 
            each animal.
          </p>
          <p className="text-lg text-white leading-relaxed">
            But how does it work? It's simple yet powerful. Throughout the module, you'll gather 
            insights on splitting criteria, feature selection, and tree construction. By the end, 
            you'll put your newfound skills to the test by building a decision tree to correctly 
            classify all the captured animals and help our alien friend understand Earth's diverse 
            wildlife.
          </p>
         </div>
         <button onClick={()=> {
            play();
            setStep(step+1)
            }} className='text-sm font-medium hover:scale-[1.05] block mx-auto  mt-4 bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-lg'>Start the Journey <ArrowRight className='w-4 inline'/> </button> 
        </div>
      }


       { step === 1 && 

      <main className='flex items-center justify-center h-screen'>
        <div>
        <Lottie  options={astronautOptions} height={300} width={300} />
       <motion.div
          className="mb-6 w-[80%] bg-gradient-to-r from-slate-900 to-slate-700 border-white p-4 rounded-3xl mx-auto"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={typingEffect}
        >
         <motion.p className='text-lg mx-auto'> {splitText("Hello, my name is Astro. I am an alien from the planet Lumia, and I need your help! I have kidnapped a few animals from Earth and need your assistance in classifying them. To do this, you will have to use a Decision Tree. So, let's first learn what a Decision Tree is.")} </motion.p> 
         <motion.p className='text-lg mx-auto mt-4'>{splitText(`A Decision Tree is a flowchart-like structure that resembles an upside-down tree. It consists of nodes, which are represented as ovals, and branches, depicted as straight lines. Each node contains a question that can be answered with a simple "yes" or "no," leading to two branches—one representing the "YES" answer and the other representing the "NO" answer.`)}</motion.p>
       </motion.div>
       <button onClick={()=> {
        play();
        setStep(step+1)
        }} className='text-sm font-medium hover:scale-[1.05] block mx-auto  mt-4 bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-lg'>Proceed to next slide <ArrowRight className='w-4 inline'/> </button> 
       </div>
      </main> }
       { step === 2 &&  
      
      <main className='flex items-center justify-center h-screen'>
       <div>
        <Lottie  options={astronautOptions} height={300} width={300} />
        <motion.div
            className="mb-6 w-2/3 bg-gradient-to-r from-slate-900 to-slate-700 k border-white p-4 rounded-tr-3xl rounded-bl-3xl mx-auto"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={typingEffect}
          >
          <motion.p className='text-lg mx-auto '> {splitText(`Having trouble deciding what to eat for your evening snacks? Don't worry! A Decision Tree can help you make the right choice based on your preferences and cravings. By answering a series of simple "yes" or "no" questions, you can narrow down your options and find the perfect snack. Lets vizualize`)} </motion.p> 
        </motion.div>
        <button onClick={()=> {
        play();
        setStep(step+1)
        }} className='text-sm font-medium hover:scale-[1.05] block mx-auto  mt-4 bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-lg'>Proceed to next slide <ArrowRight className='w-4 inline'/> </button> 
       </div>
       </main> 
       
       }

       { step === 3 && 
        <main className='flex items-center justify-center h-screen'>
         <div className='w-full'>
         <DecisionTreeIntro />
       <button onClick={()=> {
        play();
        setStep(step+1)
        }} className='text-sm font-medium hover:scale-[1.05] block mx-auto  mt-4 bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-lg'>Proceed to next slide <ArrowRight className='w-4 inline'/>
      </button> 
       </div>
       </main>
       
       }
      { step === 4 && <>
        <DecisionTree  setStep={setStep} step={step}/>
        <button onClick={()=> {
        conclude();
        setStep(step+1)
        }} className='text-sm font-medium hover:scale-[1.05] block mx-auto  mt-4 mb-12 bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-lg'>Proceed to next slide <ArrowRight className='w-4 inline'/>
      </button> 
      </>

       }
      { step === 5 && 
            <div className='h-screen w-full flex flex-col items-center justify-center'>
              <div className="max-w-5xl mx-auto p-8  text-white rounded-2xl shadow-lg bg-gradient-to-r from-slate-900 to-slate-700">
              <h1 className="text-3xl font-semibold text-white mb-4">
                Conclusion
              </h1>
              <p className="text-lg mb-4 leading-relaxed">
              Congratulations, young explorers! 🚀 You’ve successfully helped Astro classify the animals using a Decision Tree, and along the way, you’ve learned how this powerful tool can help us make decisions in a structured and logical way.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
              By understanding the different types of nodes and how each "yes" or "no" answer leads to a new outcome, you now have the skills to build your own Decision Trees. Whether it's choosing your favorite snack, identifying animals, or solving everyday problems, Decision Trees can make decision-making easier and more efficient.
              </p>
              <p className="text-lg text-white leading-relaxed">
              In the interactive module, you got hands-on experience by creating your own Decision Tree. This skill will not only help you in science and logic-based activities but also in real-world problem-solving. The more you practice, the better you'll become at breaking down complex choices into simple steps!
              <br></br>
              <br></br>
              Astro is so grateful for your help and is now ready to return the animals to their homes on Earth. But don’t worry—there are many more adventures ahead! Keep exploring, keep questioning, and keep learning. Who knows? Maybe next time, you’ll help Astro solve an even bigger mystery! 🌟
              </p>
             </div>
                <button onClick={()=> {
                  play();
                  setStep(0)
                  }} className='text-sm font-medium hover:scale-[1.05] block mx-auto mt-4 bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-lg'> Restart Module
                </button> 
            </div> 
        }

    </section>
  );
}
