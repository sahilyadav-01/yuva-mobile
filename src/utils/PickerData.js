const PickerData=[]
PickerData["pickergender"] =[{key:'0',value:'Male'}, {key:'1',value:'Female'}];
PickerData["pickerhealth"] = [
    {key:'0',value:'Not at all'}, 
    {key:'1',value:'Several days'},
    {key:'2',value:'More than half the days'}, 
    {key:'3',value:'Nearly every day'}];

PickerData["pickerdiet"]=[
    {key:'0',value:'Never'}, 
    {key:'1',value:'1x/Week'},
    {key:'2',value:'2/3 times a week'}, 
    {key:'3',value:'Daliy'}
];

PickerData["pickeralcohol2"]=[
    {key:'0',value:'0-1'}, 
    {key:'1',value:'2-3'},
    {key:'2',value:'>4k'}, 
]
PickerData["pickeralcohol3"]=[
    {key:'0',value:'More than 4 days'}, 
    {key:'1',value:'2-3days'},
    {key:'2',value:'<2 days'}, 
    {key:'3',value:'occasionally'},
]
PickerData["pickeralcohol4"]=[
    {key:'0',value:'Daily'}, 
    {key:'1',value:'2-3 times'},
    {key:'2',value:'<2 times'}, 
    {key:'3',value:'occasionally'}, 
]
PickerData["pickeryesnomedication"] = [
    {key:'0',value:'Yes'}, 
    {key:'1',value:'Yes on Medication'},
    {key:'2',value:'No'}, 
]
PickerData["pickeryesno"] = [
    {key:'0',value:'No'}, 
    {key:'1',value:'Yes'}
]

PickerData["pickersleep"] = [
    {key:'0',value:'<7 hr'}, 
    {key:'1',value:'7-9'},
    {key:'2',value:'>9hr'}, 
]

export default PickerData;