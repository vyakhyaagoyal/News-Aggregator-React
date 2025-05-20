import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state={
      results:this.results,
      loading: false
    }
  }

  render() {
    let {title, description,imageurl,link} = this.props;
    return (
      <div className='container'>
        <h2 className='text-center'>News Mirchi - Top Headlines</h2>
        <div className="row">
          <div className="col md-3">
            <NewsItem title="Vancouver Whitecaps not discounting Valour FC heading into Canadian Championship" description="The Vancouver Whitecaps heard analysts' predictions ahead of the Major League Soccer season. Pundits mused the club would finish 14th or 15th in the standings, that the 'Caps were a middling team that would miss the playoffs." imageurl="https://www.vmcdn.ca/f/files/shared/feeds/cp/2025/05/61b1ad0acdb4df82e82e484601a4fa703f6b81295348ee837d427b0ad53ef901.jpg;w=960" link="https://www.sootoday.com/national-sports/vancouver-whitecaps-not-discounting-valour-fc-heading-into-canadian-championship-10681477" />
          </div>
          <div className="col md-3">
            <NewsItem title={title} description={description} imageurl={imageurl} />
          </div>
          <div className="col md-3">
            <NewsItem title={title} description={description} imageurl={imageurl} />
          </div>
        </div>
        </div>
        )
  }
}

        export default News
