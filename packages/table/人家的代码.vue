/* eslint-disable vue/require-v-for-key */
/**
* @file
* @author 何文林
* @date 2017/9/20
*/
<template>
	<div id="tableComponent" ref="tableScroll">
		<!--内容 -->
		<div class="content">
			<!--左边固定-->
			<div class="table-fixed-left"
					 v-if="showSelect && selectFixed">
				<div class="table-header"
						 :style="titleFixed == 'fixed' ? {position: 'absolute', overflow:'hidden', zIndex: 1}: {}">
					<table cellpadding="0px" cellspacing="0px" style="width: 50px;">
						<colgroup>
							<col style="width: 50px; min-width: 50px;"/>
						</colgroup>
						<thead>
						<tr :style="{height: titleHeight + 'px', borderBottom: (titleFixed=='auto') ? 0 :
							'1px solid #ddd'}">
							<th>
								<label for="allSelect" class="selectLable" @click="checkedAllItem">
									<check-box :isTrue="checkedAll"></check-box>
								</label>
							</th>
						</tr>
						</thead>
					</table>
				</div>
				<div class="table-body"
						 :style="titleFixed == 'fixed' ? {paddingTop: titleHeight + 'px', overflow: 'hidden', height: scrollHight + 'px'} : ''">
					<table cellpadding="0px" cellspacing="0px" style="width: 50px;" ref="tFixedLeft">
						<colgroup>
							<col style="width: 50px; min-width: 50px;"/>
						</colgroup>
						<tbody>
						<tr v-for="(item, index) in tdata"
								@mouseenter="mouseEnter(index)"
								@mouseout="mouseOut(index)"
								:class="toTrClass(index)"
								:style="{height: tdHeight + 'px'}">
							<td>
								<label :for="'left1' + index" class="selectLable">
									<input :id="'left1' + index"
												 type="checkbox"
												 :value="index" v-model="checkedItem"
												 :disabled="isDisAbled(index)">
									<check-box :isTrue="(checkedItem.indexOf(index) > -1)"></check-box>
								</label>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!--中间滚动内容-->
			<div class="table-scroll"
					 ref="cScroll"
					 :style="titleFixed == 'fixed' ? {overflow: 'auto', height: scrollHight + 'px'} : {}">
				<div class="table-header"
						 :style="titleFixed == 'fixed' ? {width: tableContentWith + 'px', position: 'absolute',overflow:'hidden'}: {}">
					<table class="scroll-header" :style="{width: setWithd}" ref="cHead">
						<colgroup>
							<col v-if="showSelect" style="width: 50px; min-width: 50px"/>
							<col v-for="item in tcolumns" :style="{width: item.width+'px', minWidth: item.width + 'px'}"/>
							<col v-if="showHandle" style="width: 150px; min-width: 150px"/>
						</colgroup>
						<thead>
						<tr :style="{height: titleHeight + 'px', borderBottom: (titleFixed=='auto') ? 0 :
						'1px solid #ddd'}">
							<th v-if="showSelect">
								<label for="allSelect" class="selectLable" @click="checkedAllItem">
									<check-box :isTrue="checkedAll"></check-box>
								</label>
							</th>
							<th v-for="item in tcolumns">{{item.title}}</th>
							<th v-if="showHandle">操作</th>
						</tr>
						</thead>
					</table>
				</div>
				<div class="table-body" :style="titleFixed == 'fixed' ? {paddingTop: titleHeight + 'px'} : ''">
					<table :style="{width: setWithd}">
						<colgroup>
							<col v-if="showSelect" style="width: 50px; min-width: 50px"/>
							<col v-for="item in tcolumns" :style="{width: item.width+'px', minWidth: item.width + 'px'}"/>
							<col v-if="showHandle" style="width: 150px; min-width: 150px"/>
						</colgroup>
						<tbody>
						<tr v-for="(dataItem, index) in tdata"
								@mouseenter.stop.prevent="mouseEnter(index)"
								@mouseout.stop.prevent="mouseOut(index)"
								v-on:click.stop="tItamClick(dataItem)"
								:class="toTrClass(index)"
								:style="{height: tdHeight + 'px'}"
						>
							<td v-if="showSelect" class="tbSelect">
								<label :for="'left1' + index" class="selectLable">
									<input :id="'left1' + index" type="checkbox"
												 :value="index" v-model="checkedItem"
												 :disabled="isDisAbled(index)">
									<check-box :isTrue="(checkedItem.indexOf(index) > -1)"></check-box>
								</label>
							</td>
							<!--<td v-for="item in tcolumns"-->
									<!--:class="'text' + item.textAlign"-->
									<!--@mouseup="selectText(item.selectText, dataItem[item.key])"-->
									<!--v-ellipsis="dataItem[item.key] + ',' +item.textLine">{{dataItem[item.key]}}-->
							<!--</td>-->
							<td v-for="item in tcolumns"
									:class="'text' + item.textAlign"
									v-ellipsis="dataItem[item.key] + ',' +item.textLine">{{dataItem[item.key]}}
							</td>
							<td :class="isDisAbled(index) ? 'textDisable' : ''"
									v-if="showHandle" class="handleAction">
								<slot name="operations" :item="dataItem">
									<span>编辑</span>
									<span>删除</span>
									<span>禁用1</span>
								</slot>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!--右边固定-->
			<div class="table-fixed-right"
					 v-if="showHandle && handleFixed">
				<div class="table-header"
						 :style="titleFixed == 'fixed' ? {width: tableContentWith + 'px', position: 'absolute',overflow:'hidden'}: {}">
					<table>
						<colgroup>
							<col style="width: 150px"/>
						</colgroup>
						<thead>
						<tr :style="{height: titleHeight + 'px', borderBottom: (titleFixed=='auto') ? 0 :
							'1px solid #ddd'}">
							<th>操作</th>
						</tr>
						</thead>
					</table>
				</div>
				<div class="table-body"
						 :style="titleFixed == 'fixed' ? {paddingTop: titleHeight + 'px', overflow: 'hidden', height: scrollHight + 'px'} : ''">
					<table ref="tFixedRight">
						<colgroup>
							<col style="width: 150px"/>
						</colgroup>
						<tbody>
						// eslint-disable-next-line vue/require-v-for-key
						<tr v-for="(item, index) in tdata"
								@mouseenter="mouseEnter(index)"
								@mouseout="mouseOut(index)"
								:class="toTrClass(index)"
								:style="{height: tdHeight + 'px'}"
						>
							<td :class="isDisAbled(index) ? 'textDisable' : ''" class="handleAction">
								<slot name="operations" :item="item">
									<span>编辑</span>
									<span>删除</span>
									<span>禁用1</span>
								</slot>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<!--分页-->
		<div class="page" v-if="page.totalPage">
			<pagination :total-page="page.totalPage"
									:size="'md'"
									v-model="currentPage"
									@change="changePage"
									:max-size="page.maxSize"></pagination>
		</div>
		<!--划词提示框-->
		<!--<p class="crossWord">{{crossWord}}</p>-->
	</div>
