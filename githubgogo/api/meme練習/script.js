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
    const { startTime:startTime0 } = data.records.location[0].weatherElement[1].time[0];
    const { endTime:endTime0 } = data.records.location[0].weatherElement[1].time[0];
    const { parameterName:Pop0 } = data.records.location[0].weatherElement[1].time[0].parameter;
    const { parameterName:MaxT0 } = data.records.location[0].weatherElement[4].time[0].parameter;
    const { parameterName:Wx0 } = data.records.location[0].weatherElement[0].time[0].parameter;
    document.querySelector('.county').innerText =locationName+'的天氣預報';
    document.querySelector('.first .start').innerText = '起始: '+ startTime0;
    document.querySelector('.first .end').innerText = '結束: '+ endTime0;
    document.querySelector('.first .temp').innerText ='最大溫度: '+ MaxT0 +'度';
    document.querySelector('.first .pop').innerText ='降雨機率: '+ Pop0 +'%';
    document.querySelector('.first .description').innerText = '天氣概述: '+Wx0;


    const { startTime:startTime1 } = data.records.location[0].weatherElement[1].time[1];
    const { endTime:endTime1 } = data.records.location[0].weatherElement[1].time[1];
    const { parameterName:Pop1 } = data.records.location[0].weatherElement[1].time[1].parameter;
    const { parameterName:MaxT1 } = data.records.location[0].weatherElement[4].time[1].parameter;
    const { parameterName:Wx1 } = data.records.location[0].weatherElement[0].time[1].parameter;
    
    document.querySelector('.second .start').innerText = '起始: '+ startTime1;
    document.querySelector('.second .end').innerText = '結束: '+ endTime1;
    document.querySelector('.second .temp').innerText ='最大溫度: '+ MaxT1 +'度';
    document.querySelector('.second .pop').innerText ='降雨機率: '+ Pop1+'%';
    document.querySelector('.second .description').innerText = '天氣概述: '+Wx1;

    const { startTime:startTime2 } = data.records.location[0].weatherElement[1].time[2];
    const { endTime:endTime2 } = data.records.location[0].weatherElement[1].time[2];
    const { parameterName:Pop2 } = data.records.location[0].weatherElement[1].time[2].parameter;
    const { parameterName:MaxT2 } = data.records.location[0].weatherElement[4].time[2].parameter;
    const { parameterName:Wx2 } = data.records.location[0].weatherElement[0].time[2].parameter;
    
    document.querySelector('.third .start').innerText = '起始: '+ startTime2;
    document.querySelector('.third .end').innerText = '結束: '+ endTime2;
    document.querySelector('.third .temp').innerText ='最大溫度: '+ MaxT2 +'度';
    document.querySelector('.third .pop').innerText ='降雨機率: '+ Pop2+'%';
    document.querySelector('.third .description').innerText = '天氣概述: '+Wx2;
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