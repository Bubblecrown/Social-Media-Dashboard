import React, { useContext, useState } from "react";
import { SwitchContext } from "../../App";

export default function NavBar() {
  const toggleSwitch = (checked: any) => {
    setMode(checked);
  };
  const {mode, setMode} = useContext(SwitchContext)
  const [enable, setEnable] = useState(false);
  return (
    <nav className="px-[10%] py-8 flex flex-col lg:justify-between lg:flex-row">
      <section className="flex flex-wrap flex-col justify-center items-start">
        <h1 className="text-2xl font-bold text-[color:var(--VeryDarkBlue)]">
          Social Media Dashboard
        </h1>
        <p className="text-[12.5px] font-semibold text-[color:var(--DarkGrayishBlue)]">
          Total Followers: 23,004
        </p>
      </section>
      <hr className="my-4 border-t-[color:var(--DarkGrayishBlue)] lg:border-none" />
      {/* Dark mode button */}
      <section className="flex flex-rows lg:gap-3 items-center justify-between lg:justify-center">
        <p className="text-sm font-semibold text-[color:var(--DarkGrayishBlue)]">
          Dark Mode
        </p>

        <span className="relative items-center cursor-pointer">
          {/* sr-only ซ่อนเอาไว้ในเพจปกติเพื่อแสดงในโปรแกรมการอ่านหหน้าจอเท่านั้น เช่น ฟอร์มที่ไม่มี label เขียนไว้จะเป็นปัญหาสำหรับผู้มีปัญหาสายตาที่ใช้โปรแกรมการอ่านหน้าจอ แต่เราก็ต้องการสไตล์แบบไม่มี label เช่นกัน เราเลยใช้ sr-only เพื่อซ่อนมันในปกติ แต่มันก็จะแสดงหากมีใครใช้โปรแกรมการอ่านหน้าจอ*/}
          {/* ในกรณีนี้เราใช้ sr-only ในการซ่อนปุ่ม checkbox หรือจะใช้อย่างอื่นเช่น appearance none ก็ได้ */}
          <input
            type="checkbox"
            // ใช peer เพื่อสังเกต action ตรงนี้
            className="sr-only peer"
            checked={enable}
            onChange={toggleSwitch}
          />
          <div
            onClick={() => setEnable(!enable)}
            // peer สังเกตพฤติกรรมของการเช็คเพื่อทำให้บางสิ่งเกิดขึ้นกับอย่างอื่น
            // และมากระทำกับอันนี้
            className="w-12 h-6 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-[22px] after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-l from-[color:var(--LimeGreen)] to-[color:var(--Twitter)]"
          ></div>
        </span>
      </section>
      {/*End Dark mode button */}
    </nav>
  );
}
