import * as Dicts from "./demodata/dicts/index";
import { genUserInfos } from "./demodata/user-data";
/** 导出DemoAPI */
export * as DemoAPI from "./demodata/api";

/** 导出init方法 */
export const initDemoDataBase = () => {
  const gender = Dicts.genGender();
  const hobby = Dicts.genHobby();
  const skill = Dicts.genSkill();
  const city = Dicts.genCity();
  const nation = Dicts.genNation();
  const userinfos = genUserInfos();

  localStorage.setItem("gender", gender);
  localStorage.setItem("hobby", hobby);
  localStorage.setItem("skill", skill);
  localStorage.setItem("city", city);
  localStorage.setItem("nation", nation);
  localStorage.setItem("userinfos", userinfos);
};
