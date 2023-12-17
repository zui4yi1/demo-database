export const getUserList = (params) => {
  console.log("====query params====", JSON.parse(JSON.stringify(params || {})));
  const { userName = "", pageSize = 10, pageNum = 1, ...rest } = params || {};
  const keys = Object.keys(rest);
  const userinfos = JSON.parse(localStorage.getItem("userinfos") || "[]"); // 暂时不考虑数组, 故若有数组的查询则返回都是空

  const filterRes = userinfos.filter((user) => {
    if (!(user.userName || "").includes(userName)) return false;
    if (
      keys.some((key) => {
        return user[key] !== rest[key];
      })
    ) {
      return false;
    }
    return true;
  });

  const lastRes = filterRes.slice((pageNum - 1) * pageSize, pageNum * pageSize);

  const res = {
    code: 200,
    data: {
      list: lastRes,
      total: filterRes.length,
    },
  };

  console.log("====responst data====", JSON.parse(JSON.stringify(res || {})));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 300);
  });
};

export const getDict = (key) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dict = JSON.parse(localStorage.getItem(key) || "[]");
      resolve(dict);
    }, 300);
  });
};

/**
 * 批量获取数据字典
 * @param {*} keys 数组或","隔开的字符串
 * @returns
 */
export const getDicts = (keys = []) => {
  const _keys = typeof keys === "string" ? keys.split(",") : keys;
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = {};
      _keys.forEach((key) => {
        res[key] = JSON.parse(localStorage.getItem(key) || "[]");
      });
      resolve(res);
    }, 300);
  });
};

export const getUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userinfos = JSON.parse(localStorage.getItem("userinfos") || "[]");

      resolve(userinfos.find((t) => t.id === id));
    }, 300);
  });
};

export const updateUser = (obj) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userinfos = JSON.parse(localStorage.getItem("userinfos") || "[]");
      const inx = userinfos.findIndex((t) => t.id === obj.id);
      userinfos.splice(inx, 1, obj);
      localStorage.setItem("userinfos", JSON.stringify(userinfos));
      resolve({ code: 200 });
    }, 300);
  });
};

export const addUser = (obj) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userinfos = JSON.parse(localStorage.getItem("userinfos") || "[]");
      obj.id = new Date().getTime().toString();
      userinfos.unshift(obj);
      localStorage.setItem("userinfos", JSON.stringify(userinfos));
      resolve({ code: 200 });
    }, 300);
  });
};

export const deleteUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userinfos = JSON.parse(localStorage.getItem("userinfos") || "[]");
      const inx = userinfos.findIndex((t) => t.id === id);
      userinfos.splice(inx, 1);
      localStorage.setItem("userinfos", JSON.stringify(userinfos));
      resolve({ code: 200 });
    }, 300);
  });
};
