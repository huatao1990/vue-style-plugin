
const convStyle = {}
convStyle.install = function (Vue,options={}) {
    let obj = Object.assign({
        unit: 'rem'
    },options)
    Vue.prototype.$convstyle = function(str) {
        if(typeof str == 'object') {
            str = JSON.stringify(str)
        }
        let winWid;
        try {
            if (!!ISWX) {
                winWid = wx.getSystemInfoSync().windowWidth
            }
        } catch (error) { 
             window.ISWX = false
        }
        return(str).replace(/\s*(\d+[\.]?\d{0,})(r?px)?(%+)?/g, function (match, $1,$2,$3) {
            if (ISWX) {
                return !!$2?(Math.round($1/750*winWid) + "px"):$3?($1+'%'):$1;
            }
           return !!$2?($1*(1/100)).toFixed(1) +`${obj.unit}`:$3?($1+'%'):$1;
        }).replace(/(\s+)|,/g,';').replace(/(\{|\})/g,'');
    }
}

export default  convStyle
