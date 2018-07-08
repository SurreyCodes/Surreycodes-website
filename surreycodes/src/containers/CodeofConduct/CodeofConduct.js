import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CodeofConduct.css';


class CodeofConduct extends Component {
    render(){
        return <div id="CodeofConduct">
            <section>
                <h1><strong>OUR CODE OF CONDUCT</strong></h1>
                </section>
            <div>
                <h1>The Short Version</h1>
                <p>We all shall provide a harassment-free experience for everyone, regardless of gender, age, sexual
                    orientation, disability, physical appearance, body size, race, or religion (or lack thereof).</p>
                <h1>The Full Version</h1>
                <p>All members, speakers, sponsors, employees and volunteers at our events and chats are required to agree with the
                    following code of conduct. Organizers will enforce this code throughout the events and communication
                    channels such as slack, twitter among others. We are expecting cooperation from all participants to
                    help ensure a safe environment for everyone in every interaction.</p>
                <p>Sexual language and imagery is not appropriate for any event venue, including talks, workshops, parties,
                    Twitter and other online media.</p>
                <p>Event participants violating these rules may be sanctioned or expelled from
                    the event without a refund (if applicable) at the discretion of the SurreyCodes Foundation organizers.</p>
                <h1>What not to do..</h1>
                <p>These are the rules/the things this space is not for. Breaking any of these will result in your
                    prompt
                    removal from any of the SurreyCodes foundation events.</p>
                <ul>
                    <li>No harassment, including personal attacks, offensive verbal attacks.</li>
                    <li>No spam. If Gmail wouldn't put it in my inbox, it shouldn't be in any of our channels. This
                        includes
                        doing attention-catching things like writing in all caps, using linkbait headlines.
                    </li>
                    <li>No recruiting for your startup, company, job, or organization. This is not the place to pitch
                        your
                        business idea. (Unless it is an event dedicated to it).
                    </li>
                    <li>No illegal/pirated content, requests for it, or information regarding the distribution of it.
                    </li>
                </ul>
                <h1>What to do in case of..</h1>
                <p>Our organizers rely in all of us to keep watch.</p>
                <p>If you think some of these rules are being broken by a particular member, please notify it to your
                    closest
                    Organizer. Help us keep this community open and friendly.</p>
                <p><strong>Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not
                    use
                    sexualized images, or other material.</strong></p>
                <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns,
                    please
                    contact an organizer immediately.</p>
                <p>Organizers will be happy to help participants contact venue security or local law enforcement,
                    provide
                    escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the
                    event.</p>
                <h1>Slack interactions</h1>
                <p>Use @channel and @everyone only when necessary. It pings everyone.</p>
                <p>Here's a list of general channels you can use and a description for each and every one of them.</p>
                <ul>
                    <li>#announcements: Announcements from the administrators to the community.</li>
                    <li>#community-website: Interested people that want to be part of a real world website development.</li>
                    <li>#general: our main channel, all introductions are done on this channel, and mayor public conversations.</li>
                    <li>#Links-and-resources: Share relevant resources that can enrich the community's knowledge.</li>
                    <li>#Jobboard: for posting Job seeking related material, also job opportunities that could benefit other members.</li>
                    <li>#Virtualmeetup: this channel is reserved to be used whenever we have a virtual event.</li>
                    <li>#random: bad programmer jokes, or memes, invitations to beers, cats and dogs, or other content that you would like to share with the community as long as it doesn't violates the Code of Conduct.</li>
                </ul>
            </div>
        </div>;
    }
}

export default CodeofConduct;
