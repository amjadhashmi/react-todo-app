import { Container, Edit, Trash2 } from "lucide-react";

export default function App() {
  return (

    <div  className=" bg-page-bg-light-blue w-full h-screen">


         {/*//////////////////////// Header///////////////////////////////// */}

          <div className="text-center ">

            <h1 className="text-4xl font-bold pt-8">Todo App</h1>

            <p className="p-2">stay organized and get thing done</p>

          </div>



        {/*/////////////////////////////// Input Div /////////////////////////////////*/}

        <div className="w-2/3 h-28 bg-white m-auto flex rounded-md mt-7">

          <input type="text" className="bg-white p-3 mr-2 w-full h-12 mt-7 ml-7 rounded-md border border-gray-300 " placeholder="What needs to be done?" />
          <button className="bg-add-btn-bright-blue text-white p-1 rounded-md w-20 h-12 mt-7 mr-7">Add</button>

        </div>




        {/*//////////////////////////// History Div  ///////////////////////////////////////*/}

        <div className="w-2/3 h-52 mt-8 bg-white m-auto">


                      

              <div className="flex justify-evenly">


                        {/*//// Box-1  /////*/}
                  <div className="w-72 h-24 mt-5 bg-total-count-box flex flex-col justify-center items-center">
                   
                    <h1 className="text-xl font-bold">0</h1>
                    <p className=" text-gray-600">Total</p>

                  </div>


                       {/*//// Box-2  /////*/}
                  <div className="w-72 h-24 mt-5 bg-completed-box flex flex-col justify-center items-center">
                  
                    <h1  className="text-xl font-bold text-green-600">0</h1>
                    <p className=" text-gray-600">Completed</p>

                  </div>


                       {/*//// Box-3  /////*/}
                  <div className="w-72 h-24 mt-5 bg-remaining-box flex flex-col justify-center items-center ">
                   
                    <h1  className="text-xl font-bold text-red-400">0</h1>
                    <p className=" text-gray-600">Remaining</p>

                  </div>

              </div>



              <div className="mt-5">
                <button className="bg-blue-500 px-3 py-1 ml-10 mr-2 rounded-md">All (0)</button>
                <button>Active (0)</button>
                <button>Completed(0)</button>
              </div>



        </div>





    </div>
  )
}
















      // <Edit/>
      // <Trash2 />