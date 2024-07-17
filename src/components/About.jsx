// import React from 'react'

// const About = () => {
//     return (
//         <section id="about" class="pt-36 pb-32 dark:bg-dark transition-all ease-in duration-500">
//             <div class="container">
//                 <div class="flex flex-wrap">
//                     <div className='w-full lg:w-2/3'>
//                         <div class="w-full">
//                             <div className="wrapperabout">
//                                 <h3 class="about-h3">Pengalaman</h3>
//                                 <ul class="font-medium text-secondary relative z-10">
//                                     <li>
//                                         <p class="inline-block text-base mb-3">Biro Sistem Informasi UAD - Student Employed <br/><span class="about-p">2024</span> (Frontend & UI/UX Design)</p>
//                                     </li>
//                                     <li>
//                                         <p class="inline-block text-base mb-3">Tries Digital Indonesia - Internship <br/><span class="about-p">2023</span> (UI/UX Design)</p>
//                                     </li>
//                                     <li>
//                                         <p class="inline-block text-base mb-3">MSV Studio AMIKOM - Internship <br/><span class="about-p">2023</span> (Creative Design)</p>
//                                     </li>
//                                     <li>
//                                         <p class="inline-block text-base mb-3">DYKTA Sticker <br/><span class="about-p">2021-2022</span> (Sticker Designer)</p>
//                                     </li>
//                                     <li>
//                                         <p class="inline-block text-base mb-3">Thuluse Pondok Hati - Freelance <br/><span class="about-p">2021-2022</span> (Graphic Design)</p>
//                                     </li>
//                                 </ul>
//                                 <div className="w-48 absolute -right-16 -bottom-5 fill-primary/30 dark:fill-primary2/30">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="list"><path d="M47.735.914H15.643a1.94,1.94,0,0,0-1.938,1.939V4.191H7.813A2.46,2.46,0,0,0,5.356,6.648V60.569a2.52,2.52,0,0,0,2.517,2.517H55.506a2.52,2.52,0,0,0,2.517-2.517V6.648a2.46,2.46,0,0,0-2.458-2.457H49.674V2.853A1.941,1.941,0,0,0,47.735.914ZM16.2,5.441V3.414H47.174v7H16.2ZM7.813,6.691h5.892v3.727H7.844Zm47.71,53.878a.018.018,0,0,1-.017.017l-47.65-.017V13.032H55.523Zm0-53.921v3.77H49.674V6.683Z"></path><circle cx="52.051" cy="57.307" r="1.287"></circle><circle cx="11.328" cy="57.307" r="1.287"></circle><rect width="26.156" height="2.5" x="23.288" y="22.922"></rect><rect width="26.156" height="2.5" x="23.288" y="30.321"></rect><path d="M19.417,20.293H14.159a1.25,1.25,0,0,0-1.25,1.25V26.8a1.25,1.25,0,0,0,1.25,1.25h5.258a1.25,1.25,0,0,0,1.25-1.25V21.543A1.25,1.25,0,0,0,19.417,20.293Zm-1.25,5.258H15.409V22.793h2.758Z"></path><rect width="26.156" height="2.5" x="23.288" y="40.347"></rect><rect width="26.156" height="2.5" x="23.288" y="47.744"></rect><path d="M19.417,37.718H14.159a1.25,1.25,0,0,0-1.25,1.25v5.258a1.25,1.25,0,0,0,1.25,1.25h5.258a1.25,1.25,0,0,0,1.25-1.25V38.968A1.25,1.25,0,0,0,19.417,37.718Zm-1.25,5.258H15.409V40.218h2.758Z"></path></svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="w-full lg:w-1/3">
//                         <div class="w-full">
//                             <div className="wrapperabout">
//                                 <h3 class="about-h3">Pendidikan</h3>
//                                 <ul class="font-medium text-secondary relative z-10">
//                                     <li>
//                                         <p class="inline-block text-base mb-3">Universitas Ahmad Dahlan <br/><span class="about-p">2020-2024</span> (Informatika)</p>
//                                     </li>
//                                     <li>
//                                         <p class="inline-block text-base mb-3">SMA Negeri 1 Prambanan <br/><span class="about-p">2018-2020</span> (IPA)</p>
//                                     </li>
//                                     {/* <li>
//                                         <p class="inline-block text-base mb-3">MTs Negeri 8 Sleman <br/><span class="about-p">2015-2017</span></p>
//                                     </li>
//                                     <li>
//                                         <p class="inline-block text-base mb-3">SD Negeri Prambanan <br/><span class="about-p">2008-2014</span></p>
//                                     </li> */}
//                                 </ul>
//                                 <div className="w-48 absolute -right-10 -bottom-5 fill-primary/30 dark:fill-primary2/30">
//                                     <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" id="study-growth">
//                                     <path d="M56.94 60.34a1 1 0 0 0-.3-1.11 5.53 5.53 0 0 1 0-8.46 1 1 0 0 0 .3-1.11A1 1 0 0 0 56 49H10.33a1 1 0 0 0-.65.23 7.55 7.55 0 0 0 0 11.54 1 1 0 0 0 .65.23H56A1 1 0 0 0 56.94 60.34zM52.74 56a7.63 7.63 0 0 0 1.08 3H10.71a5.53 5.53 0 0 1 0-8H53.82a7.63 7.63 0 0 0-1.08 3H11v2zM56.64 36.77a1 1 0 0 0 .3-1.11A1 1 0 0 0 56 35H10.33a1 1 0 0 0-.65.23 7.55 7.55 0 0 0 0 11.54 1 1 0 0 0 .65.23H56a1 1 0 0 0 .94-.66 1 1 0 0 0-.3-1.11 5.53 5.53 0 0 1 0-8.46zM52.74 42a7.63 7.63 0 0 0 1.08 3H10.71a5.53 5.53 0 0 1 0-8H53.82a7.63 7.63 0 0 0-1.08 3H11v2zM56.64 22.77a1 1 0 0 0 .3-1.11A1 1 0 0 0 56 21H38.92A7 7 0 0 0 33 15.08V10.92A7 7 0 0 0 39 4a1 1 0 0 0-1-1 7 7 0 0 0-6 3.41A7 7 0 0 0 26 3a1 1 0 0 0-1 1 7 7 0 0 0 6 6.92v4.16A7 7 0 0 0 25.08 21H10.33a1 1 0 0 0-.65.23 7.55 7.55 0 0 0 0 11.54 1 1 0 0 0 .65.23H56a1 1 0 0 0 .94-.66 1 1 0 0 0-.3-1.11 5.53 5.53 0 0 1 0-8.46zM36.87 5.13a5 5 0 0 1-3.74 3.74A5 5 0 0 1 36.87 5.13zm-9.74 0a5 5 0 0 1 3.74 3.74A5 5 0 0 1 27.13 5.13zM32 17a5 5 0 0 1 4.9 4H27.1A5 5 0 0 1 32 17zM52.74 28a7.63 7.63 0 0 0 1.08 3H10.71a5.53 5.53 0 0 1 0-8H53.82a7.63 7.63 0 0 0-1.08 3H11v2z"></path></svg>
//                                 </div>           
//                             </div>
//                         </div>
//                         <div class="w-full">
//                             <div className="wrapperabout">
//                                 <h3 class="about-h3">Kontak</h3>
//                                 <p class="font-medium text-secondary mb-4 leading-relaxed">Silahkan menghubungi kontak yang di bawah ini untuk berdiskusi lebih lanjut.</p>
//                                 <div class="flex flex-wrap mb-5 relative z-10">
//                                     {/* <!-- Whatsapp --> */}
//                                     <a href="https://wa.me/qr/N6JXGQNJ5JD6J1" class="sosmed-kontak">
//                                         <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                             <title>WhatsApp</title>
//                                             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
//                                     </a>
//                                     {/* <!-- Instagram --> */}
//                                     <a href="https://instagram.com/jasa.desain.jogja?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" class="sosmed-kontak">
//                                         <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                             <title>Instagram</title>
//                                             <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
//                                     </a>
//                                     {/* <!-- Tiktok --> */}
//                                     <a href="https://www.tiktok.com/@gifourproduction" class="sosmed-kontak">
//                                         <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                             <title>TikTok</title>
//                                             <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
//                                     </a>
//                                     {/* <!-- Youtube--> */}
//                                     <a href="https://www.tiktok.com/@gifourproduction" class="sosmed-kontak">
//                                         <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                             <title>YouTube</title>
//                                             <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
//                                     </a>
//                                     {/* <!-- Linkedin --> */}
//                                     <a href="https://www.linkedin.com/in/taufiq-aditya-putra-140402292/?originalSubdomain=id" class="sosmed-kontak">
//                                         <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                             <title>LinkedIn</title>
//                                             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
//                                     </a>
//                                     {/* <!-- Gmail --> */}
//                                     <a href="taufiqadityaputra@gmail.comd" class="sosmed-kontak">
//                                         <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
//                                     </a>
//                                 </div>
//                                 <div className="w-48 absolute -right-10 -bottom-10 fill-primary/30 dark:fill-primary2/30">
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="browser"><path d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1Zm13 15a12.94 12.94 0 0 1-.64 4h-6.57a38 38 0 0 0 .21-4 38 38 0 0 0-.21-4H25a1 1 0 0 0 0-2h-3.49a19.39 19.39 0 0 0-2.12-6.54A13 13 0 0 1 29 16ZM16 29c-1.17 0-2.71-2.61-3.49-7h7c-.8 4.39-2.34 7-3.51 7Zm-3.78-9a37.24 37.24 0 0 1 0-8h7.57a36.45 36.45 0 0 1 .21 4 36.45 36.45 0 0 1-.22 4ZM16 3c1.17 0 2.71 2.61 3.49 7h-7c.8-4.39 2.34-7 3.51-7Zm-3.39.46A19.39 19.39 0 0 0 10.49 10h-6a13 13 0 0 1 8.12-6.54ZM3 16a12.94 12.94 0 0 1 .64-4h6.58a37.82 37.82 0 0 0 0 8H7a1 1 0 0 0 0 2h3.49a19.39 19.39 0 0 0 2.12 6.54A13 13 0 0 1 3 16Zm16.39 12.54A19.39 19.39 0 0 0 21.51 22h6a13 13 0 0 1-8.12 6.54Z" data-name="Layer 6"></path></svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div class="w-full px-4 mt-10">
//                         <h3 class="about-h3">Tools & Skills</h3>
//                         <p class="font-medium text-base text-secondary mb-6 lg:text-lg">Perangkat lunak dan keahlihan yang saya kuasain dengan keterampilan yang kuat dalam penggunaan.</p>
//                     </div>

