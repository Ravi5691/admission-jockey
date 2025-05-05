export default function AddResume() {
    return(
        <div>
            <h1 className="text-3xl font-bold text-center">Upload your Resume</h1>
            <div className="flex justify-center items-center">
                <input type="file" accept=".pdf" className="border-2 border-gray-300 rounded-lg p-2" />
            </div>
        </div>
    )
}