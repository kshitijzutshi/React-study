const MyInfo = function MyInfo(){
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
        
      };

    return(

        

        <div>
            <h1 style={mystyle}>John Doe</h1>
            <p style={{color: "magenta"}}>John doe is an honest man, he wishes to visit these places someday:</p>
            <ul>
                <li style={{color: "red"}}>Titan</li>
                <li style={{color: "green"}}>Alakaranmudra</li>
                <li style={{color: "blue"}}>Groteskuramura</li>
            </ul>

        </div>
       
    )
};

export default MyInfo;