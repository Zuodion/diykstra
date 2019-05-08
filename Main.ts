class Main {
    private processed: any = [];
    public initialize () {
        let graph: any =
        {
            A: {
                B: 6,
                F: 3,
                G: 5
            },
            B: {
                C: 5,
                D: 7,
                H: 4
            },
            C: {
                E: 3
            },
            D: {
                E: 5
            },
            E: null,
            F: {
                H: 8
            },
            G: {
                C: 4,
                D: 3
            },
            H: {
                E: 8
            }
        }
        let costs: any = {
            B: 6,
            C: Infinity,
            D: Infinity,
            E: Infinity,
            F: 3,
            G: 5,
            H: Infinity
        }
        let parents: any = {
            B: 'A',
            C: undefined,
            D: undefined,
            E: undefined,
            F: 'A',
            G: 'A',
            H: undefined
        }
        let node: any = this.findLowestCostNode(costs)
        while (node !== undefined) {
            let cost = costs[node]
            let neighbors = graph[node]
            for (let n in neighbors) {
                let newCost = cost + neighbors[n]
                if (costs[n] > newCost) {
                    costs[n] = newCost
                    parents[n] = node
                }
            }
            this.processed.push(node)
            node = this.findLowestCostNode(costs)
        }
        console.log(costs)
        console.log(parents)
    }
    private findLowestCostNode (costs: any) {
        let min = Infinity
        let newKey = undefined
        for (let key in costs) {
            if ((costs[key] < min) && (this.processed.indexOf(key) === -1)) {
                min = costs[key]
                newKey = key
            }
        }
        return newKey;
    }
}
let main: Main = new Main()
main.initialize()
