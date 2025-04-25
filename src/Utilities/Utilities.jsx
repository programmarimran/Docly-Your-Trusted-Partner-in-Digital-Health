
// const getFromLocalStorage=()=>{
//     const getData=localStorage.getItem("doctorid")
//     if(getData){
//         const parseData=JSON.parse(getData);
//         return parseData;
//     }
//     else{
//         return []
//     }
// }
const getFromLocalStorage = () => {
    try {
      const data = localStorage.getItem("doctorid");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Invalid JSON in localStorage", error);
      return [];
    }
  };

const setToLocalStorage = (id) => {
    const existingData = getFromLocalStorage() || [];
    const updatedData = [...existingData];

    const isAlreadyAdded = updatedData.find(savedId => savedId == id);

    if (isAlreadyAdded) {
        
        return 
    } else {
        updatedData.push(id);
        const setId=JSON.stringify(updatedData);
        localStorage.setItem("doctorid", setId);
    }
}

const removeFromLocalStorage=(id)=>{
    const existingData=getFromLocalStorage() || [];
    const updatedData=[...existingData]
    const filtaredData=updatedData.filter(data=>data!==id)
    const stringfyfiltaredData=JSON.stringify(filtaredData)
    localStorage.setItem("doctorid",stringfyfiltaredData)
}


export {getFromLocalStorage,setToLocalStorage,removeFromLocalStorage};

