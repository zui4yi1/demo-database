// 获取随机正整数
const getRandom = (times, start = 1) =>
  Math.floor(Math.random() * times) + start;

export const genUserInfos = () => {
  const arr = [];
  new Array(35).fill("").forEach((t, inx) => {
    //
    const age = getRandom(60, 10);
    const gender = getRandom(2).toString(); // 1,2,3,4
    const skill = getRandom(3).toString(); // 随机任意个兴趣
    const hobbyCount = getRandom(3, 0);
    const _hobby = new Array(hobbyCount)
      .fill("")
      .map(() => getRandom(4, 1).toString());
    const hobby = [...new Set(_hobby)];
    arr.push({
      id: `${inx + 1}`,
      userName: "张三" + inx,
      age,
      gender,
      skill,
      hobby,
      birthDate: "2020-12-12",
      address: "上海市普陀区金沙江路 1518 弄",
    });
  });
  return JSON.stringify(arr);
};
