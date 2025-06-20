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


    </div>
  )
}
















      // <Edit/>
      // <Trash2 />