//                     <div class="container mx-auto flex flex-wrap">
//                         <div class="wrappernewtool">
//                             <div class="containernewtool">
//                                 <img class="h-auto" src="./img/figma.svg" alt="Logo" />
//                             </div>
//                             <div class="tooltiptext absolute snap-center">
//                                 <h3 class="tools-h3">Figma</h3>
//                                 <p class="text-sm mt-1 text-secondary">UI/UX Design</p>
//                             </div>
//                         </div>
//                         <div class="wrappernewtool">
//                             <div class="containernewtool">
//                                 <img class="w-24 h-auto" src="./img/corel.svg" alt="Logo" />
//                             </div>
//                             <div class="tooltiptext absolute snap-center">
//                                 <h3 class="tools-h3">CorelDraw</h3>
//                                 <p class="text-sm mt-1 text-secondary">Graphic Design</p>
//                             </div>
//                         </div>
//                         <div class="wrappernewtool">
//                             <div class="containernewtool">
//                                 <img class="h-auto" src="./img/blender.svg" alt="Logo" />
//                             </div>
//                             <div class="tooltiptext absolute snap-center">
//                                 <h3 class="tools-h3">Blender</h3>
//                                 <p class="text-sm mt-1 text-secondary">3D Modelling</p>
//                             </div>
//                         </div>
//                         <div class="wrappernewtool">
//                             <div class="containernewtool">
//                                 <img class="h-auto" src="./img/premiere.svg" alt="Logo" />
//                             </div>
//                             <div class="tooltiptext absolute snap-center">
//                                 <h3 class="tools-h3">Premiere</h3>
//                                 <p class="text-sm mt-1 text-secondary">Vidio Editor</p>
//                             </div>
//                         </div>
//                         <div class="wrappernewtool">
//                             <div class="containernewtool">
//                                 <img class="h-auto" src="./img/react.svg" alt="Logo" />
//                             </div>
//                             <div class="tooltiptext absolute snap-center">
//                                 <h3 class="tools-h3">React</h3>
//                                 <p class="text-sm mt-1 text-secondary">Library JS</p>
//                             </div>
//                         </div>
//                         <div class="wrappernewtool">
//                             <div class="containernewtool">
//                                 <img class="h-auto" src="./img/laravel.svg" alt="Logo" />
//                             </div>
//                             <div class="tooltiptext absolute snap-center">
//                                 <h3 class="tools-h3">Laravel</h3>
//                                 <p class="text-sm mt-1 text-secondary">PHP Framework</p>
//                             </div>
//                         </div>
//                         <div class="wrappernewtool">
//                             <div class="containernewtool">
//                                 <img class="h-auto" src="./img/codeigniter.svg" alt="Logo" />
//                             </div>
//                             <div class="tooltiptext absolute snap-center">
//                                 <h3 class="tools-h3">CodeIgniter</h3>
//                                 <p class="text-sm mt-1 text-secondary">PHP Framework</p>
//                             </div>
//                         </div>
//                         <div class="wrappernewtool">
//                             <div class="containernewtool">
//                                 <img class="h-auto" src="./img/tailwind.svg" alt="Logo" />
//                             </div>
//                             <div class="tooltiptext absolute snap-center">
//                                 <h3 class="tools-h3">Tailwind</h3>
//                                 <p class="text-sm mt-1 text-secondary">CSS Framework</p>
//                             </div>
//                         </div>
//                         <div class="wrappernewtool">
//                             <div class="containernewtool">
//                                 <img class="h-auto" src="./img/bootstrap.svg" alt="Logo" />
//                             </div>
//                             <div class="tooltiptext absolute snap-center">
//                                 <h3 class="tools-h3">Bootstrap</h3>
//                                 <p class="text-sm mt-1 text-secondary">CSS Framework</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <div class="container mb-4 mx-auto flex flex-wrap">
//                         <div class="wrappertool">
//                             <div class="containertool">
//                                 <div class="flex w-1/4 mr-2">
//                                     <img class="w-2/3 h-auto" src="./img/figma.svg" alt="Logo" />
//                                 </div>
//                                 <div class="px-0 flex-1">
//                                     <h3 class="tools-h3">Figma</h3>
//                                     <p class="text-sm mt-1 text-secondary">UI/UX Design</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="wrappertool">
//                             <div class="containertool">
//                                 <div class="flex w-1/4 mr-2">
//                                     <img class="w-2/3 h-auto" src="./img/corel.svg" alt="Logo" />
//                                 </div>
//                                 <div class="px-0 flex-1">
//                                     <h3 class="tools-h3">CorelDraw</h3>
//                                     <p class="text-sm mt-1 text-secondary">Graphic Design</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="wrappertool">
//                             <div class="containertool">
//                                 <div class="flex w-1/4 mr-2">
//                                     <img class="w-2/3 h-auto" src="./img/blender.svg" alt="Logo" />
//                                 </div>
//                                 <div class="px-0 flex-1">
//                                     <h3 class="tools-h3">Blender</h3>
//                                     <p class="text-sm mt-1 text-secondary">3D Modelling</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="wrappertool">
//                             <div class="containertool">
//                                 <div class="flex w-1/4 mr-2">
//                                     <img class="w-2/3 h-auto" src="./img/premiere.svg" alt="Logo" />
//                                 </div>
//                                 <div class="px-0 flex-1">
//                                     <h3 class="tools-h3">Premiere</h3>
//                                     <p class="text-sm mt-1 text-secondary">Vidio Editor</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="wrappertool">
//                             <div class="containertool">
//                                 <div class="flex w-1/4 mr-2">
//                                     <img class="w-2/3 h-auto" src="./img/react.svg" alt="Logo" />
//                                 </div>
//                                 <div class="px-0 flex-1">
//                                     <h3 class="tools-h3">React</h3>
//                                     <p class="text-sm mt-1 text-secondary">Library JS</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="wrappertool">
//                             <div class="containertool">
//                                 <div class="flex w-1/4 mr-2">
//                                     <img class="w-2/3 h-auto" src="./img/laravel.svg" alt="Logo" />
//                                 </div>
//                                 <div class="px-0 flex-1">
//                                     <h3 class="tools-h3">Laravel</h3>
//                                     <p class="text-sm mt-1 text-secondary">PHP Framework</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="wrappertool">
//                             <div class="containertool">
//                                 <div class="flex w-1/4 mr-2">
//                                     <img class="w-2/3 h-auto" src="./img/codeigniter.svg" alt="Logo" />
//                                 </div>
//                                 <div class="px-0 flex-1">
//                                     <h3 class="tools-h3">CodeIgniter</h3>
//                                     <p class="text-sm mt-1 text-secondary">PHP Framework</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="wrappertool">
//                             <div class="containertool">
//                                 <div class="flex w-1/4 mr-2">
//                                     <img class="w-2/3 h-auto" src="./img/tailwind.svg" alt="Logo" />
//                                 </div>
//                                 <div class="px-0 flex-1">
//                                     <h3 class="tools-h3">Tailwind</h3>
//                                     <p class="text-sm mt-1 text-secondary">CSS Framework</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="wrappertool">
//                             <div class="containertool">
//                                 <div class="flex w-1/4 mr-2">
//                                 <img class="w-2/3 h-auto" src="./img/bootstrap.svg" alt="Logo" />
//                                 </div>
//                                 <div class="px-0 flex-1">
//                                     <h3 class="tools-h3">Bootstrap</h3>
//                                     <p class="text-sm mt-1 text-secondary">CSS Framework</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div> */}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About