</template>

<script>
  import Pagination from './vue-page.vue'
  import checkBox from './checkbox.vue'
  export default{
    components: {
      Pagination,
      checkBox
    },
    props: {
      tcolumns: {
        type: Array,
        default: []
      },
      tdata: {
        type: Array,
        default: []
      },
      // 显示选择空间
      showSelect: {
        type: Boolean,
        default: false
      },
      // 显示操作列表
      showHandle: {
        type: Boolean,
        default: false
      },
      // 头部是否固定
      titleFixed: {
        type: String,
        default: 'auto'
      },
      titleHeight: {
        type: Number,
        default: 32
      },
      tdHeight: {
        type: Number,
        default: 50
      },
      scrollHight: {
        type: Number,
        default: 400
      },
      selectFixed: {
        type: Boolean,
        default: false
      },
      handleFixed: {
        type: Boolean,
        default: false
      },
      page: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        hoverIndex: -1,
        checkedItem: [],
        checkedAll: false,
        setWithd: '1000px',
        currentPage: 1,
        // 宽度配置
        checkBoxWidth: 50,
        tableContentWith: 600,
        handleWith: 150,
        crossWord: ''
      }
    },
    directives: {
      // 行数溢出省略号指令
      ellipsis: {
        bind(el, binding) {
          let line = 2
          if (binding.value) {
            let val = (
              binding.value).split(',')
            line = val[1]
          }
          setTimeout(() => {
            let max = el.offsetWidth
            max = max * line
            let text = (
              binding.value).trim().replace(' ', '　') //for fix white-space bug
            let ellipsisChar = '...'
            let clone = el.cloneNode(true)
            clone.style.visibility = 'hidden'
            clone.style.whiteSpace = 'nowrap'
            clone.style.width = 'auto'
            document.body.appendChild(clone)
            let width = clone.offsetWidth
            if (width > max) {
              let stop = Math.floor(text.length * max / width)
              let tempStr = text.substring(0, stop) + ellipsisChar
              clone.innerHTML = tempStr
              width = clone.offsetWidth
              if (width > max) {
                while (width > max && stop > 1) {
                  stop--
                  tempStr = text.substring(0, (
                    stop - 5)) + ellipsisChar
                  clone.innerHTML = tempStr
                  width = clone.offsetWidth
                }
              } else if (width < max) {
                while (width < max && stop < text.length) {
                  stop++
                  tempStr = text.substring(0, stop) + ellipsisChar
                  clone.innerHTML = tempStr
                  width = clone.offsetWidth
                }
                if (width > max) {
                  tempStr = text.substring(0, stop - 1) + ellipsisChar
                }
              }
              el.innerHTML = tempStr
            }
            document.body.removeChild(clone)
          }, 0)
        }
      }
    },
    methods: {
      mouseEnter(index) {
        this.hoverIndex = index
      },
      mouseOut(e) {
        this.hoverIndex = -1
      },
      // 鼠标点击一行
      tItamClick(item) {
        if (item.disable) {
          return
        }
        this.$emit('clickItem', item)
      },
      // 鼠标滑过 class
      toTrClass(index) {
        if (this.tdata[index] && this.tdata[index].disable) {
          return 'trDisable'
        }
        if (this.hoverIndex === index) {
          return 'mouseover'
        } else {
          return ''
        }
      },
      // 表格初始化宽度
      initTableWidth() {
        const tableScroll = this.$refs.tableScroll
        let AllWidth = 0
        if (!this.showSelect) {
          this.checkBoxWidth = 0
        } else {
          AllWidth += 50
        }
        if (!this.showHandle) {
          this.handleWith = 0
        } else {
          AllWidth += 150
        }
        // this.tableContentWith = tableScroll.offsetWidth - this.checkBoxWidth - this.handleWith
        this.tableContentWith = tableScroll.offsetWidth
        this.tcolumns.forEach(item => {
          AllWidth += item.width
        })
        if (AllWidth > tableScroll.offsetWidth) {
          this.setWithd = AllWidth + 'px'
        } else {
          this.setWithd = '100%'
        }
      },
      // 判断是否可用
      isDisAbled(index) {
        return this.tdata[index] ? this.tdata[index].disable : false
      },
      // 分页变动
      changePage(page) {
        this.$emit('changePage', page)
      },
      // 全选或者全不选
      isAllSelect (isSelect) {
        const _this = this
        if (this.tdata.length === 0) {
          return
        }
        if (isSelect) {
          this.tdata.forEach((item, index) => {
            if (!item.disable && (
              this.checkedItem.indexOf(index) < 0)) {
              _this.checkedItem.push(index)
            }
          })
        } else {
          _this.checkedItem = []
        }
      },
      // 全选操作
      checkedAllItem () {
        this.checkedAll = !this.checkedAll
        this.isAllSelect(this.checkedAll)
      },
      // 划词提示
      selectText(isSelect) {
        if (isSelect) {
          let txt = ''
          if (document.selection) {
            txt = document.selection.createRange().text
          } else {
            txt = window.getSelection() + ''
          }
          console.log(txt)
        }
      },
      // 滚动表格
      scrollTable (e) {
        const _this = this
        let timer = null
        clearInterval(timer)
        timer = setTimeout(() => {
          if (this.titleFixed === 'fixed') {
            _this.$refs.cHead.style.transform = 'translateZ(0.01px)'
            _this.$refs.cHead.style.transform = 'translateX(' + -(e.target.scrollLeft) + 'px)'
            if (_this.selectFixed) {
              _this.$refs.tFixedLeft.style.transform = 'translateY(' + -(e.target.scrollTop) + 'px)'
            }
            if (_this.handleFixed) {
              _this.$refs.tFixedRight.style.transform = 'translateY(' + -(e.target.scrollTop) + 'px)'
            }
          }
        }, 10)
      }
    },
    mounted() {
      if (this.$refs.tableScroll) {
        this.initTableWidth()
        window.addEventListener('resize', this.initTableWidth)
      } else {
        window.removeEventListener('resize', this.initTableWidth)
      }
      this.$refs.cScroll.addEventListener('scroll', this.scrollTable)
    },
    destroyed() {
      window.removeEventListener('resize', this.initTableWidth)
    },
    watch: {
      checkedItem: function (val) {
        let arr = this.tdata
        let num = 0
        arr.forEach((item, index) => {
          if (!item.disable) {
            num += 1
          }
        })
        if (val.length !== num) {
          this.checkedAll = false
        } else {
          this.checkedAll = true
        }
        this.$emit('selectCheck', val)
      }
    }
  }
