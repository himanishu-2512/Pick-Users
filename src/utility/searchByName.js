import data from "../data/data.json"
function searchByName(text,list){
    /**
     A function to filter out the matching names with the text
     **/
const filteredData= data.filter((item)=>
   item.name.toLowerCase().startsWith(text.trim().toLowerCase())&&!list.includes(item) 
)
return filteredData;
}

export default searchByName;