import style from './DropDownList.module.css'


const DropDownList = ({ typeForm, options, changerDescription }) => {
    console.log(typeForm);
    return (
        <div className={style.containerList}>
            <ul className={style.list}>{options.map(elem =>
                <li key={elem.value}
                    value={elem.value}
                    className={style.item}
                                onClick={() => {
              changerDescription(elem.label, elem.value);
            }}
                >{elem.label}</li>)}
            </ul>
        </div>
    )
}

export default DropDownList;