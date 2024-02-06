import Image from "next/image";
import { getCars } from "../../services/connection";

function HomePage() {
  const getCarsInfo = async () => {
    const response = await getCars();
  };
  getCarsInfo();
  return <></>;
}

export default HomePage;

{
  /* <main>
        <div className="animate-star mx-auto w-[400px] flex justify-center flex-col bg-black mt-[150px] p-5 rounded-[20px]">
          <h1>Testando Tawilind</h1>
          <div className="">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg"
              alt="img"
              width={500}
              height={100}
              className="w-[100%] h-[100%] p-8 object-cover border-2 border-white rounded-[20px]"
            />
          </div>
          <button className="my-4 bg-red-700 duration-300 ease-in-out hover:bg-red-500 text-white p-4 rounded-[20px] w-[40%] mx-auto">
            Say Hello
          </button>
        </div>
</main> */
}
