export const filter = (obj = {}, values = []) => {
  if (!Array.isArray(values)) {
    values = [values];
  }

  let out = {};
  Object.keys(obj).forEach((el) => {
    if (!values.includes(el)) {
      out[el] = obj[el];
    }
    return;
  })

  return out;
}
