export function Documents(){
    return(
        <>
        <div className="documents-cards grid grid-cols-2 sm:grid-cols-3 gap-5">
            <div className="document-card item-card mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg ring ring-black/5 @sm:flex @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:py-4">
                <div className="document-mini-img">
                докуент
                </div>
                <div className="document-name">
                    название
                </div>
                <button className="document-download rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">скачать</button>
            </div>
        </div>
        </>
    )
}