import Link from "next/link";

export default function HobbyPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">作品與專案</h1>
      <p className="mt-2 text-gray-700">這裡可以放你的設計與程式專案。</p>
      <Link href="/" className="mt-6 inline-block underline">
        回到首頁
      </Link>
    </div>
  );
}

