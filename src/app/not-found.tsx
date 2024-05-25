export default function NotFound() {
    return (
        <section className="bg-white min-h-[80dvh] flex flex-col justify-center items-center">
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something&apos;s missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                </div>
            </div>
        </section>
    )
}