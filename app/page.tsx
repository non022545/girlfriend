"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  // คำนวณวันที่วันนี้ (พ.ศ.) เพื่อไว้ตรวจเทียบ
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const beYear = now.getFullYear() + 543;
  const today = `${dd}/${mm}/${beYear}`;

  const validate = (value: string) => {
    const regex = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(25[0-9]{2})$/;
    return regex.test(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setDate(value);

    if (!validate(value)) {
      setError("กรุณากรอกวันที่ให้ถูกต้อง เช่น 01/01/2568");
    } else if (value !== today) {
      setError(`วันนี้คือ ${today} เท่านั้นนะคะ ❤️`);
    } else {
      setError("");
    }
  };

  const goToNext = () => {
    if (validate(date) && date === today) {
      setError("");
      const encoded = encodeURIComponent(date);
      router.push(`/girlfriend?date=${encoded}`);
    } else if (date !== today) {
      setError(`วันนี้คือ ${today} เท่านั้นนะคะ ❤️`);
    } else {
      setError("กรุณากรอกวันที่ให้ถูกต้องก่อนค่ะ ❤️");
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen w-full flex justify-center items-center">
      <div className="bg-white/50 w-auto px-8 py-10 rounded-xl flex flex-col justify-center items-center backdrop-blur-md">
        <h1 className="text-xl font-bold text-white">กรอกวันที่วันนี้สิคะ</h1>

        <input
          type="text"
          value={date}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") goToNext();
          }}
          className="bg-white/80 rounded-lg text-pink-700 font-bold mt-5 px-4 py-2 text-center"
          placeholder="เช่น 01/01/2568"
          inputMode="numeric"
        />

        {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}

        <button
          onClick={goToNext}
          disabled={date !== today || !!error}
          className={`px-6 py-2 rounded-3xl mt-5 transition ${
            date === today && !error
              ? "bg-pink-700 text-white hover:bg-pink-800"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
        >
          ไปหน้าถัดไปค่ะ
        </button>
      </div>
    </div>
  );
};

export default Page;
