import React,{Component} from 'react';
import './homeStyles.css';

import FacultyDiv from './FacultyDiv';
import sliit from './images/SLIIT-Web-Slider-1.jpg';
import IconData from './FacultyData';
import image1 from './images/your-path-to-greadness-starts-here.png';


export default class HomeContent extends Component {
    render() {
        const p={
            backgroundColor: '#f4f4f4',
            marginTop: '5px',
            marginBottom: '5px',
            paddingLeft: '15px',
            paddingRight: '15px',
            textAlign: 'justify'
        }
        const icons = IconData.map(icon =><FacultyDiv key={icon.id} title={icon.title} image={icon.image} description={icon.description} backgroundColor={icon.backgroundColor}/>)
        console.log(icons);
        return (<div><div className="row">
                <div className="col-12">
                    <img src={sliit} alt="SLIIT" width="100%"/>
                </div>
            </div>
            <div className="row">
            {icons}
            </div>
            <div className="row">
                <div className="col-1"><br/>
                </div>
                <div className="col-3 menu"  align="center"><br/><br/>
                    <img src={image1} alt="imahge" width="100%"/>
                </div>
                <div className="col-8" style={p}>
                    <p>We are a leading non-state degree awarding institute approved by the University Grants Commission (UGC) under the Universities Act. We are also members of the Association of Commonwealth Universities (ACU), as well as the International Association of Universities (IAU), and the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology, UK. We are proud to be listed as a leading and formidable awarding institute authorised and approved by the University Grants Commission (UGC) under the Universities Act, and the International Association of Universities (IAU). Furthermore, not only are we the first Sri Lankan institute to be accredited by the Institution of Engineering & Technology (IET.), UK, our IT degrees are also in turn accredited by the Engineering Council, UK.</p>
                </div>
            </div>
        </div>
        )
    }
}