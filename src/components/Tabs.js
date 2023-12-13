import React, {useState} from "react";

const Tabs = ({tabs}) => {
    let [tabClicked, setTabClicked] = useState("");

    function handleClick(content){
        setTabClicked(content);
    }

    return(
        <div>
            <ul>
                {
                    tabs.map((value) => 
                    <li onClick={() => handleClick(value.contents)}>{value.titles}</li>
                    )
                }
            </ul>
            {
                tabClicked && <p>{tabClicked}</p>
            }
        </div>
    )
}

export default Tabs;