const init = (vue, jsApiList, readyCallback) => {
  const wx = window.wx
  let WeixinJSBridge = null
  if (window.WeixinJSBridge) {
    WeixinJSBridge = window.WeixinJSBridge
  }
  if (!WeixinJSBridge) {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', function () {
        if (window.WeixinJSBridge) {
          WeixinJSBridge = window.WeixinJSBridge
        }
      }, false)
    }
  }

  if (wx && vue) fetchWechatConfig(wx, vue, jsApiList, readyCallback)
}

const fetchWechatConfig = (wx, vue, jsApiList, readyCallback) => {
  const resource = vue.$resource('mobile/wechat-sign-package')
  resource.get().then((resp) => {
    const options = resp.data
    jsApiList = jsApiList || [
      'hideOptionMenu',
      'showMenuItems'
    ]
    wx.config({
      appId: options.appId,
      timestamp: options.timestamp,
      nonceStr: options.nonceStr,
      signature: options.signature,
      jsApiList: jsApiList
    })

    wx.ready(() => {
      if (readyCallback && typeof (readyCallback) === 'function') {
        readyCallback(wx)
      } else {
        wx.hideOptionMenu()
      }
    })
  })
}

const registerBridgeReadyEvent = (signPackage) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof window.WeixinJSBridge === 'undefined') {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', () => {
          invokePay(signPackage, resolve, reject)
        }, false)
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', () => {
          invokePay(signPackage, resolve, reject)
        })
        document.attachEvent('onWeixinJSBridgeReady', () => {
          invokePay(signPackage, resolve, reject)
        })
      }
    } else {
      invokePay(signPackage, resolve, reject)
    }
  })
  return promise
}

const invokePay = (signPackage, resolve, reject) => {
  signPackage.timeStamp = signPackage.timeStamp.toString() // make sure it is a String timestamp
  window.WeixinJSBridge.invoke('getBrandWCPayRequest', signPackage, (res) => {
    if (res && res.err_msg === 'get_brand_wcpay_request:ok') {
      resolve(res, 'ok')
    } else if (res && res.err_msg === 'get_brand_wcpay_request:cancel') {
      reject(res, 'cancel')
    } else if (res && res.err_msg === 'get_brand_wcpay_request:fail') {
      reject(res, 'fail')
    }
  })
}

module.exports = {
  init: init,
  pay: registerBridgeReadyEvent
}
