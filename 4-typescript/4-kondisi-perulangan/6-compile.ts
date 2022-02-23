function timeout(n: number) {
  return new Promise(function (res) {
    setTimeout(res, n);
  });
}

export async function add(a: number, b: number) {
  await timeout(500);
  return a + b;
}

//== Run the program ==//
;(async function () {
  console.log(await add(3, 4));
})()