let weatherTool = {

    apiKey:'CWB-AF5A2CB6-1F46-44EC-B612-E2E27DC2AD85',
    locationName:'',
    fetchWeather: function(contest){
        switch(contest){
            case 'hualien':{
                contest = '%E8%8A%B1%E8%93%AE%E7%B8%A3';
                break;
            }
            case 'yilan':{
                contest = '%E5%AE%9C%E8%98%AD%E7%B8%A3';
                break;
            }
            case 'taitung':{
                contest = '%E8%87%BA%E6%9D%B1%E7%B8%A3';
                break;
            }
        }
        fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AF5A2CB6-1F46-44EC-B612-E2E27DC2AD85&locationName='+contest)
    .then(response=>response.json())
    
    .then((data) => this.displayWeather(data) )
   },
   displayWeather: function(data){
    const {locationName}  = data.records.location[0];
    const { startTime } = data.records.location[0].weatherElement[1].time[0];
    const { endTime } = data.records.location[0].weatherElement[1].time[0];
    const { parameterName:Pop } = data.records.location[0].weatherElement[1].time[0].parameter;
    const { parameterName:MaxT } = data.records.location[0].weatherElement[4].time[0].parameter;
    const { parameterName:Wx } = data.records.location[0].weatherElement[0].time[0].parameter;
    document.querySelector('.county').innerText =locationName+'的天氣預報';
    document.querySelector('.first .start').innerText = '起始: '+ startTime;
    document.querySelector('.first .end').innerText = '結束: '+ endTime;
    document.querySelector('.first .temp').innerText ='最大溫度: '+ MaxT +'度';
    document.querySelector('.first .pop').innerText ='降雨機率: '+ Pop +'%';
    document.querySelector('.first .description').innerText = '天氣概述: '+Wx;
   },
   search:function(){
    this.fetchWeather(document.querySelector(".search").value);
   },
}

document.querySelector('.btn').addEventListener('click',
function(){
    weatherTool.search();
});

// document.querySelector('.search').addEventListener('keyup',function(event){
//     if(event.key == "Enter"){
//         weatherTool.search();
//     }
// });