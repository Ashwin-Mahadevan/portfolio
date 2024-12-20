export default function Scraping_Project_Page() {
	return (
		<div className="prose mx-auto dark:prose-invert">
			<h1>Scraping</h1>
			<p>
				One of my hobbies is collecting data. I gather it on a Raspberry-Pi that
				I maintain running at home. Since there's tons of data (on the order of
				terabytes), it's all stored locally on hard-disks. If you want access,
				reach out to me and I'll see what I can do!
			</p>

			<h2>Apple App Store Top Charts</h2>
			<p>
				I scrape Apple's App Store for the top charts in 175 countries. I
				collect data in the following categories, for each country separately,
				every five minutes:
			</p>

			<ul className="grid grid-cols-2 [&>li]:m-1">
				<li>Top Free Apps</li>
				<li>Top Paid Apps</li>

				<li>Top Audio Books</li>
				<li>Top Free Books</li>
				<li>Top Paid Books</li>

				<li>Most Played Albums</li>
				<li>Most Played Music Videos</li>
				<li>Most Played Playlists</li>
				<li>Most Played Songs</li>

				<li>Most Listened Podcasts</li>
				<li>Most Subscribed Podcasts</li>
				<li>Most Listened Podcast Episodes</li>
				<li>Most Subscribed Podcast Channels</li>
			</ul>

			<h2>Prediction Market Orderbooks</h2>
			<p>
				Prediction markets are derivatives exchanges where participants trade
				contracts tied to real-world events. The prices of these contracts
				correspond the probability of an event occurring. While platforms like
				Kalshi and Polymarket share historical aggregated execution data, they
				don't provide historical orderbook data. I address this gap by
				collecting real-time orderbook data for all active markets on both
				platforms.
			</p>
		</div>
	);
}
