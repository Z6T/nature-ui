74745
<template>
    <div class="nt-table">
        <div class="nt-table__body">
            <table style="table-layout: fixed;" cellpadding="0" cellspacing="0" width="400">
                <thead>
                    <tr>
                        <th>game id</th>
                        <th>status</th>
                        <th>turn</th>
                        <th>last turn</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容四内容四内容四内容四内容四内容四内容四内容四内容四/td></td>
                    </tr>
                    <tr>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容四/td></td>
                    </tr>
                    <tr>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容四/td></td>
                    </tr>
                    <tr>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容四/td></td>
                    </tr>
                    <tr>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容四/td></td>
                    </tr>
                    <tr>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容四/td></td>
                    </tr>
                    <tr>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容四/td></td>
                    </tr>
                    <tr>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容一</td>
                        <td>内容四/td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { log } from 'util';
import { clearTimeout } from 'timers';
export default {
    name: 'nt-table',
    mounted() {
        let timer = 0;

        document.querySelector('.nt-table__body').addEventListener('scroll', function (e) {
            console.log(555);
            console.log(document.querySelectorAll('thead'));
            document.querySelectorAll('thead').forEach(item => {
                console.log(777);
                item.style.transform = `translateY(${e.target.scrollTop}px)`
                if (e.target.scrollTop < 10) return
            })
            // document.querySelectorAll('thead')
        });
    }
}
</script>

<style>
.nt-table-header {
    overflow: auto;
    position: relative;
    top: 0;
}
.nt-table-header > table:nth-child(1) {
    position: absolute;
    left: 0;
}
.nt-table-header > table:nth-child(2) {
    position: absolute;
    left: 200px;
}
.nt-table__body {
    height: 200px;
    width: 300px;
    overflow: auto;
    position: relative;
}

table thead,
table tr {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: rgb(211, 202, 221);
}
table {
    /* width: 200px; */
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(211, 202, 221);
}

/* Padding and font style */
table td,
table th {
    padding: 5px 10px;
    font-size: 12px;
    font-family: Verdana;
    color: rgb(95, 74, 121);
}

/* Alternating background colors */
table tr:nth-child(even) {
    background: rgb(223, 216, 232);
}
table tr:nth-child(odd) {
    background: #fff;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 6px; /*滚动条宽度*/
    height: 6px; /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px;
    border-radius: 10px; /*滚动条的背景区域的圆角*/
    background-color: red; /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px; /*滚动条的圆角*/
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    background-color: green; /*滚动条的背景颜色*/
}
</style>
