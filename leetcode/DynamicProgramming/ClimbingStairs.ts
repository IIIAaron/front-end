// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 爬n个台阶的方法 等于爬n-1个台阶的方法+爬n-2个台阶的方法
function climbStairs(n: number) {
  if (n < 1) return;
  let pre: number = 0,pro: number = 0,result: number = 1;
  for (let i = 1; i <= n; i++) {
    pre = pro;
    pro = result;
    result = pre + pro;
  }
  return result;
}
