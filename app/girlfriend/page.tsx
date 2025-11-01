"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function girlfriend() {
    const params = useSearchParams();
    const router = useRouter();
    const date = params.get("date") ?? "";

    return (
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen w-full flex justify-center items-center">
            <div className="bg-white/50 w-auto px-8 py-10 rounded-xl flex flex-col justify-center items-center backdrop-blur-md">
                <h1 className="text-xl font-bold text-white">
                    วันนี้วันที่: {date || "—"} จำไว้ให้ดีๆ เลยนะคะ
                </h1>

                <button
                    onClick={() => router.push("/")}
                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded-3xl mt-5 hover:bg-gray-400 transition"
                >
                    กลับไปกรอกใหม่
                </button>
            </div>
        </div>
    );
}
