import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const MotionDiv = ({ id, title, content }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Define motion variants for each div
  const motionVariants = {
    div1: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    div2: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    div3: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={motionVariants[`div${id}`]}
        transition={{ duration: 0.5 }}
      >
        <h1>{title}</h1>
        <p>{content}</p>
      </motion.div>
    </div>
  );
};

const App = () => {
  const divs = [
    { id: 1, title: 'Div 1', content: 'Content for Div 1' },
    { id: 2, title: 'Div 2', content: 'Content for Div 2' },
    { id: 3, title: 'Div 3', content: 'Content for Div 3' },
  ];

  return (
    <div>
      {divs.map((div) => (
        <MotionDiv key={div.id} id={div.id} title={div.title} content={div.content} />
      ))}
    </div>
  );
};

export default App;
