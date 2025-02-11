def better_solution(stocks:list):
    n = len(stocks)
    profit = 0
    minium= stocks[0]
    for i in range(1,n):
        tem_profit  =  stocks[i] - minium
        if tem_profit > profit:
            profit = tem_profit
        if  stocks[i]< minium:
            minium = stocks[i]
    return profit