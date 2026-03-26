import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full p-4">
      <div className="bg-gray-200 w-[320px] rounded-full p-4">
        <Image src="/dog01.jpg" alt="dog01" width={80} height={80} />

        <div>大頭照</div>
        <div>名字</div>
        <div>簡介</div>

        <div className="flex gap-3 mt-2">
          <div>社群連結</div>
          <div>社群連結</div>
          <div>社群連結</div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Link href="/about" className="bg-gray-200">
            我的興趣
          </Link>
          <Link href="/hobby" className="bg-gray-200">
            設計專案
          </Link>
          <Link href="/hobby" className="bg-gray-200">
            程式專案
          </Link>
        </div>
      </div>
    </div>
  );
}
