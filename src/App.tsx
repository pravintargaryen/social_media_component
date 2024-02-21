import profilePhoto from "./assets/avatar-jessica.jpeg";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1f1f1f] rounded text-white py-[30px] px-[30px]">
      <img src={profilePhoto} className="rounded-full w-16 h-16" />
      <h1 className="text-[20px] mt-[20px]">Jesicca Randall</h1>
      <p className="text-[#c4f62e] mb-[20px] text-[12px] ">
        London, United Kingdom
      </p>
      <p className="text-[16px] mb-[20px] text-sm text-gray-300 text-[12px]">
        "Frontend developer and avid reader."
      </p>
      <span className="flex flex-col gap-[10px]">
        <button className="bg-[#333333] px-[60px] py-[10px] rounded hover:bg-[#c4f62e] hover:text-black text-[12px] font-bold">
          Github
        </button>
        <button className="bg-[#333333] px-[60px] py-[10px] rounded hover:bg-[#c4f62e] hover:text-black text-[12px] font-bold">
          Frontend Mentor
        </button>
        <button className="bg-[#333333] px-[60px] py-[10px] rounded hover:bg-[#c4f62e] hover:text-black text-[12px] font-bold">
          LinkedIn
        </button>
        <button className="bg-[#333333] px-[60px] py-[10px] rounded hover:bg-[#c4f62e] hover:text-black text-[12px] font-bold">
          Twitter
        </button>
        <button className="bg-[#333333] px-[60px] py-[10px] rounded hover:bg-[#c4f62e] hover:text-black text-[12px] font-bold">
          Instagram
        </button>
      </span>
    </div>
  );
}
