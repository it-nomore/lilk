class LLCK {
  static inLitForm(llckSignStr) {
    return llckSignStr.split(' ').map(llckSignOne => LLCK._inLitFormOne(llckSignOne)).join('--');
  }
  static inSignForm(llckLitStr) {
    return llckLitStr.split('--').map(llckLitOne => LLCK._inSignFormOne(llckLitOne)).join(' ');
  }
  static makeInfoMap(llckList) {
    const llckInfoMap = new Map();
    llckList.forEach(llckObj => {
      if (llckObj.id) llckInfoMap.set(`=${llckObj.id}`, 1);
      if (llckObj.it) LLCK._addKeyInfo(llckInfoMap, llckObj, 'it', '/');
      if (llckObj.is) LLCK._addKeyInfo(llckInfoMap, llckObj, 'is', ':');
      if (llckObj.to) LLCK._addKeyInfo(llckInfoMap, llckObj, 'to', '@');
      if (llckObj.in) LLCK._addKeyInfo(llckInfoMap, llckObj, 'in', '#');
      if (llckObj.or) LLCK._addKeyInfo(llckInfoMap, llckObj, 'or', '!');
      if (llckObj.by) LLCK._addKeyInfo(llckInfoMap, llckObj, 'by', '?');
    });
    return llckInfoMap;
  }
  static parseToQuery(llckStr) {
    const llckObj = LLCK.parseToObj(llckStr);
    let llckQuery = '';
    if (llckObj.id) llckQuery = llckObj.id;
    if (llckObj.it) llckQuery = LLCK._addParam(llckQuery, 'it', llckObj.it);
    if (llckObj.is) llckQuery = LLCK._addParam(llckQuery, 'is', llckObj.is);
    if (llckObj.to) llckQuery = LLCK._addParam(llckQuery, 'to', llckObj.to);
    if (llckObj.in) llckQuery = LLCK._addParam(llckQuery, 'in', llckObj.in);
    if (llckObj.or) llckQuery = LLCK._addParam(llckQuery, 'or', llckObj.or);
    if (llckObj.by) llckQuery = LLCK._addParam(llckQuery, 'by', llckObj.by);
    return llckQuery;
  }
  static parseToObj(llckStr) {
    const llckArr = llckStr.split(' ');
    const llckObj = {};
    llckArr.forEach(k => {
      switch (k[0]) {
        case '=':
          llckObj.id = k.substr(1);
          break;
        case '/':
          LLCK._addKey(llckObj, 'it', k.substr(1));
          break;
        case ':':
          LLCK._addKey(llckObj, 'is', k.substr(1));
          break;
        case '@':
          LLCK._addKey(llckObj, 'to', k.substr(1));
          break;
        case '#':
          LLCK._addKey(llckObj, 'in', k.substr(1));
          break;
        case '!':
          LLCK._addKey(llckObj, 'or', k.substr(1));
          break;
        case '?':
          LLCK._addKey(llckObj, 'by', k.substr(1));
          break;
        default:
      }
    });
    return llckObj
  }
  static _addKey(obj, keyName, keyValue) {
    if (!(/^[a-z0-9_\-.]+$/.test(keyValue))) return;
    if (obj[keyName]) {
      if (Array.isArray(obj[keyName])) {
        obj[keyName].push(keyValue)
      } else {
        obj[keyName] = [obj[keyName], keyValue]
      }
    } else {
      obj[keyName] = keyValue;
    }
  }
  static _addParam(str, paramName, paramValue) {
    if (Array.isArray(paramValue)) {
      paramValue.forEach(value => {
        str += str ? `&${paramName}=${value}` : `${paramName}=${value}`
      });
    } else {
      str += str ? `&${paramName}=${paramValue}` : `${paramName}=${paramValue}`;
    }
    return str;
  }
  static _addKeyInfo(map, obj, key, prefix) {
    const values = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
    values.forEach(value => {
      if (map.has(`${prefix}${value}`)) {
        map.set(`${prefix}${value}`, map.get(`${prefix}${value}`) + 1);
      } else {
        map.set(`${prefix}${value}`, 1);
      }
    })
  }
  static _inLitFormOne(llckLitOne) {
    switch (llckLitOne[0]) {
      case '=':
        return `id-${llckLitOne.substr(1)}`;
      case '/':
        return `it-${llckLitOne.substr(1)}`;
      case ':':
        return `is-${llckLitOne.substr(1)}`;
      case '@':
        return `to-${llckLitOne.substr(1)}`;
      case '#':
        return `in-${llckLitOne.substr(1)}`;
      case '!':
        return `or-${llckLitOne.substr(1)}`;
      case '?':
        return `by-${llckLitOne.substr(1)}`;
      default:
        return;
    }
  }
  static _inSignFormOne(llckLitOne) {
    switch (llckLitOne.substr(0,2)) {
      case 'id':
        return `=${llckLitOne.substr(3)}`;
      case 'it':
        return `/${llckLitOne.substr(3)}`;
      case 'is':
        return `:${llckLitOne.substr(3)}`;
      case 'to':
        return `@${llckLitOne.substr(3)}`;
      case 'in':
        return `#${llckLitOne.substr(3)}`;
      case 'or':
        return `!${llckLitOne.substr(3)}`;
      case 'by':
        return `?${llckLitOne.substr(3)}`;
      default:
        return;
    }
  }
}

export default LLCK;