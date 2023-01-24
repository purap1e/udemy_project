import React from 'react'
import '../teams/team.css'
import {ReactComponent as Nasdaq} from '../svgs/1.svg'
import {ReactComponent as Volkswagen} from '../svgs/2.svg'
import {ReactComponent as Box} from '../svgs/3.svg'
import {ReactComponent as NextApp} from '../svgs/4.svg'
import {ReactComponent as Eventbrite} from '../svgs/5.svg'
import {ReactComponent as Tcs} from '../svgs/6.svg'

const Teams = () => {
    return (
        <div>
            <div className="container--main">
                <div className="text">
                    <div className="title" style={{textAlign:"center"}}>Trusted by over 13,400 great teams</div>
                    <div className="subtitle" style={{textAlign:"center"}}>Leading companies use the same courses to help employees keep their skills fresh.</div>
                </div>
                <div className="teams">
                    <Nasdaq/>
                    <Volkswagen/>
                    <Box/>
                    <NextApp/>
                    <Eventbrite/>
                    <Tcs/>
                </div>
            </div>
        </div>
    );
}
export default Teams;