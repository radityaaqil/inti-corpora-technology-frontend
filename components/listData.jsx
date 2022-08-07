import Link from "next/link";
import { useState } from "react";

const ListData = ({ data }) => {
  //Lite pagination
  const [initialValue, setInitialValue] = useState(0);
  const [finalValue, setFinalValue] = useState(10);

  //Next page
  const nextPage = () => {
    setInitialValue(initialValue + 10);
    setFinalValue(finalValue + 10);
  };

  //Prev page
  const prevPage = () => {
    setInitialValue(initialValue - 10);
    setFinalValue(finalValue - 10);
  };

  return (
    <div className="w-[240px] md:w-[700px] lg:w-[900px] mx-auto pt-4">
      <div className="flex justify-center text-xl font-bold">Data List</div>
      <div className="flex justify-between mt-2">
        <div>Click row to see detail</div>
        <Link href="/newData">
          <button className="p-1 text-xs border-2 border-black rounded-lg hover:bg-gray-400">
            New Entry
          </button>
        </Link>
      </div>

      <div className="flex border-2 border-black mt-2">
        <div className="border-r-2 border-black w-[37px] px-1 text-center">
          ID
        </div>
        <div className="border-r-2 border-black w-[65px] px-1 text-center">
          User ID
        </div>
        <div className="border-r-2 border-black px-1 w-[50px] md:w-[150px] lg:w-[200px] text-center">
          Title
        </div>
        <div className="px-1 w-[90px] md:w-[400px] lg:w-[600px] text-center">
          Body
        </div>
      </div>
      {data.slice(initialValue, finalValue).map((val, index) => {
        return (
          <Link key={index} href={`/detailData/${val.id}`}>
            <div
              className={`flex border-x-2 ${
                index == data.slice(initialValue, finalValue).length - 1
                  ? "border-b-2"
                  : null
              } ${
                (index + 1) % 2 == 0 ? "bg-gray-400" : null
              } border-black hover:bg-yellow-400 hover:cursor-pointer`}
            >
              <div className="border-r-2 border-black w-[37px] px-1 truncate text-center">
                {val.id}
              </div>
              <div className="border-r-2 border-black w-[65px] px-1 truncate text-center">
                {val.userId}
              </div>
              <div className="border-r-2 border-black px-1 w-[50px] md:w-[150px] lg:w-[200px] truncate">
                {val.title}
              </div>
              <div className="px-1 w-[90px] md:w-[400px] lg:w-[600px] truncate">
                {val.body}
              </div>
            </div>
          </Link>
        );
      })}
      <div className="flex justify-between mt-3">
        <div>
          <button
            className="text-xs px-2 py-1 rounded-lg border-2 border-black hover:bg-gray-400"
            hidden={initialValue == 0}
            onClick={prevPage}
          >
            Previous Page
          </button>
        </div>
        <div>
          <button
            className="text-xs px-2 py-1 rounded-lg border-2 border-black hover:bg-gray-400"
            hidden={finalValue == data.length}
            onClick={nextPage}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListData;
