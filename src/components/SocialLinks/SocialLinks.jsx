const SocialLinks = ({ socialData }) => {
	return (
		<div className="socialLinksWrap flex gap-6 items-center lg:pl-[6.25rem] md:pl-0 pl-0">
			<h5 className="text-white font-Poppins font-bold text-[0.984375rem] uppercase">Follow Me</h5>
			<div className="socialLinks flex items-center gap-[5px]">
				{socialData.map(
					(item, index) =>
						index < 3 && (
							<a
								className="inline-block"
								href={item.socialLink}
								title={item.socialTitle}
								target="_blank"
								key={index}
								rel="noreferrer"
							>
								<img
									src={item.socialIcon}
									className="h-7 w-7 md:h-10 md:w-10 fill-white hover:fill-accent2"
									alt={item.socialTitle}
								/>
							</a>
						)
				)}
				{/* Social Links */}
			</div>
			{/* Social Links Wrap */}
		</div>
	);
};

export default SocialLinks;
