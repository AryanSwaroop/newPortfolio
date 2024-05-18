export default function Footer(){

    const HandleMessage = () => {
        alert("Message Sent !");
    }
    return(
        <div className="footer">
        <div className="contactUsDiv" >

        <h1 className="footerText">
        Contact Me 
        </h1>
        <textarea type="text" aria-rowcount={5} className="footerInput"/>
        <button className="messageButton" onClick={HandleMessage}>Send Message</button>

        </div>
        </div>
    )
}