import "./Styles/MatchPcDetails.css"
const MatchPcDetails = ({ fixture }) => {

    return (
        <article className="fixture__details">
            <section className="fixture__details-match">
                <div className="fixture__teams-home">
                    <div className="fixture__home-logo-goals">
                        <span className="fixture__home-logo">
                            <img src={fixture.teams.home.logo} alt="" />
                        </span>
                        <span className="fixture__home-goals">
                            {fixture.goals.home}
                        </span>
                    </div>
                    <span className="fixture__teams-home-name">
                        {fixture.teams.home.name}
                    </span>
                </div>
                <div className="fixture__status">
                    <h3>VS</h3>
                </div>
                <div className="fixture__teams-away">
                    <div className="fixture__away-logo-goals">
                        <span className="fixture__away-goals">
                            {fixture.goals.home}
                        </span>
                        <span className="fixture__away-logo">
                            <img src={fixture.teams.away.logo} alt="" />
                        </span>
                    </div>
                    <span className="fixture__teams-away-name">
                        {fixture.teams.away.name}
                    </span>
                </div>
            </section>


        </article>
    )
}


export default MatchPcDetails