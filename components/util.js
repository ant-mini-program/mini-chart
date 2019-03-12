import tracertTa from '@alipay/tracert-ta';

function scale(obj) {
  let key = ['range', 'tickCount', 'max', 'min', 'mask', 'type', 'nice', 'ticks'];
  let res = {};
  for(let i = 0; i < key.length; i++) {
    let k = key[i];
    if(obj.hasOwnProperty(k)) {
      res[k] = obj[k];
    }
  }
  return res;
}

function axis(obj) {
  let key = ['label', 'line', 'grid'];
  let res = {};
  for(let i = 0; i < key.length; i++) {
    let k = key[i];
    if(obj.hasOwnProperty(k)) {
      if(k === 'line' && obj[k] === true) {
        obj[k] = F2.Global._defaultAxis.line;
      }
      else if(k === 'grid' && obj[k] === true) {
        obj[k] = F2.Global._defaultAxis.grid;
      }
      res[k] = obj[k];
    }
  }
  return res;
}

function label(text, index, total) {
  const textCfg = {};
  if (index === 0) {
    textCfg.textAlign = 'left';
  }
  if (index === total - 1) {
    textCfg.textAlign = 'right';
  }
  return textCfg;
}

function tracert(type, appId, url) {
  my.call('remotelog', {
    type: 'behavior',
    bizType: 'FORTUNEAPP',
    seedId: 'mini-chart',
    logLevel: 2, // 1 - high, 2 - medium, 3 - low
    actionId: 'exposure',
    param1: appId,
    param2: url,
    param3: type,
  });

  const Tracert = new tracertTa({
    spmAPos: 'a945', // spma位，必填
    spmBPos: 'b10625', // spmb位，必填
    bizType: 'FORTUNEAPP', // 业务类型，必填
    logLevel: 2, // 默认是2
    chInfo: '', // 渠道
      mdata: { // 通用的数据，可不传，传了所有的埋点均会带该额外参数
    },
    debug: false // 默认是false，传true 则会在发起埋点请求的时候，在控制台输出日志
  });
  Tracert.expo('c25441.d47746', {
    type,
    appId,
    url,
  });
}

export default {
  scale,
  axis,
  label,
  tracert,
};
