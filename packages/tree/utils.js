const arr = [
    {
        label: "西游记",
        id: "111",
        state: "open",
        children: [
            {
                label: "孙悟空",
                id: "111-1",
                checked: true
            },
            {
                label: "猪八戒",
                id: "111-2",
                checked: true
            }
        ]
    },
    {
        label: "三国演义",
        id: "222",
        state: 'open',

        children: [
            {
                label: "关羽",
                id: "222-1",
                state: "open",
                children: [
                    {
                        label: "关平",
                        id: "222-1-1",
                        checked: true,
                    }
                ]
            },
            {
                label: "张飞",
                id: "222-2",
                children: [
                    {
                        label: "张苞",
                        id: "222-2-1"
                    }
                ]
            },
            {
                label: "刘备",
                id: "222-3",
                children: [
                    {
                        label: "阿斗",
                        id: "222-3-1"
                    }
                ]
            }
        ]
    }
]
const result = {}
const fun = (arr,dist=[]) => {
    arr.forEach(item => {
        if (!item.children) {
            return dist.push(item)
        }
        fun(item.children,dist)
    })
    return dist
}
arr.forEach(item => result[item.label] = fun(item.children))
// const a = fun(arr)
// console.log(a)
console.dir(result)