import React from 'react'
import '../../../Css/About.css';
import AboutImage from '../../../img/About/mission.png';
const About = () => {
    return (
        <div className="lol">
            <div className="doo">
                <div className style={{ width: '98%' }}>
                    <h4>Tradosys Overview</h4>
                </div>
                <div className="line" />
                <div className="about">
                    <span>About</span>
                    <div className="about-p">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit laborum veritatis vel aut sequi dolorum saepe aliquid repudiandae natus. A numquam repudiandae molestias quam est obcaecati in, porro minima. Perferendis magni cumque nobis minima dicta. Quaerat, fuga eligendi.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores fuga, dolorum dolores molestiae labore tenetur cupiditate dolor sunt quas, doloribus voluptas sed! Obcaecati incidunt consequuntur odit? Aspernatur possimus minima molestiae aliquid ab exercitationem quis, nobis nesciunt modi pariatur quia, quasi officia ipsum! Placeat accusamus hic voluptatum, doloribus facere maxime!</p>
                    </div>
                </div>
                <div className="mission">
                    <img src={AboutImage} alt />
                </div>
                <div className="about">
                    <span>Tradosys Mission</span>
                    <div className="about-p">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit laborum veritatis vel aut sequi dolorum saepe aliquid repudiandae natus. A numquam repudiandae molestias quam est obcaecati in, porro minima. Perferendis magni cumque nobis minima dicta. Quaerat, fuga eligendi.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores fuga, dolorum dolores molestiae labore tenetur cupiditate dolor sunt quas, doloribus voluptas sed! Obcaecati incidunt consequuntur odit? Aspernatur possimus minima molestiae aliquid ab exercitationem quis, nobis nesciunt modi pariatur quia, quasi officia ipsum! Placeat accusamus hic voluptatum, doloribus facere maxime!</p>
                    </div>
                </div>
                <div className="about">
                    <span>Key Highlights</span>
                    <div className="about-p">
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dignissimos repudiandae iure explicabo ipsam repellat optio aspernatur fugit ipsum molestias sed magnam, incidunt impedit architecto!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
