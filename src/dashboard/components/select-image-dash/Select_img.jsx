import { useRef } from "react"


function Select_img() {
    const inputRef = useRef(null);
    const paraRef = useRef(null);
    function handleParaClick() {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }
    return (
        <div className="select_img">
            <input ref={inputRef} type="file" />
            <p onClick={handleParaClick} ref={paraRef}>Drag & Drop your files here or click</p>
        </div>
    )
}

export default Select_img