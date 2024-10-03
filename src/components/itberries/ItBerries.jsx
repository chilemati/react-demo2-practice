import React from 'react'
import './itberries.scss';

const ItBerries = () => {
   /* 
    for width,height,padding,margin,gap, etec
    > the unit is in multiple of 4
    > 1.5 is 3
    0,4,8,12,16
    0,1,2,3,  4

    w-1 // 4px
    w-4 // 16
    w-2.5 // 10px
  */
  return (
    <div id='ItBerries' >
      <h2>ItBerries</h2>
      <div className="blog">
        <h3>Latest New on Ukraine War</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt velit odio exercitationem vero accusantium aut, in facilis commodi nam. Consectetur, quos velit.</p>
      </div>
      <div className="boxes">
        <div className="one">One</div>
        <div className="two">Two</div>
        <div className="three">Three</div>
        <div className="four">Four</div>
      </div>

      <h1 className="text-3xl text-blue-600 md:text-green-500  lg:text-red-500 text-center font-bold underline">
        Hello world!
      </h1>
      <p className="text-white md:text-gray-500 w-full md:w-[300px] border-2 p-4 mx-auto mt-4 rounded-[20px] bg-black  border-slate-200 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium
        repudiandae exercitationem.
      </p>

      <div className="flex items-center justify-between gap-4 flex-wrap  h-[30vh] border border-3 border-purple-500 mt-5 ">
        <div className="border border-3 w-full md:w-[300px] min-[20vh] border-green-500 text- ">01</div>
        <div className="border border-3 w-full md:w-[300px] min-[20vh] border-green-500 ">02</div>
        <div className="border border-3 w-full md:w-[300px] min-[20vh] border-green-500 ">03</div>
      </div>
      <div>
        <p className="text-mred text-2xl font-graypen font-semibold ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, ullam.</p>
        <p className="text-mgray text-center font-Roboto p-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, ullam.</p>
        <p className="text-mgray1 font-Raleway ] w-[60%] mx-auto text-40 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, ullam.</p>
      </div>

      <div className="w-full min-h-[313px] Itb  pl-[102px]  flex items-center justify-between ">
          <div className="flex-1">
            <h3 className="font-Raleway text-[30px] pt-[54px] font-bold text-white ">IT BERRIES</h3>
            <p className=" font-sans text-[15px] text-white text-justify ">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
            <button className="mt-[33px] border w-[139px] h-[25px] flex  text-white items-center justify-center  border-t-transparent border-b-transparent  border-l-white border-r-white ">READ MORE</button>
          </div>
          <div className="itb-img w-[388.05px] h-[313px] ">
              {/* <img src={itb} alt="itb log" /> */}
          </div>
      </div>
    </div>
  )
}

export default ItBerries