export const output = (res : string) => ({
  ok: true,
  result: res,
});

export const error = (code : number, msg : string, data : string) => ({
  ok: false,
  code,
  msg,
  data,
});
