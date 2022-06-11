import React , {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    const handlespClick=()=>{
        let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if(spChars.test(text)){
                setText("YES");
            } else {
                setText("NO");
            }
            props.showAlert("All character are check", "success");
    }
    const handleClClick=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text is clear!", "success");
    }
    const handleextraClick=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra spaces!", "success");
    }
    const handlepalClick=()=>{
        let n = text.length;
        let flag = 0;
        for(let i = 0 ; i<n/2 ; i++){
            if(text[i]!==text[n-i-1]){
                setText("NO");
                flag=1;
                break;
            }
        }
        if(flag===0)setText("YES");
        props.showAlert("Palindromic string check", "success");

    }
    const handlereverseClick=()=>{
        let ans = '';
        for(let i = 0 ; i<text.length ; i++){
            if(text[i].toUpperCase()===text[i]){
                ans+=text[i].toLowerCase();
            }
            else{
                ans+=text[i].toUpperCase();
            }
        }
        setText(ans)
        props.showAlert("Reverse Character", "success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor:props.mode==="dark"?"rgb(135 71 71)":'white',color:props.mode==="dark"?"white":'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}> Convert to UpperCase Letter</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to LowerCase Letter</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClClick}>Clear All</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleextraClick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlereverseClick}>Reverse character</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlepalClick}>Is Palindrome string ?</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlespClick}>Special character check</button>
    </div>
    <div className='container my-3' style={{color:props.mode==="dark"?"white":'black'}}>
        <h3> Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <h3>Preview</h3>
        <p>{text.length >0? text:"Enter Something above to analyse it !"}</p>
    </div>
    </>
  )
}
