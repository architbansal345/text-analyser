import React from 'react'

export default function About(props) {
    let myStyle = {
        color:props.mode==='dark'?'white':'#502d2d',
        backgroundColor:props.mode==='dark'?'#502d2d':'white'
    }
 
  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'#502d2d'}}>
        <h2>About US</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyse Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <i>Text Analyzer allows you to rapidly and efficiently analyse your text. if you want to count words, characters, or convert uppercase letters to lowercase letters and vice versa it do easily. They also healp to determine whether the string is palindrome or not , string contains special character or not etc.</i>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <i>Text Analyzer is a free character counter that calculates the number of characters and words in a supplied text in real time. As a result, it's appropriate for composing text with a word/character limit.</i>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <i>This Text Anayser Software is compatible with all major web browsers, including Chrome, Firefox, Internet Explorer, and Opera. It can be used to count characters in books, blogs, essays, and PDF documents, among other things.</i>
                </div>
                </div>
            </div>
         </div>
         <footer class="bg-light text-center text-lg-start my-5">
            <div class="text-center p-3" style={{backgroundColor: 'rgb(159 163 163)'}}>
                <b>Created By Archit Bansal</b>
            </div>
        </footer>
    </div>
  )
}