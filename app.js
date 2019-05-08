"use strict";
var Main = /** @class */ (function () {
    function Main() {
        this.processed = [];
    }
    Main.prototype.initialize = function () {
        var graph = {
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
        };
        var costs = {
            B: 6,
            C: Infinity,
            D: Infinity,
            E: Infinity,
            F: 3,
            G: 5,
            H: Infinity
        };
        var parents = {
            B: 'A',
            C: undefined,
            D: undefined,
            E: undefined,
            F: 'A',
            G: 'A',
            H: undefined
        };
        var node = this.findLowestCostNode(costs);
        while (node !== undefined) {
            var cost = costs[node];
            var neighbors = graph[node];
            for (var n in neighbors) {
                var newCost = cost + neighbors[n];
                if (costs[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                }
            }
            this.processed.push(node);
            node = this.findLowestCostNode(costs);
        }
        console.log(costs);
        console.log(parents);
    };
    Main.prototype.findLowestCostNode = function (costs) {
        var min = Infinity;
        var newKey = undefined;
        for (var key in costs) {
            if ((costs[key] < min) && (this.processed.indexOf(key) === -1)) {
                min = costs[key];
                newKey = key;
            }
        }
        return newKey;
    };
    return Main;
}());
var main = new Main();
main.initialize();
