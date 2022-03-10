import './SayHello.css'

export function SayHello(){
    return (
        <div className="sayHelloWrapper">
            <nav>
            <img width="50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs-dark.png" alt="logo"/>
            <img width="50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs-dark.png" alt="menu"/>
            </nav>
            <div className="sayHelloDiv">
                <div className="infoDiv">
                <h1>Say hello to ReactJS </h1>
                <p>
                    You will learn how to use <br/>
                    the most popular frontend library, <br/>
                    and become a super Ninja developer.
                </p>
                <button>Awesome!</button>
                </div>
            </div>
            
            <div className="options">
            <div className="icon">
            <div className="imgIcon"> 
            <img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="icon1"/>
            </div>
            <h3>Declarative</h3>
            <p>
                React makes it painless to create interactive UIs.
            </p>
            </div>
            
            <div className="icon">
            <div className="imgIcon"> 
            <img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="icon2"/>
            </div>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
            </div>
            
            <div className="icon">
            <div className="imgIcon"> 
            <img  width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="icon3"/>
            </div>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
            </div>
            
            <div className="icon">
            <div className="imgIcon"> 
            <img width="100" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="icon4"/>
            </div>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
            

          
            </div>

        </div>
    )
}