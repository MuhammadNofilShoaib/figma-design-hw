import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="flex h-auto mx-[200px] my-[200px]">
      <div className="w-1/2 mr-[80px]">
      <h1 className="text-[60px] mb-[40px] text-black" style={{ lineHeight: "58.32px"}}>Hi I’m Mehmet Akif Karasu, 3D artist & sculptor.</h1>
      <p style={{color: "#606060", fontSize: "32px", fontWeight: "400",lineHeight: "37.44px"}}>My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.</p>
      <br />
      <p style={{color: "#606060", fontSize: "32px", fontWeight: "400",lineHeight: "37.44px"}}>Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.</p>
      </div>
      <div className="w-1/2 ">
      <img src="/OIP (1).jfif" alt="main" className="w-[421px] h-[500px] ml-[295px]"/></div>

      
    </div>
    <div className="flex gap-20 mx-[200px] text-black capitalize" style={{fontSize: "18px"}}>
        <div className="underline">main software</div>
        <div className="">Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger</div>
      </div>
      <br /><br />
      <div className="flex gap-20 mx-[200px] text-black capitalize" style={{fontSize: "18px"}}>
        <div className="underline text-white">main software</div>
        <div className="">Adobe CC, Figma, Ableton</div>
      </div>
      <br />
      <br />
      <div className="flex gap-20 mx-[200px] text-black capitalize" style={{fontSize: "18px"}}>
        <div className="underline">main skills</div>
        <div className="">Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design</div>
      </div>
      <hr className="bg-black w-[1500px] h-[2px] mx-[200px] my-[100px]" />

      <div className="flex justify-center text-black mx-[200px] text-[32px] gap-96">
        <div className="px-20">I am thrilled to answer to your next project ⟶</div>
        <div className="" style={{margin: "0 -300px 0 0"}}>makifkarasu@outlook.com</div>
        <br /><br />
        <br />
        <br />
      </div>
    </div>
  );
}
