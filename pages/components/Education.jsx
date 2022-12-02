function Education() {
    return (
        <div className="py-3 px-5">
            <h1 className="fs-1 title profile-quote" >EDUCATION</h1>
            <div className="container">
                <div className="row p-5">
                    <div className="p-2 col-4">
                        <img className="logo" src="./schoolLogo.png" alt="Dartmouth Logo" />
                    </div>
                    <div className="p-2 fs-3 col-8">
                        <h1 className="title important-name"><strong>Dartmouth College</strong></h1>
                        <h3>B.A. Computer Science and Digital Arts</h3>
                        <p>SEPT 2017 - JUN 2022</p>
                    </div>
                </div>
                <div className="row fs-4 text-start">
                    <p>Studied Computer Science and Digital Arts at Dartmouth College. Dedicating my time and effort to exploring the Arts and Sciences and experimenting with the crossing of disciplines in creative and inventive projects. Received 2 Academic Citations from two different departments.</p>
                    <h3 className="title text-center p-5">Academic Citations</h3>
                    <div className="p-3">
                        <h5 className="highlight fs-3">Citation:  Classical Studies 10.08</h5>
                        <hr />
                        <p> "... In this class he brought his extensive expertise of online culture to the table, and applied it to the topic of studying ancient and modern humor..."</p>
                        <p><i>Spring Term 2019 Neeltje I. Kuin, Dartmouth Faculty</i></p>
                    </div>
                    <div className="p-3">
                        <h5 className="highlight fs-3">Citation: Computer Science 23.01</h5>
                        <hr />
                        <p>  "... Iosef has excelled at the three main components of the class; technical skill, artistic vision and leadership. Rarely does a student do so well at all three as Iosef has shown…”</p>
                        <p><i>Winter Term 2022 James M. Mahoney, Dartmouth Faculty</i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education