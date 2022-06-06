// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = 0, sell = 1, profit = 0;
  
  if (prices.length <= 1) 
    return 0;
  
  while (sell < prices.length) {
    const newProfit = prices[sell] - prices[buy];

    if (newProfit < 0)
      buy = sell;

    if (newProfit > profit)
      profit = newProfit;
    
    sell++;
  }

  return profit;
};
