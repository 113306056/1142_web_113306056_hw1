import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full p-4">
      <div className="bg-gray-200 w-[320px] rounded-full">
      <Image src="/dog01.jpg" alt="dog01" width={80} height={80}/>


      <div>大頭照</div>
      <div>名字</div>
      <div>簡介</div>

      <div>
        <div>社群連結</div>
        <div>社群連結</div>
        <div>社群連結</div>
      </div>

      <div className="bg-gray-200">我的興趣</div>
      <div className="bg-gray-200">設計專案</div>
      <div className="bg-gray-200">程式專案</div>

      </div>
      </div>

   
   
        
  );
}
