// pages/calculate/bmr2/bmr2.js
import WxValidate from '../../../utils/WxValidate.js'
Page({
  data: {
    array: ['男', '女'],
    // array2: ['不计算 x1', '几乎不动 x1.2', '1-3次运动 x1.375', '3-5次运动 x1.55', '6-7次运动 x1.725', '专业运动 x1.9'],
    array2: ['不计算', '几乎不动', '1-3次运动', '3-5次运动', '6-7次运动', '专业运动'],
    index: 0,
    index2: 0,
    bmrDTO: 0,
    form: {
      age: '',
      height: '',
      weight: '',
    }
  },
  bindPickerChange: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  radioChange: function (e) {
    index: e.detail.value
  },
  formSubmit: function (e) {
    const params = e.detail.value
    //校验表单
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }
    this.caclulate(params.age,params.height,params.weight);
    // this.showModal({
    //   msg: '提交成功'
    // })
  },
  caclulate: function (age, height,weight){
    var bmr
    if (this.data.index == 0) {
      bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
    }
    else {
      bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
    }
    this.setData({
      bmr: bmr.toFixed(0),
      bmrDTO: bmr.toFixed(0)
    })
    switch (this.data.index2){
      case 0:
        var bmr = this.data.bmr
        console.log(this.data.index2);
        var bmrDTO = bmr * 1
        this.setData({
          bmrDTO: bmrDTO.toFixed(0)
        })
        console.log(this.data.index2);
      break
      case 1:
        var bmr = this.data.bmr
        var bmrDTO = bmr * 1
        this.setData({
          bmrDTO: bmrDTO.toFixed(0)
        })
        console.log(this.data.index2);
        break
      case 2:
        var bmr = this.data.bmr
        var bmrDTO = bmr * 1.2
        this.setData({
          bmrDTO: bmrDTO.toFixed(0)
        })
        console.log(this.data.index2);
        break
      case 3:
        var bmr = this.data.bmr
        var bmrDTO = bmr * 1.375
        this.setData({
          bmrDTO: bmrDTO.toFixed(0)
        })
        console.log(this.data.index2);
        break
      case 4:
        var bmr = this.data.bmr
        var bmrDTO = bmr * 1.725
        this.setData({
          bmrDTO: bmrDTO.toFixed(0)
        })
        console.log(this.data.index2);
        break
      case 5:
        var bmr = this.data.bmr
        var bmrDTO = bmr * 1.9
        this.setData({
          bmrDTO: bmrDTO.toFixed(0)
        })
        console.log(this.data.index2);
        break
    }
  },
  // 报错 
showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  //验证函数
  initValidate() {
    const rules = {
      age: {
        required: true,
        positiveNumber: true
      },
      height: {
        required: true,
        positiveDecimal: true
      },
      weight: {
        required: true,
        positiveDecimal: true
      }
    }
    const messages = {
      age: {
        required: '请填写年龄'
      },
      height: {
        required: '请填写高度'
      },
      weight: {
        required: '请填写体重'
      }
    }
    this.WxValidate = new WxValidate(rules, messages)
    //正数验证方法
    this.WxValidate.addMethod('positiveDecimal', (value, param) => {
      return /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value)
    }, '请填写正数')
    this.WxValidate.addMethod('positiveNumber', (value, param) => {
      return /^[+]{0,1}(\d+)$/.test(value)
    }, '请填写正整数')

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initValidate()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})