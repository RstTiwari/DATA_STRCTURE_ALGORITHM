

class GrapthWithMatrix:
    def __init__(self,vertices, directed):
        self.v = vertices
        self.directed = directed
        self.adj = [[0]*vertices for _ in range(vertices)]

    def add_edge(self, u ,v,weight=1):
        self.adj[u][v] = weight 
        if not self.directed:
            self.adj[v][u] = weight

    def showGraph(self):
        for i in range(self.v):
            print(self.adj[i],"===")


class GraphWithList:
    def __init__(self,vertices, directed):
        self.__v = vertices
        self.adj  = { 1+i:[] for i in range(vertices)}
        self.dir = directed

    def addEdge(self,u ,v):
        self.adj[u].append(v)
        if not self.dir:
            self.adj[v].append(u)
    
    def showGraph(self):
            print(self.adj)

    def bfs(self,start):
        vis = []
        queue = [start]
        vis.append(start)
        while queue:
            curNode =queue.pop(0)
            for item in self.adj[curNode]:
                if item not in vis:
                    vis.append(item)
                    queue.append(item)
                
        return vis
    
    def dfs(self,start,visited):
        vis = visited
        vis.append(start)
        for item in self.adj[start]:
            if item not in vis:
                self.dfs(item,vis)
        
        return vis


                
        



    
        

        

        



if __name__ == "__main__":
    g = GrapthWithMatrix(4,directed=True)
    g.add_edge(0,1)
    g.add_edge(0,2)
    g.add_edge(1,2)
    g.add_edge(2,3)
    print("---")
    g.showGraph()

    gWList = GraphWithList(9,directed=False)
    gWList.addEdge(1,2)
    gWList.addEdge(1,3)
    gWList.addEdge(2,8)
    gWList.addEdge(2,6)
    gWList.addEdge(3,4)
    gWList.addEdge(3,7)
    gWList.addEdge(4,5)
    gWList.addEdge(4,9)
    gWList.showGraph()
    vist=  gWList.dfs(3,[])
    print(vist)




