import "./button.css";
function ToggleButton ({handle}) {
   
    
    return (
      <>
    <div className="b">
        <div className="Button"> <label className="switch">
       <input type="checkbox" onClick={()=>handle()} />
       <samp className="slider"/>
   </label>
      </div>
     </div>
     </>
    )
}
export default ToggleButton;