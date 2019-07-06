<template>
    <div class="nt-table">
        <div class="nt-table-header">
            <table>
                <thead>
                    <tr>
                        <th>nihfdsssssssssssssssao</th>
                        <th>nihao</th>
                        <th>nihao</th>
                        <th>nihao</th>
                        <th>nihao</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="nt-table-body">
            <table>
                <tbody>
                    <tr>
                       <td>lalalalal</td>
                       <td>lalalalal</td>
                       <td>lalalalal</td>
                       <td>lalalalal</td>
                       <td>lalalalal</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name:'nt-table'
}
</script>

<style>
table thead, table tr {
border-top-width: 1px;
border-top-style: solid;
border-top-color: rgb(211, 202, 221);
}
table {
    width: 200px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: rgb(211, 202, 221);
}

/* Padding and font style */
table td, table th {
padding: 5px 10px;
font-size: 12px;
font-family: Verdana;
color: rgb(95, 74, 121);
}

/* Alternating background colors */
table tr:nth-child(even) {
background: rgb(223, 216, 232)
}
table tr:nth-child(odd) {
background: #FFF
}
</style>
