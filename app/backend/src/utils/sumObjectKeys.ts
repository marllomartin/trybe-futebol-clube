function sumObjectKeys(obj1: any, obj2: any) {
  return Object.keys(obj1).reduce((acc: any, key) => {
    acc[key] = obj1[key] + obj2[key];
    return acc;
  }, {});
}

export default sumObjectKeys;
