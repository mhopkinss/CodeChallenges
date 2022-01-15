function domainName(url){
    let replacedString = url
    if(url.includes('https://')){
      replacedString = replacedString.replace('https://','')
    }if(url.includes('http://')){
      replacedString = replacedString.replace('http://','')
    }if(url.includes('www.')){
      replacedString = replacedString.replace('www.','')
    }
    let arr = replacedString.split('.')
    return arr[0]
  }