export function InfoWorker(){
    return(
        <>
        <div className="worker-cards grid grid-cols-2 sm:grid-cols-3 gap-5">

        <div className="worker-card mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg ring ring-black/5 @sm:flex @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:py-4">
            <div className="worker-photo">
                фото Img
            </div>
            <div className="worker-info">
                <h1 className="worker-profession">
                    профессия
                </h1>
                <h2 className="worker-education">
                    образование
                </h2>
            </div>
        </div>
        
        </div>
        
        </>
    )
}