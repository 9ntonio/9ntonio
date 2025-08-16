import React from "react";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OutboundLink } from "gatsby-plugin-gtag";

const LINK_TARGET = "_blank";
const LINK_REL = "noreferrer";

export default function FontAwesome() {
	return (
		<>
			<div className="circle-container">
				<OutboundLink href="https://www.linkedin.com/in/antonio-almena/" target={LINK_TARGET} rel={LINK_REL} aria-label="Visit Antonio Almena's LinkedIn profile (opens in new tab)">
					<FontAwesomeIcon className="linkedin" icon={faLinkedinIn} size="2x" aria-hidden="true" />
				</OutboundLink>
			</div>

			<div className="circle-container">
				<OutboundLink href="https://www.github.com/9ntonio" target={LINK_TARGET} rel={LINK_REL} aria-label="Visit Antonio Almena's GitHub profile (opens in new tab)">
					<FontAwesomeIcon className="github" icon={faGithub} size="2x" aria-hidden="true" />
				</OutboundLink>
			</div>

			<div className="circle-container">
				<OutboundLink
					href="https://www.medium.com/@9ntonio/unknown-pleasures-in-a-brave-new-world-ai-creativity-77f5560220bf"
					target={LINK_TARGET}
					rel={LINK_REL}
					aria-label="Read Antonio Almena's blog post about AI creativity (opens in new tab)"
				>
					<FontAwesomeIcon className="blog" icon={faBlog} size="2x" aria-hidden="true" />
				</OutboundLink>
			</div>
		</>
	);
}
