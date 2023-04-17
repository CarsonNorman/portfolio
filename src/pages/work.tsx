function Work() {
    return ( 
        <div className="flex flex-wrap justify-center  mx-auto">
            <a target="_blank" href="https://github.com/CarsonNorman/Python">
                <div className="mx-3 my-2 px-3 border rounded bg-slate-200 flex items-center flex-col">
                    <i className="fa-brands fa-python fa-2xl pt-5"></i>
                    <p className="mt-5">Python</p>
                </div>
            </a>

            <a target="_blank" href="https://github.com/CarsonNorman/C-Sharp">
                <div className="mx-3 my-2 px-3 border rounded px-1 text-sm bg-slate-200">
                    <div className=" border rounded bg-slate-200 flex items-center flex-col">
                        <p className="fa-2xl pt-5">C#</p>
                        <p className="mt-5">C-Sharp</p>
                    </div>
                </div>
            </a>

            <a target="_blank" href="https://github.com/CarsonNorman/Javascript">
                <div className="mx-3 my-2  border rounded bg-slate-200 flex items-center flex-col">
                    <i className="fa-brands fa-js fa-2xl pt-5"></i>
                    <p className="mt-5">JavaScript</p>
                </div>
            </a>

            <a target="_blank" href="https://github.com/CarsonNorman/Java">
                <div className="mx-3 my-2 px-3 border rounded bg-slate-200 flex items-center flex-col">
                    <i className="fa-brands fa-java fa-2xl pt-5"></i>
                    <p className="mt-5">Java</p>
                </div>
            </a>
        </div>
     );
}

export default Work;