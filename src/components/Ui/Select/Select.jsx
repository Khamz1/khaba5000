import {useState} from "react";
import SSelect from './select.module.css'
function Select() {
    const [selectedValue, setSelectedValue] = useState(null);
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }
    return (
        <>
            <div className={SSelect.Smain}>
                <select value={selectedValue} onChange={handleChange}>
                    <option value="logOut">Выйти из аккаунта</option>
                    <option value="ChangeProfile">Изменить профиль</option>
                </select>
            </div>
        </>
    )
}

export default Select
