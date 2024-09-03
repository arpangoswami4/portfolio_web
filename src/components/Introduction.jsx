import React from "react";
import SocialIcons from "./SocialIcons";
import Button from "./Button";
import selfImage from "../images/selfImage.jpg";
import portFolioApi from "../api/portfolioApi";

const Introduction = () => {
  const downloadCV = () => {
    portFolioApi
      .get("/download_cv", { responseType: "blob" })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.setAttribute("download", "arpan_goswami_CV_24_rails.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
  };
  return (
    <section className="flex flex-row">
      <div className="p-16 flex flex-col sm:w-3/5">
        <div className="text-black w-full">
          <h3 className="text-2xl">Hello, I am</h3>
          <h1 className="text-4xl">Arpan</h1>
          <h1 className="text-4xl">Goswami</h1>
          <p className="text-xl mt-4">
            Experienced software developer with almost three years of industry
            experience with keen interest in Full Stack web devlopment. My
            passion for programming, eagerness to learn and clear technical
            concepts make me good at problem solving and crafting
            forward-thinking solutions.
          </p>
        </div>
        <SocialIcons />
        <div className="flex flex-row justify-center">
          <Button onClick={downloadCV}>Download CV</Button>
        </div>
      </div>
      <div className="sm:w-2/5 bg-secondary justify-center items-center flex rounded-l-full">
        <img
          src={selfImage}
          className="w-44 rounded-full border-2 border-tertiary"
          alt="self"
        />
      </div>
    </section>
  );
};

export default Introduction;
