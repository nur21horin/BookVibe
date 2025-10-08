const getStoredBook = () => {
    const stroedBookSTR=localStorage.getItem("readList");

    if(stroedBookSTR){
        const stroedBookData=JSON.parse(stroedBookSTR);
        return stroedBookData;
    }else{
        return [];
    }
};

const addToStoredDB = (id) => {

    const storedBookData=getStoredBook();
    if(storedBookData.includes(id)){
        alert("Id already Exist")
    }else{
        storedBookData.push(id);
        const data=JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)

    }
};

export {addToStoredDB}