</script>

<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	table {
		border-collapse: collapse;
		tr {
			box-sizing: border-box;
			overflow: hidden;
			border-right: 1px solid #ddd;
			border-bottom: 1px solid #ddd;
		}
		tr:nth-of-type(2n) {
			td {
				background: #fafafa;
			}
		}
		tr:nth-of-type(2n + 1) {
			td {
				background: #fff;
			}
		}
	}
	td, th {
		border: 1px solid #ddd;
		box-sizing: border-box;
	}
	th {
		border-bottom: 0;
		text-align: center;
		background: #fafafa;
	}
	td {
		overflow: hidden;
		img {
			width: 36px;
			height: 36px;
		}
	}
	#tableComponent {
		width: 100%;
		overflow: hidden;
		position: relative;
		font-size: 14px;
	}
	.selectLable {
		i {
			font-size: 18px;
		}
		input {
			display: none;
		}
		& > div {
			justify-content: center;
		}
	}
	.titleHeight {
		background: #fafafa;
	}
	.content {
		position: relative;
		overflow: hidden;
	}
	.table-fixed-left {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		width: 50px;
		.table-header {
			z-index: 1;
		}
		td {
			text-align: center;
		}
	}
	.showSelect {
		margin-left: 50px;
	}
	.showHandle {
		margin-right: 150px;
	}
	.table-scroll {
		overflow: scroll;
		overflow-y: hidden;
		.table-header {
			z-index: 1;
		}
		.tbSelect {
			text-align: center;
		}
		td, th {
			border-right: 0;
		}
		tr.textDisable {
			color: #dddddd;
		}
	}
	.table-fixed-right {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 10;
		.table-header {
			z-index: 1;
		}
		.table-body {
			background: #ffffff;
			tr:hover {
				background: red;
			}
			td {
				text-align: center;
			}
			span:hover {
				text-decoration: underline;
			}
		}
	}
	.mouseover {
		td {
			background: #ffffbb !important;
		}
	}
	.selectTr {
		td {
			background: #ffffbb;
		}
	}
	.trDisable {
		color: #ccc;
	}
	.textleft {
		text-align: left;
	}
	.textright {
		text-align: right;
	}
	.textcenter {
		text-align: center;
	}
	.page {
		display: flex;
		justify-content: flex-end;
	}
	.handleAction {
		color: #5a82be;
		text-align: center;
		span:hover {
			text-decoration: underline;
		}
	}
	.crossWord {
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
