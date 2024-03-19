import css from "/public/svg/skills/css.svg";
import git from "/public/svg/skills/git.svg";
import html from "/public/svg/skills/html.svg";
import javascript from "/public/svg/skills/javascript.svg";
import typescript from "/public/svg/skills/typescript.svg";
import mysql from "/public/svg/skills/mysql.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import csharp from "/public/svg/skills/c-sharp.svg";
import dotnet from "/public/svg/skills/dotnet.svg";
// import abc from "../public/svg/skills/dotnet.svg"

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mysql":
      return mysql;
    case "csharp":
      return csharp;
    case "git":
      return git;
    case "dotnet":
      return dotnet;
    default:
      break;
  }
};
