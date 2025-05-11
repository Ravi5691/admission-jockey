import Spline from '@splinetool/react-spline/next';

export default function Model() {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className="w-full lg:h-[500px] h-[200px] lg:aspect-square ">
                <Spline
                    scene="https://prod.spline.design/GJ6cSezNyXe5qF-D/scene.splinecode"
                    className="w-full h-full"
                />
            </div>
        </main>
    );
}
{/* <Spline
            scene="https://prod.spline.design/F8zUWoAhZqILom1y/scene.splinecode"
            /> */}