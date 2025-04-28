import { Link } from "react-router-dom"

function Sidebar(){
    return (
        <>
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#F8FAFC] p-4 shadow-lg rounded-l-lg">
                <nav className="flex flex-col space-y-4">
                    <a href="#" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-[#1E40AF] hover:bg-[#E0F2FE] p-2 rounded-md transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    </a>
                    <Link to="/about" className="text-[#1E40AF] hover:bg-[#E0F2FE] p-2 rounded-md transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Sidebar