import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
    const cardVariants = {
        offscreen: {
            opacity: 0,
            x: -50,
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 2, 
            }
        }
    };

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
        <section id="about" class="pt-24 pb-24 dark:bg-dark transition-all ease-in duration-500">
            <div class="container">
                <div class="flex flex-wrap">
                    <motion.div className='w-full lg:w-2/3' initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.8 }} variants={cardVariants}>
                        <div className="w-full" >
                            <div className="wrapperabout" >
                                <h3 class="about-h3">Pengalaman</h3>
                                <ul class="font-medium text-secondary relative z-10">
                                    <li>
                                        <p class="inline-block text-base mb-3">Biro Sistem Informasi UAD - Student Employed <br/><span class="about-p">2024</span> (Frontend & UI/UX Design)</p>
                                    </li>
                                    <li>
                                        <p class="inline-block text-base mb-3">Tries Digital Indonesia - Internship <br/><span class="about-p">2023</span> (UI/UX Design)</p>
                                    </li>
                                    <li>
                                        <p class="inline-block text-base mb-3">MSV Studio AMIKOM - Internship <br/><span class="about-p">2023</span> (Creative Design)</p>
                                    </li>
                                    <li>
                                        <p class="inline-block text-base mb-3">DYKTA Sticker <br/><span class="about-p">2021-2022</span> (Sticker Designer)</p>
                                    </li>
                                    <li>
                                        <p class="inline-block text-base mb-3">Thuluse Pondok Hati - Freelance <br/><span class="about-p">2021-2022</span> (Graphic Design)</p>
                                    </li>
                                </ul>
                                <div className="w-48 absolute -right-16 -bottom-5 fill-primary/30 dark:fill-primary2/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="list"><path d="M47.735.914H15.643a1.94,1.94,0,0,0-1.938,1.939V4.191H7.813A2.46,2.46,0,0,0,5.356,6.648V60.569a2.52,2.52,0,0,0,2.517,2.517H55.506a2.52,2.52,0,0,0,2.517-2.517V6.648a2.46,2.46,0,0,0-2.458-2.457H49.674V2.853A1.941,1.941,0,0,0,47.735.914ZM16.2,5.441V3.414H47.174v7H16.2ZM7.813,6.691h5.892v3.727H7.844Zm47.71,53.878a.018.018,0,0,1-.017.017l-47.65-.017V13.032H55.523Zm0-53.921v3.77H49.674V6.683Z"></path><circle cx="52.051" cy="57.307" r="1.287"></circle><circle cx="11.328" cy="57.307" r="1.287"></circle><rect width="26.156" height="2.5" x="23.288" y="22.922"></rect><rect width="26.156" height="2.5" x="23.288" y="30.321"></rect><path d="M19.417,20.293H14.159a1.25,1.25,0,0,0-1.25,1.25V26.8a1.25,1.25,0,0,0,1.25,1.25h5.258a1.25,1.25,0,0,0,1.25-1.25V21.543A1.25,1.25,0,0,0,19.417,20.293Zm-1.25,5.258H15.409V22.793h2.758Z"></path><rect width="26.156" height="2.5" x="23.288" y="40.347"></rect><rect width="26.156" height="2.5" x="23.288" y="47.744"></rect><path d="M19.417,37.718H14.159a1.25,1.25,0,0,0-1.25,1.25v5.258a1.25,1.25,0,0,0,1.25,1.25h5.258a1.25,1.25,0,0,0,1.25-1.25V38.968A1.25,1.25,0,0,0,19.417,37.718Zm-1.25,5.258H15.409V40.218h2.758Z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div class="w-full lg:w-1/3" initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.8 }} variants={cardVariants2}>
                        <div className="w-full">
                            <div className="wrapperabout">
                                <h3 class="about-h3">Pendidikan</h3>
                                <ul class="font-medium text-secondary relative z-10">
                                    <li>
                                        <p class="inline-block text-base mb-3">Universitas Ahmad Dahlan <br/><span class="about-p">2020-2024</span> (Informatika)</p>
                                    </li>
                                    <li>
                                        <p class="inline-block text-base mb-3">SMA Negeri 1 Prambanan <br/><span class="about-p">2018-2020</span> (IPA)</p>
                                    </li>
                                    {/* <li>
                                        <p class="inline-block text-base mb-3">MTs Negeri 8 Sleman <br/><span class="about-p">2015-2017</span></p>
                                    </li>
                                    <li>
                                        <p class="inline-block text-base mb-3">SD Negeri Prambanan <br/><span class="about-p">2008-2014</span></p>
                                    </li> */}
                                </ul>
                                <div className="w-48 absolute -right-10 -bottom-5 fill-primary/30 dark:fill-primary2/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" id="study-growth">
                                    <path d="M56.94 60.34a1 1 0 0 0-.3-1.11 5.53 5.53 0 0 1 0-8.46 1 1 0 0 0 .3-1.11A1 1 0 0 0 56 49H10.33a1 1 0 0 0-.65.23 7.55 7.55 0 0 0 0 11.54 1 1 0 0 0 .65.23H56A1 1 0 0 0 56.94 60.34zM52.74 56a7.63 7.63 0 0 0 1.08 3H10.71a5.53 5.53 0 0 1 0-8H53.82a7.63 7.63 0 0 0-1.08 3H11v2zM56.64 36.77a1 1 0 0 0 .3-1.11A1 1 0 0 0 56 35H10.33a1 1 0 0 0-.65.23 7.55 7.55 0 0 0 0 11.54 1 1 0 0 0 .65.23H56a1 1 0 0 0 .94-.66 1 1 0 0 0-.3-1.11 5.53 5.53 0 0 1 0-8.46zM52.74 42a7.63 7.63 0 0 0 1.08 3H10.71a5.53 5.53 0 0 1 0-8H53.82a7.63 7.63 0 0 0-1.08 3H11v2zM56.64 22.77a1 1 0 0 0 .3-1.11A1 1 0 0 0 56 21H38.92A7 7 0 0 0 33 15.08V10.92A7 7 0 0 0 39 4a1 1 0 0 0-1-1 7 7 0 0 0-6 3.41A7 7 0 0 0 26 3a1 1 0 0 0-1 1 7 7 0 0 0 6 6.92v4.16A7 7 0 0 0 25.08 21H10.33a1 1 0 0 0-.65.23 7.55 7.55 0 0 0 0 11.54 1 1 0 0 0 .65.23H56a1 1 0 0 0 .94-.66 1 1 0 0 0-.3-1.11 5.53 5.53 0 0 1 0-8.46zM36.87 5.13a5 5 0 0 1-3.74 3.74A5 5 0 0 1 36.87 5.13zm-9.74 0a5 5 0 0 1 3.74 3.74A5 5 0 0 1 27.13 5.13zM32 17a5 5 0 0 1 4.9 4H27.1A5 5 0 0 1 32 17zM52.74 28a7.63 7.63 0 0 0 1.08 3H10.71a5.53 5.53 0 0 1 0-8H53.82a7.63 7.63 0 0 0-1.08 3H11v2z"></path></svg>
                                </div>           
                            </div>
                        </div>
                        <div class="w-full">
                            <div className="wrapperabout">
                                <h3 class="about-h3">Kontak</h3>
                                <p class="font-medium text-secondary mb-4 leading-relaxed">Silahkan menghubungi kontak yang di bawah ini untuk berdiskusi lebih lanjut.</p>
                                <div class="flex flex-wrap mb-5 relative z-10">
                                    {/* <!-- Whatsapp --> */}
                                    <a href="https://wa.me/qr/N6JXGQNJ5JD6J1" class="sosmed-kontak">
                                        <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>WhatsApp</title>
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                    </a>
                                    {/* <!-- Instagram --> */}
                                    <a href="https://instagram.com/jasa.desain.jogja?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" class="sosmed-kontak">
                                        <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>Instagram</title>
                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                                    </a>
                                    {/* <!-- Tiktok --> */}
                                    <a href="https://www.tiktok.com/@gifourproduction" class="sosmed-kontak">
                                        <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>TikTok</title>
                                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                                    </a>
                                    {/* <!-- Youtube--> */}
                                    <a href="https://www.tiktok.com/@gifourproduction" class="sosmed-kontak">
                                        <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>YouTube</title>
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                    </a>
                                    {/* <!-- Linkedin --> */}
                                    <a href="https://www.linkedin.com/in/taufiq-aditya-putra-140402292/?originalSubdomain=id" class="sosmed-kontak">
                                        <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>LinkedIn</title>
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    </a>
                                    {/* <!-- Gmail --> */}
                                    <a href="taufiqadityaputra@gmail.comd" class="sosmed-kontak">
                                        <svg role="img" width="20" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                                    </a>
                                </div>
                                <div className="w-48 absolute -right-10 -bottom-10 fill-primary/30 dark:fill-primary2/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="browser"><path d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1Zm13 15a12.94 12.94 0 0 1-.64 4h-6.57a38 38 0 0 0 .21-4 38 38 0 0 0-.21-4H25a1 1 0 0 0 0-2h-3.49a19.39 19.39 0 0 0-2.12-6.54A13 13 0 0 1 29 16ZM16 29c-1.17 0-2.71-2.61-3.49-7h7c-.8 4.39-2.34 7-3.51 7Zm-3.78-9a37.24 37.24 0 0 1 0-8h7.57a36.45 36.45 0 0 1 .21 4 36.45 36.45 0 0 1-.22 4ZM16 3c1.17 0 2.71 2.61 3.49 7h-7c.8-4.39 2.34-7 3.51-7Zm-3.39.46A19.39 19.39 0 0 0 10.49 10h-6a13 13 0 0 1 8.12-6.54ZM3 16a12.94 12.94 0 0 1 .64-4h6.58a37.82 37.82 0 0 0 0 8H7a1 1 0 0 0 0 2h3.49a19.39 19.39 0 0 0 2.12 6.54A13 13 0 0 1 3 16Zm16.39 12.54A19.39 19.39 0 0 0 21.51 22h6a13 13 0 0 1-8.12 6.54Z" data-name="Layer 6"></path></svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div class="w-full px-4 mt-10" initial="offscreen" whileInView="onscreen" viewport={{ amount: 0.8 }} variants={cardVariants2}>
                        <h3 class="about-h3">Tools & Skills</h3>
                        <p class="font-medium text-base text-secondary mb-6 lg:text-lg">Perangkat lunak dan keahlihan yang saya kuasain dengan keterampilan yang kuat dalam penggunaan.</p>

                        <div class="container mx-auto flex flex-wrap">
                            <div class="wrappernewtool">
                                <div class="containernewtool">
                                    <img class="h-auto" src="./img/figma.svg" alt="Logo" />
                                </div>
                                <div class="tooltiptext absolute snap-center">
                                    <h3 class="tools-h3">Figma</h3>
                                    <p class="text-sm mt-1 text-secondary">UI/UX Design</p>
                                </div>
                            </div>
                            <div class="wrappernewtool">
                                <div class="containernewtool">
                                    <img class="w-24 h-auto" src="./img/corel.svg" alt="Logo" />
                                </div>
                                <div class="tooltiptext absolute snap-center">
                                    <h3 class="tools-h3">CorelDraw</h3>
                                    <p class="text-sm mt-1 text-secondary">Graphic Design</p>
                                </div>
                            </div>
                            <div class="wrappernewtool">
                                <div class="containernewtool">
                                    <img class="h-auto" src="./img/blender.svg" alt="Logo" />
                                </div>
                                <div class="tooltiptext absolute snap-center">
                                    <h3 class="tools-h3">Blender</h3>
                                    <p class="text-sm mt-1 text-secondary">3D Modelling</p>
                                </div>
                            </div>
                            <div class="wrappernewtool">
                                <div class="containernewtool">
                                    <img class="h-auto" src="./img/premiere.svg" alt="Logo" />
                                </div>
                                <div class="tooltiptext absolute snap-center">
                                    <h3 class="tools-h3">Premiere</h3>
                                    <p class="text-sm mt-1 text-secondary">Vidio Editor</p>
                                </div>
                            </div>
                            <div class="wrappernewtool">
                                <div class="containernewtool">
                                    <img class="h-auto" src="./img/react.svg" alt="Logo" />
                                </div>
                                <div class="tooltiptext absolute snap-center">
                                    <h3 class="tools-h3">React</h3>
                                    <p class="text-sm mt-1 text-secondary">Library JS</p>
                                </div>
                            </div>
                            <div class="wrappernewtool">
                                <div class="containernewtool">
                                    <img class="h-auto" src="./img/laravel.svg" alt="Logo" />
                                </div>
                                <div class="tooltiptext absolute snap-center">
                                    <h3 class="tools-h3">Laravel</h3>
                                    <p class="text-sm mt-1 text-secondary">PHP Framework</p>
                                </div>
                            </div>
                            <div class="wrappernewtool">
                                <div class="containernewtool">
                                    <img class="h-auto" src="./img/codeigniter.svg" alt="Logo" />
                                </div>
                                <div class="tooltiptext absolute snap-center">
                                    <h3 class="tools-h3">CodeIgniter</h3>
                                    <p class="text-sm mt-1 text-secondary">PHP Framework</p>
                                </div>
                            </div>
                            <div class="wrappernewtool">
                                <div class="containernewtool">
                                    <img class="h-auto" src="./img/tailwind.svg" alt="Logo" />
                                </div>
                                <div class="tooltiptext absolute snap-center">
                                    <h3 class="tools-h3">Tailwind</h3>
                                    <p class="text-sm mt-1 text-secondary">CSS Framework</p>
                                </div>
                            </div>
                            <div class="wrappernewtool">
                                <div class="containernewtool">
                                    <img class="h-auto" src="./img/bootstrap.svg" alt="Logo" />
                                </div>
                                <div class="tooltiptext absolute snap-center">
                                    <h3 class="tools-h3">Bootstrap</h3>
                                    <p class="text-sm mt-1 text-secondary">CSS Framework</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* <div class="container mb-4 mx-auto flex flex-wrap">
                        <div class="wrappertool">
                            <div class="containertool">
                                <div class="flex w-1/4 mr-2">
                                    <img class="w-2/3 h-auto" src="./img/figma.svg" alt="Logo" />
                                </div>
                                <div class="px-0 flex-1">
                                    <h3 class="tools-h3">Figma</h3>
                                    <p class="text-sm mt-1 text-secondary">UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                        <div class="wrappertool">
                            <div class="containertool">
                                <div class="flex w-1/4 mr-2">
                                    <img class="w-2/3 h-auto" src="./img/corel.svg" alt="Logo" />
                                </div>
                                <div class="px-0 flex-1">
                                    <h3 class="tools-h3">CorelDraw</h3>
                                    <p class="text-sm mt-1 text-secondary">Graphic Design</p>
                                </div>
                            </div>
                        </div>
                        <div class="wrappertool">
                            <div class="containertool">
                                <div class="flex w-1/4 mr-2">
                                    <img class="w-2/3 h-auto" src="./img/blender.svg" alt="Logo" />
                                </div>
                                <div class="px-0 flex-1">
                                    <h3 class="tools-h3">Blender</h3>
                                    <p class="text-sm mt-1 text-secondary">3D Modelling</p>
                                </div>
                            </div>
                        </div>
                        <div class="wrappertool">
                            <div class="containertool">
                                <div class="flex w-1/4 mr-2">
                                    <img class="w-2/3 h-auto" src="./img/premiere.svg" alt="Logo" />
                                </div>
                                <div class="px-0 flex-1">
                                    <h3 class="tools-h3">Premiere</h3>
                                    <p class="text-sm mt-1 text-secondary">Vidio Editor</p>
                                </div>
                            </div>
                        </div>
                        <div class="wrappertool">
                            <div class="containertool">
                                <div class="flex w-1/4 mr-2">
                                    <img class="w-2/3 h-auto" src="./img/react.svg" alt="Logo" />
                                </div>
                                <div class="px-0 flex-1">
                                    <h3 class="tools-h3">React</h3>
                                    <p class="text-sm mt-1 text-secondary">Library JS</p>
                                </div>
                            </div>
                        </div>
                        <div class="wrappertool">
                            <div class="containertool">
                                <div class="flex w-1/4 mr-2">
                                    <img class="w-2/3 h-auto" src="./img/laravel.svg" alt="Logo" />
                                </div>
                                <div class="px-0 flex-1">
                                    <h3 class="tools-h3">Laravel</h3>
                                    <p class="text-sm mt-1 text-secondary">PHP Framework</p>
                                </div>
                            </div>
                        </div>
                        <div class="wrappertool">
                            <div class="containertool">
                                <div class="flex w-1/4 mr-2">
                                    <img class="w-2/3 h-auto" src="./img/codeigniter.svg" alt="Logo" />
                                </div>
                                <div class="px-0 flex-1">
                                    <h3 class="tools-h3">CodeIgniter</h3>
                                    <p class="text-sm mt-1 text-secondary">PHP Framework</p>
                                </div>
                            </div>
                        </div>
                        <div class="wrappertool">
                            <div class="containertool">
                                <div class="flex w-1/4 mr-2">
                                    <img class="w-2/3 h-auto" src="./img/tailwind.svg" alt="Logo" />
                                </div>
                                <div class="px-0 flex-1">
                                    <h3 class="tools-h3">Tailwind</h3>
                                    <p class="text-sm mt-1 text-secondary">CSS Framework</p>
                                </div>
                            </div>
                        </div>
                        <div class="wrappertool">
                            <div class="containertool">
                                <div class="flex w-1/4 mr-2">
                                <img class="w-2/3 h-auto" src="./img/bootstrap.svg" alt="Logo" />
                                </div>
                                <div class="px-0 flex-1">
                                    <h3 class="tools-h3">Bootstrap</h3>
                                    <p class="text-sm mt-1 text-secondary">CSS Framework</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About
