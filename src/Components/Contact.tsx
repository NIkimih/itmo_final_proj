import { loremIpsum } from "lorem-ipsum";

export function Contact(){
    return(
        <>
        <div>
            Контакты
        </div>
        <div>{loremIpsum({ count:  8})}</div>
        </>
    )
}