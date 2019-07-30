<template>
    <div class="nt-loading">
        <img :src="srcurl" />
    </div>
</template>

<script>
import Earth from '../nt-styles/common/imgs/earth.svg';
import Spin from '../nt-styles/common/imgs/spin.svg';
import Disk from '../nt-styles/common/imgs/disk.svg';
export default {
    name: 'nt-loading',
    data() {
        return {
            srcurl: ''
        }
    },
    props: {
        type: {
            type: String,
            default: 'spin',
            validator: function (val) {
                return ['earth', 'spin', 'disk'].indexOf(val) > -1
            }
        }
    },
    created() {
        if (this.type === 'earth') this.srcurl = Earth;
        else if (this.type === 'spin') this.srcurl = Spin;
        else if (this.type === 'disk') this.srcurl = Disk;
    },

}
</script>

<style>
.nt-loading {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 99999999;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}
.nt-loading img {
    width: 100px !important;
    height: 100px !important;
}
</style>
