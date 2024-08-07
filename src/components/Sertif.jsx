import React from 'react'
import datasertif from '../data/sertif.json'
import { motion } from 'framer-motion';

const Sertif = () => {
    const cardVariants2 = {
        offscreen: {
            opacity: 0,
            y: 50,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 2, 
            }
        }
    };
  return (
    <section id="sertif" class="pt-24 pb-24 bg-slate-100 dark:bg-slate-800 transition-all ease-in duration-500">
        <div class="container">
            <motion.div class="w-full px-4" initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.2 }} variants={cardVariants2}>
                <div class="max-w-full mx-auto text-center mb-16">
                    <h4 class="font-semibold text-lg text-primary dark:text-primary2 mb-2">Sertifikat</h4>
                    <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white transition-all ease-in duration-500">Pencapaian Terkini</h2>
                    <p class="font-medium text-md text-secondary md:text-lg">Sertifikat yang telah saya capai selama proses karier saya menjadi bukti kompetensi dan dedikasi saya dalam berbagai bidang.</p>
                </div>
            </motion.div>

            <div class="flex flex-wrap" >
                    {datasertif.map((card, i) => (
                        <motion.div key={i} className="w-full md:w-1/2 xl:w-1/3" initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.2 }} variants={cardVariants2}>
                            <div class="bg-white rounded-xl dark:hover:shadow-primary2 ease-linear shadow-lg overflow-hidden m-4 dark:bg-dark transition-all duration-500 group">
                                <img class="w-full shadow-md group-hover:scale-110 transition-all duration-500 ease-out" src={card.imagesertif} alt=""/>
                                <div class="py-8 px-6">
                                    <h3 class="block mb-3 font-semibold text-xl text-dark truncate dark:text-white transition-all ease-in duration-500">{card.judulsertif}</h3>
                                    <p class="font-medium text-base text-secondary">{card.deskripsisertif}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>

        </div>
    </section>
  );
};

export default Sertif