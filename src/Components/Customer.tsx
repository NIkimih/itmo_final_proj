export function Customer(){
    return(
        <>
        <div className="customers-cards grid grid-cols-2 sm:grid-cols-3 gap-5">
            <div className="customers-card item-card mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg ring ring-black/5 @sm:flex @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:py-4">
                <div className="customers-logo">
                лого
                </div>
                <div className="customers-name">
                    название
                </div>
            </div>
        </div>
        </>
    )
}