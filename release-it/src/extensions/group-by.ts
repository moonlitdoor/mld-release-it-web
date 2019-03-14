export {}

declare global {
    interface Array<T> {
        groupBy<K>(fun: (item: T) => K): Array<Array<T>>;
    }
}

if (!Array.prototype.groupBy) {
    Array.prototype.groupBy = function <T, K>(fun: (item: T) => K): T[][] {
        return this.reduce(function (groups: T[][], item: T) {
            let i = 0;
            for (; i < groups.length; i++) {
                if (fun(groups[i][0]) === fun(item)) {
                    groups[i].push(item);
                    break;
                }
            }
            if (i == groups.length) {
                groups.push([item]);
            }
            return groups;
        }, []);
    }
}