
window.onload = () => {
    function button(){
let one = "width: 100px;height: 40px;border-radius: 5px;background: #FB8C00;border: none;color: white;text-align: center";
let two = "width: 120px;height: 40px;border-radius: ;background: #1E88E5;border: none;color: white;text-align: center;";
let three = "background: #7CB342;height: 40px;width: 110px;box-shadow: 0 0 5px #7CB342;border: none;";
let four = "background: linear-gradient(#E65100, #FB8C00);border: none;width: 110px;height: 40px;border-radius: 10px;";
let five = "width: 110px;height: 40px;background: #ECEFF1;color: black;border: none;border-radius: 5px;";
let six = "background: #12C2CA;border: none;width: 110px;height: 40px;border-radius: 3px;";
let seven ="background: #FFFF8D;border: none;border-radius: 10px;height: 40px;width: 110px;color: black;";
let eight= "background: #C2185B;border: none;box-shadow: 0 0 5px #C2185B;width: 110px;height: 40px;"
let nine = "background: #F9FBE7;border: none;box-shadow: 0 0 5px black;width: 110px;height: 40px;border-radius: 5px;color: black;";
    document.querySelector(".bt").innerHTML = `<button style='${one}'>#1</button><button style='${two}'>#2</button><button style='${three}'>#3</button><button style='${four}'>#4</button><button style='${five}'>#5</button><button style='${six}'>#6</button><button style='${seven}'>#7</button><button style='${eight}'>#8</button><button style='${nine}'>#9</button>`;
    document.querySelector(".title").innerHTML = "Buttons";
    let button = document.querySelector("button");
    //console.log()
   
    //document.body.innerHTML = button.style;
}
button();
let tit = setInterval(function(){
    let title = document.querySelector(".title");
    let ran = ["Click The Elements To Copy", "Support me on telegram", "No more css", "This alpha version may have bug", "No more bootstrap", "No more tailwind css"];
    title.innerHTML = ran[Math.floor(Math.random() * ran.length)]
}, 3000);
let btn = document.querySelectorAll("button");

btn.forEach(btn => {
    btn.onclick = function(){
    document.querySelector(".in").innerHTML   = '<input type="text" id="code">'
let code = document.querySelector("#code");
        code.value = btn.outerHTML;
       
        document.querySelector(".but").innerHTML = "<button id='cpy'>Copy</button>"
        //alert(btn.outerText)
        window.scrollTo("200", "500");
        let limit = 0;
        document.querySelector("#cpy").onclick = function(){
        limit++;
            if (limit <= 5) {
                document.querySelector("#code").select();
            document.execCommand("copy");
            document.querySelector("#mess").innerHTML = "Successfully Copied "
            }
            else {
                document.querySelector("#mess").innerHTML = "Enough for today "
            }
        }
    }
},2000);
document.querySelector("#input").onclick = () => {
let one = "background: #64DD17; height: 70px; border: none; border-radius: 10px;color: white; text-align: center;outline: none; width: 90%;";
let two = " background: #1565C0; height: 20vh; border: none; border-radius: ;color: white; text-align: center;outline: none;width: 90%;margin-top: 1cm;";
let three = "background: #FFEBEE; height: 20vh; border: none; border-radius: 5px;color: white; text-align: center;outline: none;width: 90%;margin-top: 1cm;box-shadow: 0 0 3px black;";
let four = "background: #B71C1C; height: 20vh; border: none; border-radius: 20px;color: white; text-align: center;outline: none;width: 90%;margin-top: 1cm;box-shadow: 0 0 3px black;";
let five = "background: #64FFDA; height: 20vh; border: none; border-radius: 2px;color: white; text-align: center;outline: none;width: 90%;margin-top: 1cm;box-shadow: 0 0 5px #64FFDA;";
let six = "background: #FFB300; height: 20vh; border: none; border-radius: 20px;color: white; text-align: center;outline: none;width: 90%;margin-top: 1cm;box-shadow: 0 0 5px orange;";
let seven = "background: #FAFAFA; height: 20vh; border: none; border-radius: 5px;color: white; text-align: center;outline: none;width: 90%;margin-top: 1cm;box-shadow:  orange;";
let eight = "background: #18FFFF; height: 20vh; border: none; border-radius: 5px;color: white; text-align: center;outline: none;width: 90%;margin-top: 1cm;box-shadow: 0 0 10px #18FFFF;"
   let inputs = document.querySelectorAll("input"); document.querySelector(".bt").innerHTML = `<a href='#gh'><input type='text' placeholder='one' readonly style='${one}'><input type='text' placeholder='two'readonly style='${two}'><input type='text' placeholder='three'readonly style='${three}'><input type='text' placeholder='four'readonly style='${four}'><input type='text' placeholder='five'readonly style='${five}'><input type='text' placeholder='six'readonly style='${six}'><input type='text' placeholder='seven'readonly style='${seven}'><input type='text' placeholder='eight'readonly style='${eight}'><input type='text' placeholder='nine'readonly></a>`;
   
  let inputd = document.querySelectorAll("input");
 
inputd.forEach(inputd => {
    inputd.onclick = function(){
    
        document.querySelector(".in").innerHTML = "<input type='text' id='code'>";
    document.querySelector("#code").value = inputd.outerHTML; document.querySelector(".but").innerHTML = "<button id='cpys'>Copy</button>";
      document.querySelector(".code").style.marginTop = "300%";
      document.querySelector("#cpys").onclick = () => {
          document.querySelector("#code").select();
          document.execCommand("copy");
          document.querySelector("#mess").innerHTML = "Successfully copied "
      }
    }
})
  
}
document.querySelector("#btns").onclick = () => {
    button()
}
document.querySelector("#textarea").onclick = () => {
let one = "width: 80%; background: #FFF176;border: none; border-radius: 20px;margin-top: 1cm;outline: #FFF59D;";
let two = "width: 80%; background: white;border: none; border-radius: 5px;margin-top: 1cm;outline: whitesmoke;";
let three = "width: 80%; background: #0288D1;border: none; border-radius: 20px;margin-top: 1cm;outline: whitesmoke;"
    document.querySelector(".bt").innerHTML = `<textarea placeholder='#1' style='${one}' readonly></textarea><textarea placeholder='#2' style='${two}'readonly></textarea><textarea placeholder='#3' style='${three}'readonly></textarea>`;
    let text = document.querySelectorAll("textarea");
    text.forEach(text => {
        text.onclick = function(){
           window.scrollTo("1000", "1000"); document.querySelector(".in").innerHTML = "<input type='text' id='code'>";
           document.querySelector("#code").value = text.outerHTML; document.querySelector(".but").innerHTML = "<button id='cp'>Copy</button>";
           document.querySelector("#cp").onclick = function(){
               document.querySelector("input").select();
               document.execCommand("copy");
               document.querySelector("#mess").innerHTML = "Successfully copied"
           }
           
        }
    })
}
}
