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
}

export default {
  scale,
  axis,
  label,
  tracert,
};
