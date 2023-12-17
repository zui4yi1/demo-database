// 获取随机正整数
const getRandom = (times, start = 1) =>
  Math.floor(Math.random() * times) + start;

const toString = (number) => {
  if (number < 10) return `0${number}`;
  return number.toString();
};

export const genUserInfos = () => {
  const arr = [];
  new Array(35).fill("").forEach((t, inx) => {
    //
    const age = getRandom(60, 10);
    const gender = getRandom(2).toString();
    const skill = [getRandom(3).toString()];
    const nation = toString(getRandom(56, 1));
    const hobbyCount = getRandom(3, 0); // 随机任意个兴趣
    const _hobby = new Array(hobbyCount)
      .fill("")
      .map(() => getRandom(3, 1).toString());
    const hobby = [...new Set(_hobby)];

    arr.push({
      id: `${inx + 1}`,
      userName: "张三" + (inx + 1),
      age,
      gender,
      skill,
      nation,
      hobby,
      birthDate: "2020-12-12",
      address: "上海市普陀区金沙江路 1518 弄",
    });
  });
  return JSON.stringify(arr);
};
