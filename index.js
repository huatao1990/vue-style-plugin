
const convStyle = {}
convStyle.install = function (Vue,options={}) {
    let obj = Object.assign({
        unit: 'rem'
    },options)
    Vue.prototype.$convstyle = function(str) {
        let winWid;
        try {
            if (!!ISWX) {
                winWid = wx.getSystemInfoSync().windowWidth
            }
        } catch (error) { 
             window.ISWX = false
        }
        return(str + "").replace(/\s*(\d+)[\n\s\r]*(?:r?px)?(%+\s*)?;{0,}/g, function (match, $1,$2) {
            if (ISWX) {
                return !!$2?$1+'%;':(Math.round($1/750*winWid) + "px;");
            }
           return!!$2?$1+'%;':($1*(1/100)).toFixed(1) +`${obj.unit};`;
        });
    }
}

module.export = convStyle