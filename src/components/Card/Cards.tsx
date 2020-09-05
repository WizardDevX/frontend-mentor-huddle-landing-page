import React from "react";
import { Card } from "./styles";

const Cards = () => {
	return (
		<div>
			<Card>
				<img
					src="/img/illustration-grow-together.svg"
					alt="Grow Together"
				/>
				<div>
					<h2>Grow Together</h2>
					<p>
						Generate meaningful discussions with your audience and
						build a strong, loyal community. Think of the insightful
						conversations you miss out on with a feedback form.
					</p>
				</div>
			</Card>
			<Card>
				<img
					src="/img/illustration-flowing-conversation.svg"
					alt="Flowing Conversations"
				/>
				<div>
					<h2>Flowing Conversations</h2>
					<p>
						You wouldn't paginate a conversation in real life, so
						why do it online? Our threads have just-in-time loading
						for a more natural flow.
					</p>
				</div>
			</Card>
			<Card>
				<img src="/img/illustration-your-users.svg" alt=" Your Users" />
				<div>
					<h2>Your Users</h2>
					<p>
						It takes no time at all to integrate Huddle with your
						app's authentication solution. This means, once signed
						in to your app, your users can start chatting
						immediately.
					</p>
				</div>
			</Card>
		</div>
	);
};

export default Cards;
