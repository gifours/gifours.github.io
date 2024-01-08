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
    <ul class="w-full flex flex-wrap justify-start xl:w-10/12 xl:mx-auto">
                {/* <!-- frontend  --> */}
                <li class="w-full item_wrap pt-12 mb-4 frontend all">
                    <div class="max-w-full mx-auto text-center">
                        <h4 class="porto-h4">Frond End Dev</h4>
                        <div className="line"></div>
                    </div>
                </li>
                {dataweb.map((card, i) => (
                <div key={i} className="md:w-1/2">
                    <li class="w-full p-4 item_wrap frontend all">
                        <div class="bg-white rounded-xl shadow-lg dark:bg-dark p-4 dark:hover:shadow-primary2 duration-500 transition-all ease-linear group">
                            <img className="w-full drop-shadow-sm shadow-md group-hover:scale-105 ease-linear duration-200 rounded-md" src={card.imageweb} alt="home" />
                            <div class="justify-between">
                                <div class="mb-2 pt-5">
                                    <h4 class="card__title">{card.judulweb}</h4>
                                    <p class="paragraph">{card.deskripsiweb}</p>
                                </div>
                                <div class="justify-between flex pt-2">
                                    <div>
                                        <a href={card.linkweb} class="more-btn">Lihat Detail</a>
                                    </div>
                                    <div class="justify-between flex">
                                        <p class="paragraph pr-2">Make by:</p>
                                        <svg class="logo-frontend" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d={card.imgtool1}/>
                                        </svg>
                                        <svg class="logo-frontend" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d={card.imgtool2}/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
                ))}

                {/* <!-- uiux  --> */}
                <li class="w-full item_wrap pt-12 mb-4 uiux all">
                    <div class="max-w-full mx-auto text-center">
                        <h4 class="porto-h4">UI/UX Designer</h4>
                        <div className="line"></div>
                    </div>
                </li>
                {datauiux.map((card, i) => (
                <div key={i} className="md:w-1/3">
                    <li class="w-full item_wrap p-4 uiux all">
                        <img src={card.imageuiux} alt="" class="px-4 md:px-0 w-full drop-shadow-lg dark:hover:drop-shadow-[0_8px_5px_#F4D160] hover:scale-110 dark:decoration-purple-200 ease-linear transition-all duration-500 rounded-md"/>
                        <div class="mb-2 pt-5 text-center">
                            <h4 class="card__title">{card.juduluiux}</h4>
                            <p class="paragraph">{card.deskripsiuiux}</p>
                        </div>
                    </li>
                </div>
                ))}

                {/* <!-- desain  --> */}
                <li class="w-full item_wrap pt-12 mb-4 desain all">
                    <div class="max-w-full mx-auto text-center">
                        <h4 class="porto-h4">Graphic Designer</h4>
                        <div className="line"></div>
                    </div>
                </li>
                {datadesain.map((card, i) => (
                    <div key={i} className="w-1/2 md:w-1/4">
                        <li class="item_wrap p-4 desain all">
                            <img src={card.imagedesain} alt="" class="w-full shadow-md hover:scale-110 ease-linear duration-500 rounded-md dark:hover:shadow-primary2 dark:hover:shadow-lg"/>
                        </li>    
                    </div>
                ))}

                {/* <!-- blender  --> */}
                <li class="w-full item_wrap pt-12 mb-4 blender all">
                    <div class="max-w-full mx-auto text-center">
                        <h4 class="porto-h4">3D Modelling</h4>
                        <div className="line"></div>
                    </div>
                </li>
                {datablender.map((card, i) => (
                    <div key={i} className="md:w-1/3">
                        <li class="w-full item_wrap p-4 blender all">
                            <div class="rounded-lg shadow-md  overflow-hidden relative hover:scale-95 transition-all duration-500 dark:hover:shadow-primary2 dark:hover:shadow-lg ease-linear group">
                                <img src={card.imageblender} alt="" class="h-full w-full group-hover:scale-150 group-hover:rotate-12 transition-all duration-300 ease-linear"/>
                            </div>
                        </li>  
                    </div>
                ))}
            </ul>
  );
};

export default App;
