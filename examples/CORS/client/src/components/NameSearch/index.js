import React from "react";

class NameSearch extends React.Component{
    
    nameSearch(){

        let names=document.querySelector("#name");
        fetch("http://localhost:80/CORS/name/" + names.value)
        .then((res)=>{
            return res.json();
        }).then((processed)=>{
            let nameReport=document.querySelector("#nameReport");
            if(processed.error){
                nameReport.innerHTML= processed.error;
            }else{
                nameReport.innerHTML= processed.name;
            }
        })
    }
    
    render(){
        return(
            <div>
                <input id="name" type="text" onKeyDown={this.nameSearch} />
                <div id= "nameReport"></div>
            </div>
        );
    }
}

export default NameSearch