"use client";
import { useState } from "react";

const Page = () => {
  const [model1, setModel1] = useState(true);
  const [model2, setModel2] = useState(false);
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDate(value);

    // ตรวจว่าตรงกับรูปแบบ dd/mm/yyyy หรือไม่
    const regex = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(25[0-9]{2})$/;
    if (!regex.test(value)) {
      setError("กรุณากรอกวันที่ให้ถูกต้อง เช่น 01/01/2568");
    } else {
      setError("");
    }
  };

  const goToNext = () => {
    if (!error && date !== "") {
      setModel1(false);
      setModel2(true);
    } else {
      setError("กรุณากรอกวันที่ให้ถูกต้องก่อนค่ะ ❤️");
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen w-full flex justify-center items-center">
      {model1 && (
        <div className="bg-white/50 w-auto px-8 py-10 rounded-xl flex flex-col justify-center items-center backdrop-blur-md">
          <h1 className="text-xl font-bold text-white">กรอกวันที่วันนี้สิคะ</h1>
          <input
            type="text"
            value={date}
            onChange={handleChange}
            className="bg-white/80 rounded-lg text-pink-700 font-bold mt-5 px-4 py-2 text-center"
            placeholder="เช่น 01/01/2568"
          />
          {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
          <button
            onClick={goToNext}
            className="bg-pink-700 text-white px-6 py-2 rounded-3xl mt-5 hover:bg-pink-800 transition"
          >
            กดตรงนี้ค่ะ
          </button>
        </div>
      )}

      {model2 && (
        <div className="bg-white/50 w-auto px-8 py-10 rounded-xl flex flex-col justify-center items-center backdrop-blur-md">
          <h1 className="text-xl font-bold text-white">
            วันนี้วันที่: {date} จำใว้ให้ดีๆ เลยนะคะ
          </h1>
          <button
            onClick={() => {
              setModel1(true);
              setModel2(false);
              setDate("");
            }}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-3xl mt-5 hover:bg-gray-400 transition"
          >
            กลับไปกรอกใหม่
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
