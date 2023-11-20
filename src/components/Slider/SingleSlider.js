import './singleSlider.css';

export default function SingleSlider (props) {
    return (
        <div className="slidecontainer">
            <div className="flex justify-between text-sm text-white w-[200px]">
                <p>${props.min}</p>
                <p>${props.max}</p>
            </div>
            <input type="range" min="1" max="100" className="s_slider" id="myRange"></input>
        </div>
    );
}
