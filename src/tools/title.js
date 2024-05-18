export default function Title(props){

    const words = props.letters;
    return (
        <div className="TitleEmbed">
            <h1 className="Reusabletitle">{words}</h1>
        </div>
    )

}